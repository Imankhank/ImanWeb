import React from 'react'
import bitBucket from "../assets/tech-images/bitbucket.png"
import bootstrap from "../assets/tech-images/bootstrap.svg"
import react from "../assets/tech-images/recact.svg"
import css from "../assets/tech-images/css.svg"
import git from "../assets/tech-images/git.svg"
import github from "../assets/tech-images/github.svg"
import html from "../assets/tech-images/html.png"
import js from "../assets/tech-images/js.svg"
import vscode from "../assets/tech-images/vscode.svg"

const MyTechSection = () => {
    const techImages = [html, css, js, bootstrap, react, ]
    return (
        <div style={{ marginTop: "10rem" }}>
            <h1 className='color_42446E fw_800 fs_50 text-center'>My Tech Stack</h1>
            <p className='color_000000 text-center fs_20 opacity-25'>Technologies I've been working with recently</p>
            <div className='row'>

            </div>
        </div>
    )
}

export default MyTechSection