import React from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navigaion from './Navigation';
import Home from "./Home";
const About = () => {
    return(
        <div className="About">
        <Navigaion/>
        <Header
        title1="About Me"
        title2="This is what I do."
        />
        <Main
        text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?"
        text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!"
        text3="ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!"
        />
        <Footer/>
        </div>
    )
}
export default About;