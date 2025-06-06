import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilepic from '../assets/images/profile_pic.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilepic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vedesh95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vedesh-gawande-089a36168/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vedesh Gawande</h1>
          <p>Software Development Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vedesh95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vedesh-gawande-089a36168/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;