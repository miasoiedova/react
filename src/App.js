// import { ImageComponent } from "./components/ImageComponent";

function App() {
  return (
    <div className="main">
      {/* <ImageComponent src="/components/photo.jpg" alt="Alternative text"/>; */}
      <div className="contact">
                    <h2 className="title_personalInfo">
                        Contact
                    </h2>
                    <div className="content-contact">
                        <div className="content-contact-container">
                            <h3 className="title-content-contact">Address</h3>
                            <p className="text-content-contact">Kharkiv, Ukraine</p>
                        </div>
                        <div className="content-contact-container">
                            <h3 className="title-content-contact">Phone</h3>
                            <p className="text-content-contact">+380669913416</p>
                        </div>
                        <div className="content-contact-container">
                            <h3 className="title-content-contact">Email</h3>
                            <a href="mailto: a.myasoedova@icloud.com" className="text-content-contact link">a.myasoedova@icloud.com</a>
                        </div>
                        <div className="content-contact-container">
                            <h3 className="title-content-contact">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/anastasiia-miasoiedova-485b6a20a/?trk=nav_responsive_tab_profile_pic" className="text-content-contact link">https://www.linkedin.com/in/Miasoiedova/</a>
                        </div>
                    </div>
                </div>
                <div className="experience flexGap padding-workInfo" id="C-section">
                <h2 className="title-workInfo"><span className="nav" id="C-nav">C</span> Work Experience</h2>
                <div className="content-experience">
                    <p className="text-content-experience small-text"><span className="boldText text-content-experience">Name of employer:</span><a href="https://abinbevefes.com.ua/" class="link">AbInbevEfes</a> <br/>
                        <span className="boldText text-content-experience">Dates of employment:</span>04/2021 - present<br/>
                        <span className="boldText text-content-experience">Job title:</span>Financial specialist<br/>
                        <span className="boldText text-content-experience">Project/Role description:</span>Working with different types of accounting documents. Asssesing and solving the most crucial problems. Working with annual reports.
                    </p>
                    <p class="text-content-experience small-text previous-job"><span className="boldText text-content-experience">Name of employer:</span> <a href="https://privatbank.ua/" class="link">PrivatBank</a> <br/>
                        <span className="boldText text-content-experience">Dates of employment:</span>08/2020 - 02/2021<br/>
                        <span className="boldText text-content-experience">Job title:</span>Sales Manager <br/>
                        <span className="boldText text-content-experience">Project/Role description:</span>Working with new clients of the bank. Promote banking products.
                    </p>
                </div>
            </div>
    </div>
  );
}

export default App;
