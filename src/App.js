import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
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
import Property from "./Components/Pages/Property/Property";
import Login from "./Components/Pages/Sign Up/Login";
import PropertyDetail from "./Components/Pages/Property/PropertyDetail";
import propertyData from "./Components/Pages/Property/propertyData";
import NotFoundPage from "./Components/NotFoundPage";
import BackToTop from "./Components/BackToTop";

function App() {
  let location = useLocation(); 
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
       <BackToTop />
      <div style={{ marginBottom: 80 }}></div>
      <ScrollToTop />
       <AnimatePresence exitBeforeEnter>
       <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/aboutLuxury">
          <AboutLuxury />
        </Route>

        <Route path="/faq">
          <Faq />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/realEstate">
          <RealEstate />
        </Route>

        <Route path="/farmEstate">
          <FarmEstate />
        </Route>

        <Route path="/investment">
          <Investment />
        </Route>

        <Route exact path="/properties">
          <Property propertyData={propertyData} />
        </Route>

        <Route path="/properties/:propertyName">
          <PropertyDetail data={propertyData} />
        </Route>

        <Route path="/contact-us">
          <Contact />
        </Route>

        <Route path="/logIn">
          <Login />
        </Route>
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>
       </AnimatePresence>

      <Footer />
</div>
  );
}

export default App;
