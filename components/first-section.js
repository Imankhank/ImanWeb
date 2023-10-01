import React from 'react';
import iman from "../assets/imanImage.jpeg"
import Image from 'next/image';
import styles from "../styles/Home.module.css"
const FirstSection = () => {
    return (
        <div className='mt-3 pt-4 row '>
            <div className='d-flex flex-column   gap-1 fw_900 fs_50 fs_lg_30 col-md-6 col-12 color_42446E'>
                <span>
                    Hi 👋,
                </span>
                <span>
                    My name is
                </span>
                <span  >
                    IMAN KHAN
                </span>
                <span>
                    I build things for web
                </span>
            </div>
            <div className='col-md-6 col-12 d-flex justify-content-lg-end justify-content-end'>
                <Image src={iman} className={`rounded-circle border_E515AB mt-md-0 mt-5 ${styles?.myimage}`} style={{ objectFit: "cover" }} // optional
                />
            </div>
        </div>
    )
}

export default FirstSection