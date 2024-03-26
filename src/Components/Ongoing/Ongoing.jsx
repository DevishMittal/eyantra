
import React, { useState } from 'react';
import './Ongoing.css'; // Import the CSS file for styling
import img1 from '../../assets/projects/face_rec.png'
import img2 from '../../assets/projects/Optimal Power Estimation and Utilization model in Tech Park Building with day to day Populatory index.png'
import img3 from '../../assets/projects/Lift Automation in University Building with crowdsourcing of Signals –Floor Navigator.png'
import img4 from '../../assets/projects/Development of Algorithms for Large graphs; Prefetching for GPUs.png'
import img5 from '../../assets/projects/Distributed Inference Cache with NVIDIA Triton and Redis.png'
import img6 from '../../assets/projects/Deploying AI Deep Learning Models with scalable classification problems.png'
import img7 from '../../assets/projects/Dynamic batching and concurrent execution of data models and comparison.png'
import img8 from '../../assets/projects/Automatic Vehicle parking with minimal time delay using AI techniques- A controller based networking approach.png'
import img9 from '../../assets/projects/Design of a virtual assistant to connect researchers across similar domain.png'
import img10 from '../../assets/projects/Analysis on model’s performance and memory utilization on a GPU ahead of production deployment scenarios.png'
import img11 from '../../assets/projects/Design and development of Virtual Digital Assistants – Robotic Assistive device with knowledge inferences of AI.png'
import img12 from '../../assets/projects/Development of Interactive, Creative, platform to teach AI, deep learning, and data science.png'
import img13 from '../../assets/projects/Generative AI to Build Content for Real-World Applications- using X AI and CUDA.png'
import img14 from '../../assets/projects/Visualization of Digital Twin integrated Smart City Applications as traffic intensities, air quality and noise pollution [Case Study – SRM Premises].png'

const ProjectGrid = () => {
  // State to manage whether abstract text is visible or not
  const [showAbstract, setShowAbstract] = useState(false);

  // Function to toggle abstract text visibility
  const toggleAbstract = () => {
    setShowAbstract(!showAbstract);
  };

  return (
    <div className="project-grid">
      {/* Project 1 */}
      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img1} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Face Recognition, Iris Recognition, Ear biometrics, Bio traits Analysis <br /> <p>Incharge - R.Brindha	P.Renukadevi</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>
      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img2} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Optimal Power Estimation and Utilization model in Tech Park Building with day to day Populatory indexe <br /> <p>Incharge -Dr. A. Anbarasi	Dr.Ajanthaa Lakkshmanan</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img3} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Lift Automation in University Building with crowdsourcing of Signals –Floor Navigator <br /> <p>Incharge -Dr.B.Amutha	Dr.Thamizhamuthu</p> </div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img4} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Development of Algorithms for Large graphs; Prefetching for GPUs <br /> <p>Incharge - Dr. P. Kirubanantham	Dr. B. Prakash</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img5} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Distributed Inference Cache with NVIDIA Triton and Redis <br /> <p>Incharge - Dr.J.D.Dorathi Jayaseeli	Dr.D.Malathi</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img6} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Deploying AI Deep Learning Models with scalable classification problems <br /> <p>Incharge - Dr.R.Jeya	Dr. Vidhya R</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img7} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Dynamic batching and concurrent execution of data models and comparison <br /> <p>Incharge - Dr.S.Nagadevi	Dr.M.Revathi</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img8} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Automatic Vehicle parking with minimal time delay using AI techniques- A controller based networking approach <br /> <p>Incharge - Dr.Jagadeesan S	Dr.Sathyapriya L</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img9} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Design of a virtual assistant to connect researchers across similar domain <br /> <p>Incharge - Dr.V.Deeban Chakravarthy 	Dr.M.Revathi</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img10} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Analysis on model’s performance and memory utilization on a GPU ahead of production deployment scenarios <br /> <p>Incharge - Vanusha D	Vathana D</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img11} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Design and development of Virtual Digital Assistants – Robotic Assistive device with knowledge inferences of AI <br /> <p>Incharge - Dr.K.R.Jansi	Dr.M.Arulprakash</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img12} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Development of Interactive, Creative, platform to teach AI, deep learning, and data science <br /> <p>Incharge - Dr. Vidhya R	Dr. Jagadeesan S</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img13} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Generative AI to Build Content for Real-World Applications- using X AI and CUDA <br /> <p>Incharge - Dr.M.Arulprakash	Dr.K.R.Jansi</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img14} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Visualization of Digital Twin integrated Smart City Applications as traffic intensities, air quality and noise pollution [Case Study – SRM Premises]. <br /> <p>Incharge - Dr.D.Malathi	Dr.J.D.Dorathi Jayaseeli</p></div>
        <div className="overlay">
          {/* Text overlay content for project 1 */}
        </div>
      </div>
      
    </div>
  );
}

export default ProjectGrid;
