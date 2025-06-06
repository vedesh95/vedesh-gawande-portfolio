import { faDocker, faJava, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring",
    "SpringBoot",
    "Spring Data",
    "Spring AOP",
    "Spring Security",
    "Junit",
    "Mockito",
];

const labelsSecond = [
    "Git",
    "Docker",
    "AWS",
    "Azure",
    "Kubernetes",
];

const labelsThird = [
    "SOLID Principles",
    "Design Patterns",
    "Low Level Design",
    "High Level Design",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java Backend</h3>
                    <p>Experienced in building scalable backend systems using Java and Spring Boot. Proficient in designing RESTful APIs, microservices, and integrating with databases. Focused on clean code, design principles, and performance</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>Skilled in CI/CD, containerization, and cloud infrastructure using Docker, Kubernetes, and AWS/Azure. Passionate about automation and delivering reliable, scalable systems through DevOps best practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faStackOverflow} size="3x"/>
                    <h3>System Design</h3>
                    <p>Skilled in designing scalable, resilient, and maintainable systems. Experienced in breaking down complex requirements into modular architectures using microservices, event-driven patterns, and cloud-native principles.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;