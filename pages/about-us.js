import Layout from "@/components/layout";
import MyTechSection from "@/components/tech-sec";
import Image from "next/image";
import React from "react";
import office from "../assets/about-us/office.svg";
import location from "../assets/about-us/location.svg";
import time from "../assets/about-us/time.svg";
const TechStack = () => {
  return (
    <Layout>
      <div className="col-lg-8 col-12 mt-5">
        <div>
          <h2 className="color_42446E fw_700 fs_42">About Me</h2>
          <p className="color_666666 fw_400 fs_18 mt-3">
            Experienced Front End Developer specializing in React.js and
            Next.js, proficient in JavaScript ES6+, Redux, and SSR (Server-Side
            Rendering). Adept at creating SPA (Single Page Applications) with
            seamless client-side navigation using React Router. Skilled in
            optimizing web performance through code-splitting and lazy loading.
            Committed to delivering pixel-perfect UIs with responsive design.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="color_42446E fw_700 fs_42">Work Experience</h2>
          <div className="d-flex justify-content-between mt-4 flex-sm-row flex-column">
            <div>
              <h2 className="color_666666 fw_400 fs_20">
                Associate Web Developer
              </h2>
              <div className="color_A7A7A7 fs_15 fw_500 d-flex gap-lg-5 gap-2 align-items-center mt-3">
                <span>
                  <Image
                    style={{ height: "25px", width: "25px" }}
                    className="me-2"
                    src={office}
                    alt="company logo"
                  />
                  FirstFloor Infotech
                </span>
                <span>
                  <Image
                    style={{ height: "25px", width: "25px" }}
                    className="me-2"
                    src={location}
                    alt="company logo"
                  />
                  Mysore
                </span>
              </div>
            </div>
            <div className="">
              <div
                style={{
                  width: "fit-content",
                  float: "right",
                  display: "block",
                }}
                className="rounded-5 bg_D7FFE0 px-3 py-1 fw_600 fs_15 color_018C0F d-sm-block d-none "
              >
                Full time
              </div>
              <div
                style={{ width: "fit-content", display: "block" }}
                className="rounded-5 bg_D7FFE0 px-3 py-1 fw_600 fs_15 color_018C0F  d-sm-none mt-3"
              >
                Full time
              </div>
              <br className="d-sm-block d-none" />
              <p className="color_A7A7A7 fs_15 fw_500 mt-3">
                <Image
                  style={{ height: "25px", width: "25px" }}
                  className="me-2"
                  src={time}
                  alt="company logo"
                />
                October 2021 - Present
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="color_42446E fw_700 fs_42">Education</h2>
          <div className="d-flex justify-content-between mt-4 flex-sm-row flex-column">
            <div>
              <h2 className="color_666666 fw_400 fs_20">
                Bachelor in Electrical & Electronics
              </h2>
              <div className="color_A7A7A7 fs_15 fw_500 d-flex gap-lg-5 gap-2 align-items-center mt-3">
                <span>
                  <Image
                    style={{ height: "25px", width: "25px" }}
                    className="me-2"
                    src={office}
                    alt="company logo"
                  />
                  Vidya Vardhaka College of Engineering
                </span>
                <span>
                  <Image
                    style={{ height: "25px", width: "25px" }}
                    className="me-2"
                    src={location}
                    alt="company logo"
                  />
                  Mysore
                </span>
              </div>
            </div>
            <div className="">
              <div
                style={{
                  width: "fit-content",
                  float: "right",
                  display: "block",
                }}
                className="rounded-5 bg_D7FFE0 px-3 py-1 fw_600 fs_15 color_018C0F d-sm-block d-none "
              >
                Full time
              </div>
              <div
                style={{ width: "fit-content", display: "block" }}
                className="rounded-5 bg_D7FFE0 px-3 py-1 fw_600 fs_15 color_018C0F  d-sm-none mt-3"
              >
                Full time
              </div>
              <br className="d-sm-block d-none" />
              <p className="color_A7A7A7 fs_15 fw_500 mt-3">
                <Image
                  style={{ height: "25px", width: "25px" }}
                  className="me-2"
                  src={time}
                  alt="company logo"
                />
                July 2018 - July 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
