import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MobileNav from "./Components/MobileNavbar/MobileNav";
import FarmEstate from "./Components/Pages/Services/FarmEstate";
import RealEstate from "./Components/Pages/Services/RealEstate";
import Investment from "./Components/Pages/Services/Investment";
import SignUp from "./Components/Pages/Sign Up/SignUp";
import AboutLuxury from "./Components/Pages/About us/AboutLuxury";
import Faq from "./Components/Pages/About us/Faq";
import Contact from "./Components/Pages/Contact Us/Contact";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Project from "./Components/Pages/Project/Project";
import projectData from './Components/Pages/Project/projectData'
import ProjectDetail from "./Components/Pages/Project/ProjectDetail";
import ProjectItem from "./Components/Pages/Project/ProjectItem";

function App() {
  return (
    <Router>
      <Navbar />
      <MobileNav />

      <div style={{ marginBottom: 80 }}></div>

      <ScrollToTop />
      <Switch>
        <Route path="/" exact > <Home/> </Route>
        <Route path="/aboutLuxury"> <AboutLuxury/> </Route>
        <Route path="/faq"> <Faq/> </Route>
         <Route path="/sign-up"> <SignUp/> </Route>
         <Route path="/realEstate"> <RealEstate/> </Route>
         <Route path="/farmEstate"> <FarmEstate/> </Route>
         <Route path="/investment"> <Investment/> </Route>
         {/* <Route path="/project"> <Project/> </Route> */}
         <Route path="/projectItem"> <ProjectItem projectData={projectData}/> </Route>

         <Route path="/contact-us"> <Contact/> </Route>

        {/* <Route path="/" exact component={Home} />
        <Route path="/aboutLuxury" component={AboutLuxury} />
        <Route path="/faq" component={Faq} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/realEstate" component={RealEstate} />
        <Route path="/farmEstate" component={FarmEstate} />
        <Route path="/investment" component={Investment} />
        <Route path="/project" component={Project} projectData={projectData}/>
        <Route path="/contact-us" component={Contact} /> */}

        <Route path="/project/:projectName">
                 <ProjectDetail data={projectData}/>
              </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
