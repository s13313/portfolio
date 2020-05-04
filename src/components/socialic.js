import React from "react"
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
      <a className="mr-5 icon" href="http://twitter.com/hamedjenabi_713">
        <Twitter />
      </a>
      <a className="mr-5 icon" href="https://www.instagram.com/hamed.jenabi">
        <Insta />
      </a>
      <a className="mr-5 icon" href="https://github.com/s13313">
        <Github />
      </a>
      <a className="mr-5 icon" href="mailto://hamed.jenabi@gmail.com">
        <Mail />
      </a>
    </div>
  )
}

export default socialic
