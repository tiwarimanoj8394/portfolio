import React from 'react'
import './project.css'
import Project1 from '../../assets/portfolio-1.png'
import Project2 from '../../assets/portfolio-2.png'
import Project3 from '../../assets/portfolio-3.png'
import Project4 from '../../assets/portfolio-6.png'
// prtfolio
const Projects = () => {
    return (
        <section id="works">
            <h2 className="workstitle"> My Projects</h2>
            <span className="workdesk">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora sed sit aliquid libero atque, numquam non nam quia! Optio minus sequi dolore animi nobis laborum incidunt, impedit blanditiis officia?
            </span>
            <div className="workimgs">
                <img src={Project1} alt="project1" className="workimg" />
                <img src={Project2} alt="Project2" className="workimg" />
                <img src={Project3} alt="Project3" className="workimg" />
                <img src={Project4} alt="Project4" className="workimg" />
            </div>
        </section>
    )
}

export default Projects