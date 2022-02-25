import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/0538Aritra">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/aritra.mondal.370"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/aritra0538/"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/aritra-mondal-b083121a5/"
      >
        <GrLinkedin />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Aritra-Mondal"
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
