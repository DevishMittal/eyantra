import React from 'react'
import whatPhoto1 from '../../assets/mission.jpg'
import whatPhoto2 from '../../assets/vision.jpg'
import './About.css'
const Programs = () => {
  return (
    <div className='about'>
        {/* <h1>About Us</h1>
        <h3>Our Mission and Vision</h3>
         */}
        <div className='mission'>
          <div className='mission-text'>
            <h2>Mission</h2>
            <p>The High-Performance Computing Laboratory (HPCL)
is going to be established as a part of Department of
Computing Technologies under School of Computing,
SRMIST. In HPCL, we believe that achieving high
performance must not come at the cost of software
quality, maintainability, and extensibility. Moreover, we
believe that the productivity and happiness of HPC software developers is important to the
overall success of HPC in enabling more and better science across many scientific domains.
HPCL aims to spread its wings across several areas, including optimizing compilers,
performance modeling and optimization, parallel algorithms, and software engineering,
Supercomputing. Cluster, GRID and Cloud computing</p>
          </div>
            <div className='image'>
              <img src={whatPhoto1} alt="" />
              </div>
        </div>
        <div className='mission'>
       
          <div className='mission-text'>
            <h2>Vision</h2>
            <p><strong>Static and Dynamic Analysis for Performance Modeling and Security: </strong>This involves analyzing
software statically (without execution) and dynamically (during execution) to understand its
performance characteristics and detect potential security vulnerabilities. Machine learning
techniques can be used to model runtime behavior, and various approaches can be employed to
ensure software quality. <br />
 <strong>Data Mining for HPC Software Engineering: </strong> Data mining techniques can be applied to study
and improve the processes involved in developing software for High-Performance Computing
(HPC) environments. This can include analyzing large datasets to identify patterns and optimize
software engineering practices. <br />
<strong>Natural Language Processing for Developer Productivity:</strong>  Natural Language Processing (NLP)
methods can be used to study and enhance the productivity of HPC software developers. This
might involve analyzing text data such as code comments, documentation, and communication
among developers to improve collaboration and efficiency. <br />
<strong>Designing and Optimizing Algorithms:</strong> This includes developing new algorithms or improving
existing ones in various application areas such as dynamic graphs, computational physics, and
computational biology. These algorithms are designed to run efficiently on parallel computing
architectures and accelerators like GPUs. <br />
 <strong>Parallel Scientific Software Environments:</strong> Building environments for parallel scientific
software, which includes features like machine learning-based auto-tuning and load balancing, to
optimize performance and resource utilization in parallel computing environments.</p>
          </div>
           <div className='image'>
              <img src={whatPhoto2} alt="" />
              </div>
 
        </div>
    </div>
  )
}

export default Programs
