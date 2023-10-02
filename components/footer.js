import React from "react";
import logo from "../assets/iklogo.png";
import Image from "next/image";
import Link from "next/link";
import linkdin from "../assets/linkdin.svg";
import github from "../assets/github.svg";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex flex-lg-row flex-column gap-5 justify-content-between align-items-center mt-5 pt-5">
        <div>
          <Image className="rounded-circle" width={70} height={70} src={logo} />
        </div>
        <div className="d-flex gap-5 align-items-center flex-sm-row flex-column">
          <a href="tel:+916360749419">+91 6360749419</a>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&tf=0&to=imankhan.coorg@gmail.com"
          >
            imankhan.coorg@gmail.com
          </a>
          <div className="d-flex gap-3">
            <Link className="text-decoration-none color_666666" href={"/"}>
              <Image
                className="rounded-circle"
                width={20}
                height={20}
                src={github}
              />
            </Link>
            <Link
              target="_blank"
              className="text-decoration-none color_666666"
              href={"https://www.linkedin.com/in/iman-khan-82a484226"}
            >
              <Image
                className="rounded-circle"
                width={20}
                height={20}
                src={linkdin}
              />
            </Link>
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "#666666",
          backgroundColor: "#666666",
          height: "3px",
          border: "none",
        }}
      />
      <div className="d-flex flex-lg-row flex-column gap-4 justify-content-between align-items-center">
        <div className="d-flex flex-sm-row flex-column gap-5 ">
          <Link className="text-decoration-none color_666666 fs_20" href={"/"}>
            Home
          </Link>
          <Link className="text-decoration-none color_666666 fs_20" href={"/about-us"}>
            About
          </Link>
          <Link
            className="text-decoration-none color_666666 fs_20"
            href={"/my-tech-stack"}
          >
            Tech Stack
          </Link>
          <Link
            className="text-decoration-none color_666666 fs_20"
            href={"/my-projects"}
          >
            Projects
          </Link>
          <Link className="text-decoration-none color_666666 fs_20" href={"/contact-us"}>
            Contact
          </Link>
        </div>
        <p>
          Designed and built by
          <span className={`${styles?.footerstyle}`}> Iman Khan</span> with{" "}
          <span className={`${styles?.footerstyle}`}>Love</span> &{" "}
          <span className={`${styles?.footerstyle}`}>Coffee</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
