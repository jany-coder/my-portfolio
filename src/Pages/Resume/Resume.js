import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div>
            <h1>Md. Azizul Haque</h1>
            <h2 className="mt-20">Career Objective</h2>
            <p>To obtain the post in your forward thinking and exciting organization, where my education and skills will be a pivot; a responsible position offering both challenge and opportunity for professional growth.</p>
            <h2 className="mt-20">Skill Highlights</h2>
            <ul className="ml-10">
                <li>Front-End: HTML, CSS, Bootstrap, JavaScript, React, Material UI, SASS</li>
                <li>Backend: Mongo dB, Node JS, Express JS</li>
                <li>Authentication: Firebase </li>
                <li>Hosting: Netlify, Heroku, Firebase </li>
                <li>Familiar: Redux, Next.js, React Native</li>
                <li>Tools: Visual Studio Code, Brackets, Chrome Dev Tool, Android Studio</li>
                <li>Others: Microsoft office, Microsoft PowerPoint, WordPress, Photoshop, Illustrator, Camtasia</li>
            </ul>
            <h2 className="mt-20">Project</h2>
            <div>
                <h3> <u>Startup Consultant</u></h3>
                <h4>Features</h4>
                <ul className="ml-10">
                    <li>Get Consultant</li>
                    <li>Appointment By Date</li>
                    <li>Individual Dashboard </li>
                </ul>
                <p><a href="https://startupconsultant-84acc.web.app/">Website</a></p>
                <p><a href="https://github.com/jany-coder/StartupConsultant">Github Repository</a></p>
                <p>Technology: React, Bootstrap, CSS, Firebase, Node JS, Mongo dB, Font Awesome</p>
            </div>

            <div>
                <h3> <u>Hungry Monster</u></h3>
                <h4>Features</h4>
                <ul className="ml-10">
                    <li>Get Consultant</li>
                    <li>Appointment By Date</li>
                    <li>Individual Dashboard </li>
                </ul>
                <p><a href="https://startupconsultant-84acc.web.app/">Website</a></p>
                <p><a href="https://github.com/jany-coder/StartupConsultant">Github Repository</a></p>
                <p>Technology: React, Bootstrap, CSS, Firebase, Node JS, Mongo dB, Font Awesome</p>
            </div>

            <div>
                <h3> <u>Fresh Bazar</u></h3>
                <h4>Features</h4>
                <ul className="ml-10">
                    <li>Get Consultant</li>
                    <li>Appointment By Date</li>
                    <li>Individual Dashboard </li>
                </ul>
                <p><a href="https://startupconsultant-84acc.web.app/">Website</a></p>
                <p><a href="https://github.com/jany-coder/StartupConsultant">Github Repository</a></p>
                <p>Technology: React, Bootstrap, CSS, Firebase, Node JS, Mongo dB, Font Awesome</p>
            </div>
            <h2 className="mt-20">Experience</h2>
            <div>
                <ul className="ml-10">
                    <li>Front-End-Developer: ST Solution – Technology Used: HTML, CSS, Bootstrap - 2018</li>
                    <li>Support Engineer: Earth Telecommunication (IIG) – Support Technical Issues - 2016</li>
                    <li>Graphic Designer (Contractual): BJIT - 2014 </li>
                </ul>
            </div>

            <h2 className="mt-20">Professional Course</h2>
            <div>
                <ul className="ml-10">
                    <li>Full Stack Web Development – Programming Hero - 2021</li>
                    <li>Core Java – New Horizon - 2016</li>
                    <li>Graphic Design -  Jobs BD - 2014 </li>
                    <li>CCNA – CSLiT - 2014</li>
                </ul>
            </div>
            <h2 className="mt-20">Education</h2>
            <div>
                <ul className="ml-10">
                    <li>Masters: MIT - Masters in Information Technology – 2017 -
                    Jahangirnagar University, Dhaka-1342
                    </li>
                    <li>•	Bachelor of Science: ETE (Electronics and Telecommunication Engineering) - 2014 -
                    Daffodil International University, Shukrabad Campus, Dhaka-1207
                    </li>
                </ul>
            </div>
            <div className="h-sub-text mt-60">
                <a
                    type="button"
                    href="https://drive.google.com/drive/u/0/folders/1-mI-C9oM--c3wvp3UGCLv8wZZ2yjdocj"
                    className="btn"
                    rel="noreferrer"
                    target="_blank"
                    style={{ "text-decoration": "none" }}
                >
                    Download Cv
        </a>
            </div>



        </div>
    );
};

export default Resume;