import React from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navigaion from './Navigation';
import About from "./About";
const Home = () => {
    return(
        <div className="Home">
        <Navigaion/>
        <Header
        title1="Clean Blog"
        title2="A Blog Theme by Start Bootstrap"
        />
        <Main
        
        />
        <Footer/>
     
        </div>

    )
}
export default Home;