import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [username]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else {
        return done(null, false, { message: 'No user with that email.' });
      }
    } catch (err) {
      return done(err);
    }
  }
));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/auth/google/callback',
  passReqToCallback: true
},
async (request, accessToken, refreshToken, profile, done) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [profile.email]);
    if (result.rows.length === 0) {
      const newUser = await db.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [profile.email, '']);
      return done(null, newUser.rows[0]);
    } else {
      return done(null, result.rows[0]);
    }
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    done(null, result.rows[0]);
  } catch (err) {
    done(err);
  }
});

app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/api/secrets',
  failureRedirect: '/login',
  failureFlash: false
}));

app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/api/secrets');
  }
);

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
