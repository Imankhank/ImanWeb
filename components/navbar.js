import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/iklogo.png";
import linkdin from "../assets/linkdin.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import menu from "../assets/menu.svg";
import Link from "next/link";
import NavbarMenu from "./navbar-menu";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center mt-2">
        <div>
          <Image className="rounded-circle" width={70} height={70} src={logo} />
        </div>
        <div className="d-md-block d-none">
          <div className="d-flex gap-5 ">
            <Link
              className="text-decoration-none color_666666 fs_20"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-decoration-none color_666666 fs_20"
              href={"/about-us"}
            >
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
            <Link
              className="text-decoration-none color_666666 fs_20"
              href={"/contact-us"}
            >
              Contact
            </Link>
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
        <button
          onClick={() => setShow(true)}
          className="d-md-none border-0 bg-transparent"
        >
          <Image className="rounded-circle" width={30} height={30} src={menu} />
        </button>
      </nav>
      <NavbarMenu show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default Navbar;
