import React from "react";
import logo from "../assets/iklogo.png";
import Image from "next/image";
import Link from "next/link";
import linkdin from "../assets/linkdin.svg";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center mt-5 pt-5">
      <div>
        <Image className="rounded-circle" width={70} height={70} src={logo} />
      </div>
      <div className="d-flex gap-5 align-items-center">
        <a href="tel:+916360749419">+91 6360749419</a>
        <a href="https://mail.google.com/mail/?view=cm&tf=0&to=imankhan.coorg@gmail.com">
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
    </footer>
  );
};

export default Footer;
