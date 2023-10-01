import React from "react";
import styles from "../styles/Home.module.css";
import afinue from "../assets/project-images/afinue logo.png";
import zameen from "../assets/project-images/zameen.webp";
import almnd from "../assets/project-images/almnd.png";
import fflogo from "../assets/project-images/fflogo.svg";

import Image from "next/image";

const MyProjectSection = () => {
  const projectData = [
    {
      image: afinue,
      title: "Afinue",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techUsed: "Next js, bootstrap, css, html",
      url: "https://afinue.com/",
    },
    {
      image: afinue,
      title: "Afinue",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techUsed: "Next js, bootstrap, css, html",
      url: "https://afinue.com/",
    },
    {
      image: afinue,
      title: "Afinue",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techUsed: "Next js, bootstrap, css, html",
      url: "https://afinue.com/",
    },
    {
      image: afinue,
      title: "Afinue",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techUsed: "Next js, bootstrap, css, html",
      url: "https://afinue.com/",
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
            <div className="col-lg-4 col-sm-6 col-12">
              <div
                class={`card mt-5 mx-xl-3 rounded-4 ${styles.projCard} border-0`}
                style={{ maxWidth: "100%" }}
              >
                <Image
                  style={{ width: "100%", height: "250px" }}
                  class="card-img-top"
                  src={proj?.image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title color_000000 fw_500 fs_28 ">
                    {proj?.title}
                  </h5>
                  <p class="card-text color_666666 fw_300 fs_18">{proj?.description}</p>
                  <a target="_blank" href={proj?.url} class="btn btn-primary">
                    Live Preview
                  </a>
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
