import '../assets/styles/Project.scss';

function Certification() {
    return(
        <div className="projects-container" id="certification">
            <h1>Certifications</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.credly.com/badges/cc95b432-d65a-411e-83bc-e74be0665f7b" target="_blank" rel="noreferrer"><img src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="project">
                    <a href="https://www.credly.com/badges/f04c35f7-6a72-41f7-b0f1-667961465578" target="_blank" rel="noreferrer"><img src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="project">
                    <a href="https://www.credly.com/badges/19093722-c0da-4778-bdf1-10d88473c2c8" target="_blank" rel="noreferrer"><img src="https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png" className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                {/* <div className="project">
                    <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                    <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
                </div>
       */}
    
            </div>
        </div>
    );
}

export default Certification;