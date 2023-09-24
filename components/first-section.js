import React from 'react';
import iman from "../assets/imanImage.jpeg"
import Image from 'next/image';

const FirstSection = () => {
    return (
        <div className='mt-5 pt-5 row'>
            <div className='d-flex flex-lg-column gap-1 fw_900 fs_50 col-lg-6 col-12 color_42446E'>
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
            <div className='col-lg-6 col-12 d-flex justify-content-end'>
                <Image src={iman} className='rounded-circle border_E515AB' style={{ width: '375', height: '375', objectFit: "cover" }} // optional
                />
            </div>
        </div>
    )
}

export default FirstSection