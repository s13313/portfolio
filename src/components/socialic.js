import React from 'react';
import "../components/socialic.css"
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

const socialic = () => {
    return (
        <div className="icons">
            <a className="mr-5 icon" href="https://twitter.com/Mr404Found">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/sumanth.zero7">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/Mr404Found">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.youtube.com/channel/UCw0FDIL-HpcfzEZrjcQwhMQ"
        >
          <Youtube />
        </a>
        <a className="mr-5 icon" href="mailto://contactmr404here@gmail.com">
          <Mail />
        </a>
        </div>
    );
}

export default socialic;
