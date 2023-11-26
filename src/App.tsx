import Text from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Spacer from './components/Spacer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      {/* TODO: find a more BootStrap-thonic way of doing this */}
      <div className="container">
        <Spacer size={2}/>
        <div className="row">
          <div className="col d-flex justify-content-center bio-blurb">
            Hey there! I'm Anthony Hartmann, a passionate Full Stack Software Engineer who loves bringing ideas to life. As a Co-Founder and Software Engineer at Fabric, I lead the charge in creating cool features using Ruby on Rails, Python, and React/TypeScript. Whether it's building a new platform for DoorDash or working on innovative projects like mindswarms, Inc., I thrive on crafting web applications that make a difference. As an Interview Tutor/Lecturer at InterviewKickstart, I've had the awesome opportunity to help over 300 software engineers reach their career goals through mock interviews and lively lectures. With a B.A. in Computer Science from the University of California, Berkeley, and skills in Python, Java, Kotlin, and more, I'm all about making tech fun and impactful. Let's connect and chat about how I can bring my energy and skills to your team! 😊✨
          </div>
          <div className="col d-flex justify-content-center">  
            <img
              src="/images/skele.jpeg"
              className="rounded float-right"
              alt="Responsive image"
              style={{maxWidth:"80%"}}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <h1 id="experience">Experience</h1>
          </div>
        </div>
        <div className="row justify-content-center" style={{paddingLeft: "3%"}}>
          <div className="col-lg-3 text-center">
            <div className="img-card">
              <img className="img-responsive" src="/images/fabric-logo-black.svg"/>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="img-card">
              <img className="img-responsive" src="/images/doordash-logo.svg"/>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <div className="img-card">
              <img className="img-responsive" src="/images/interview-kickstart-logo.svg"/>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 text-center">
            <div className="img-card">
              <img className="img-responsive" src="/images/mindswarms.svg"/>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="img-card">
              <img className="img-responsive" src="/images/primary-logo-white.svg"/>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 id="projects" className="text-center">Projects</h1>
        </div>
        <Spacer size={2}/>
        <div className="row">
          <h1 id="links" className="text-center">Links</h1>
        </div>
        <Spacer size={2}/>
      </div>
    </div>
  );
}

export default App;
