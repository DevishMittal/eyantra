
import React, { useState } from 'react';
import './Ongoing.css'; // Import the CSS file for styling
import img1 from '../../assets/projects/face_rec.jpeg'
import img2 from '../../assets/projects/Optimal Power Estimation and Utilization model in Tech Park Building with day to day Populatory index.jpeg'
import img3 from '../../assets/projects/Lift Automation in University Building with crowdsourcing of Signals –Floor Navigator.jpeg'
import img4 from '../../assets/projects/Development of Algorithms for Large graphs; Prefetching for GPUs.jpeg'
import img5 from '../../assets/projects/Distributed Inference Cache with NVIDIA Triton and Redis.jpeg'
import img6 from '../../assets/projects/Deploying AI Deep Learning Models with scalable classification problems.jpeg'
import img7 from '../../assets/projects/Dynamic batching and concurrent execution of data models and comparison.jpeg'
import img8 from '../../assets/projects/Automatic Vehicle parking with minimal time delay using AI techniques- A controller based networking approach.jpeg'
import img9 from '../../assets/projects/Design of a virtual assistant to connect researchers across similar domain.jpeg'
import img10 from '../../assets/projects/Analysis on model’s performance and memory utilization on a GPU ahead of production deployment scenarios.jpeg'
import img11 from '../../assets/projects/Design and development of Virtual Digital Assistants – Robotic Assistive device with knowledge inferences of AI.jpeg'
import img12 from '../../assets/projects/Development of Interactive, Creative, platform to teach AI, deep learning, and data science.jpeg'
import img13 from '../../assets/projects/Generative AI to Build Content for Real-World Applications- using X AI and CUDA.jpeg'
import img14 from '../../assets/projects/Visualization of Digital Twin integrated Smart City Applications as traffic intensities, air quality and noise pollution [Case Study – SRM Premises]..jpeg'

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
        <div className="text-above-image">Face Recognition, Iris Recognition, Ear biometrics, Bio traits Analysis <br /> <p>Incharge <br /> Mrs R.Brindha <br />Mrs. P.Renukadevi</p></div>
        <div className="overlay"> ABSTRACT: <br />
        This project explores various biometric recognition techniques including face, iris, and ear recognition, along with bio traits analysis.
          {/* Text overlay content for project 1 */}
        </div>
      </div>
      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img2} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Optimal Power Estimation and Utilization model in Tech Park Building with day to day Populatory indexe <br /> <p>Incharge <br />Dr. A. Anbarasi <br />	Dr.Ajanthaa Lakkshmanan</p></div>
        <div className="overlay"> ABSTRACT: <br />
        An innovative model is proposed for estimating and utilizing power optimally in a technology park building, considering daily population fluctuations.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img3} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Lift Automation in University Building with crowdsourcing of Signals –Floor Navigator <br /> <p>Incharge <br /> Dr.B.Amutha	<br />Dr.Thamizhamuthu</p> </div>
        <div className="overlay"> ABSTRACT: <br />
        Lift automation is enhanced in university buildings through crowd-sourced signals and a floor navigation system, improving efficiency and user experience.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img4} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Development of Algorithms for Large graphs; Prefetching for GPUs <br /> <p>Incharge <br /> Dr. P. Kirubanantham	<br />Dr. B. Prakash</p></div>
        <div className="overlay"> ABSTRACT: <br />
        Algorithms are developed for efficiently processing large graphs and implementing prefetching techniques for GPUs, enhancing computational performance.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img5} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Distributed Inference Cache with NVIDIA Triton and Redis <br /> <p>Incharge <br /> Dr.J.D.Dorathi Jayaseeli <br />Dr.D.Malathi</p></div>
        <div className="overlay"> ABSTRACT: <br />
        This project introduces a distributed inference cache system using NVIDIA Triton and Redis, facilitating efficient inference processing in machine learning models.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img6} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Deploying AI Deep Learning Models with scalable classification problems <br /> <p>Incharge <br /> Dr.R.Jeya	<br />Dr. Vidhya R</p></div>
        <div className="overlay"> ABSTRACT: <br />
        The deployment of AI deep learning models is optimized for scalability, particularly focusing on solving classification problems effectively.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img7} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Dynamic batching and concurrent execution of data models and comparison <br /> <p>Incharge <br /> Dr.S.Nagadevi	<br />Dr.M.Revathi</p></div>
        <div className="overlay"> ABSTRACT: <br />
        Dynamic batching and concurrent execution techniques are employed to enhance the efficiency of data models, with a comparative analysis of their performance.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img8} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Automatic Vehicle parking with minimal time delay using AI techniques- A controller based networking approach <br /> <p>Incharge <br /> Dr.Jagadeesan S	<br />Dr.Sathyapriya L</p></div>
        <div className="overlay"> ABSTRACT: <br />
        An automatic vehicle parking system is designed to minimize time delays using AI techniques, employing a controller-based networking approach for optimal functionality.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img9} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Design of a virtual assistant to connect researchers across similar domain <br /> <p>Incharge <br /> Dr.V.Deeban Chakravarthy 	<br />Dr.M.Revathi</p></div>
        <div className="overlay"> ABSTRACT: <br />
        A virtual assistant is designed to connect researchers within similar domains, facilitating collaboration and knowledge exchange.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img10} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Analysis on model’s performance and memory utilization on a GPU ahead of production deployment scenarios <br /> <p>Incharge <br />Mrs. Vanusha D	<br /> Mrs. Vathana D</p></div>
        <div className="overlay"> ABSTRACT: <br />
        Performance analysis and memory utilization assessment of models on GPUs are conducted to optimize production deployment scenarios.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img11} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Design and development of Virtual Digital Assistants – Robotic Assistive device with knowledge inferences of AI <br /> <p>Incharge <br /> Dr.K.R.Jansi <br />Dr.M.Arulprakash</p></div>
        <div className="overlay"> ABSTRACT: <br />
        Virtual digital assistants are developed as robotic assistive devices equipped with AI knowledge inferences to assist users effectively.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img12} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Development of Interactive, Creative, platform to teach AI, deep learning, and data science <br /> <p>Incharge <br /> Dr. Vidhya R	<br />Dr. Jagadeesan S</p></div>
        <div className="overlay"> ABSTRACT: <br />
        An interactive and creative platform is developed to educate users on AI, deep learning, and data science concepts.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img13} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Generative AI to Build Content for Real-World Applications- using X AI and CUDA <br /> <p>Incharge <br /> Dr.M.Arulprakash	<br />Dr.K.R.Jansi</p></div>
        <div className="overlay"> ABSTRACT: <br />
        Generative AI techniques are employed to create content for real-world applications using X AI and CUDA, catering to various industry needs.
          {/* Text overlay content for project 1 */}
        </div>
      </div>      <div className="project project-1" onClick={toggleAbstract}>
        {/* Image */}
        <img src={img14} alt="Project 1" />
        {/* Text above the image */}
        <div className="text-above-image">Visualization of Digital Twin integrated Smart City Applications as traffic intensities, air quality and noise pollution [Case Study – SRM Premises]. <br /> <p>Incharge <br /> Dr.D.Malathi <br />	Dr.J.D.Dorathi Jayaseeli</p></div>
        <div className="overlay"> ABSTRACT: <br />
        Digital twin visualization is utilized to integrate smart city applications, providing insights into traffic intensities, air quality, and noise pollution within SRM premises as a case study.
          {/* Text overlay content for project 1 */}
        </div>
      </div>
      
    </div>
  );
}

export default ProjectGrid;
