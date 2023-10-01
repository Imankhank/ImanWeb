import React from "react";
import styles from "../styles/Home.module.css";
import afinue from "../assets/project-images/afinue logo.png";
import zameen from "../assets/project-images/zameen.webp";
import almnd from "../assets/project-images/almnd.png";
import fflogo from "../assets/project-images/fflogo.svg";
import live from "../assets/project-images/live.svg";
import Image from "next/image";
import { limitStringWithEllipsis } from "./helper";

const MyProjectSection = () => {
  const projectData = [
    {
      image: afinue,
      title: "Afinue",
      description:
        "Designed and developed a robust admin panel in React.js and a user portal with Next.js, prioritizing responsive design, seamless integration, and UI/UXoptimization for an innovative investment platform.",
      techUsed: "Next js, React js bootstrap, css, html",
      url: "https://afinue.com/",
    },
    {
      image: zameen,
      title: "Zameen Sqare",
      description:
        "Integrated APIs to optimize property listings, UX, and implement responsive design. Collaborated crossfunctionally for SEO enhancements, iterative strategy refinement, and fostering user engagement to fuel company growth.",
      techUsed: "Next js, React js bootstrap, css, html",
      url: "https://zameensquare.com/",
    },
    {
      image: almnd,
      title: "Almnd",
      description:
        "Developed a responsive and interactive frontend using advanced tech stack components for a full-stack development educational website. Collaborated on content curation to meet industry standards, enhancing user experience, and contributing to platform growth",
      techUsed: "React js, bootstrap, css, html",
      url: "https://www.almnd.in/",
    },
    {
      image: fflogo,
      title: "FF Ecommerce",
      description:
        "Implemented responsive user interfaces with React fora fully dynamic e-commerce platform, enabling granular product and discount administration, seamless integration of icons and logos, all managed via an advanced admin panel to optimize dynamic user experiences.",
      techUsed: "React js, bootstrap, css, html",
      url: "hhttps://master.d3eq65l676vrcs.amplifyapp.com/",
    },
  ];
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="color_42446E fw_800 fs_50 text-center">Projects</h1>
      <p className="color_000000 text-center fs_20 opacity-25">
        Projects I've been working with recently
      </p>
      <div className="row">
        {projectData.map((proj) => {
          return (
            <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
              <div
                class={`card mt-5 mx-xl-3 rounded-4 ${styles.projCard} border-0`}
                style={{ maxWidth: "22rem" }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  class="card-img-top px-2"
                  src={proj?.image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title color_000000 fw_500 fs_28 ">
                    {proj?.title}
                  </h5>
                  <p
                    title={proj?.description}
                    class="card-text color_666666 fw_300 fs_18"
                  >
                    {limitStringWithEllipsis(proj?.description, 119)}
                  </p>
                  <div className="d-flex gap-2 align-items-center">
                    <Image
                      src={live}
                      style={{ width: "20px", height: "20px" }}
                      alt="live preview image"
                    />
                    <a
                      target="_blank"
                      href={proj?.url}
                      class={`${styles.webLink}`}
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjectSection;
