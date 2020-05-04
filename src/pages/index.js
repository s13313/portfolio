import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Appbar from "../components/appbar";
import Type from "../components/type";
import Intro from "../components/intro";
import Social from "../components/socialic";
import Image from "../components/image";
import "../components/style.css";
const IndexPage = () => (
  <div>
    <div className="div1">
    <Appbar />
      <Image className="myimage" />
      <Type />
      <Intro />
    </div>
    <div className="div2">
  <p className="post-section"></p>
    </div>
    {/* <b className="post-section">PROJECTS</b> */}
    {/* <hr className="firsthr"/> */}
    {/* <div className="b2top"></div> */}
    <Social />
    <br />
    <br />
    <Footer />
    {/* <div id="mybutton">
      <button class="feedback">Top</button>
    </div> */}
  </div>
);

export default IndexPage;
