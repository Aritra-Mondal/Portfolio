import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { client } from "../../client";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const query = '*[_type == "pdfUploader"]';
    client.fetch(query).then((data) => {
      setUrl(data[0].generatedPDFURL.current);
    });
    console.log(url);
  }, [url]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <h1>ARITRA MONDAL</h1>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "project", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <a
          className="resume"
          href={url}
          download
          target="_blank"
          rel="noreferrer"
        >
          <b>Download Resume</b>
        </a>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "project", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="resume"
              href={url}
              download
              target="_blank"
              rel="noreferrer"
            >
              <b>Download Resume</b>
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
