import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/iklogo.png";
import Image from "next/image";
import Link from "next/link";
import linkdin from "../assets/linkdin.svg";
import github from "../assets/github.svg";
const NavbarMenu = ({ show, handleClose = () => {} }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} responsive="lg">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {" "}
          <div>
            <Image
              className="rounded-circle"
              width={70}
              height={70}
              src={logo}
            />
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          <div className="d-flex flex-column gap-5 ">
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
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavbarMenu;
