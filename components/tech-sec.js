import React from "react";
import bitBucket from "../assets/tech-images/bitbucket.png";
import bootstrap from "../assets/tech-images/bootstrap.svg";
import react from "../assets/tech-images/recact.svg";
import css from "../assets/tech-images/css.svg";
import git from "../assets/tech-images/git.svg";
import github from "../assets/tech-images/github.svg";
import html from "../assets/tech-images/html.png";
import js from "../assets/tech-images/js.svg";
import vscode from "../assets/tech-images/vscode.svg";
import Image from "next/image";

const MyTechSection = () => {
  const techImages = [
    {
      image: html,
      title: "HTML",
    },
    {
      image: css,
      title: "CSS",
    },
    {
      image: js,
      title: "JAVASCRIPT",
    },
    {
      image: bootstrap,
      title: "BOOTSTRAP",
    },
    {
      image: react,
      title: "REACT",
    },
    {
      image: git,
      title: "GIT",
    },
    {
      image: github,
      title: "GITHUB",
    },
    {
      image: vscode,
      title: "VS CODE",
    },
    {
      image: bitBucket,
      title: "VS CODE",
    },
  ];
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="color_42446E fw_800 fs_50 text-center">My Tech Stack</h1>
      <p className="color_000000 text-center fs_20 opacity-25">
        Technologies I've been working with recently
      </p>
      <div className="row gx-5 d-flex justift-content-center">
        {techImages.map((item) => {
          return (
            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Image
                title={item?.title}
                className="mt-4"
                src={item?.image}
                style={{ width: "100%", height: "150px", objectFit: "fill" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTechSection;
