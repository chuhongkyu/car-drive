import React from 'react';
import Image from "next/image";

const FullscreenBtn = () => {
    const openFullScreen = () => {
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        }
    };

    const closeFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            openFullScreen();
        } else {
            closeFullScreen();
        }
    };

    return (
        <span className="fullscreen-btn" onClick={toggleFullScreen}>
            <Image width={20} height={20} src={"/ui/fullscreen.svg"} alt="fullscreen button" priority />
        </span>
    );
};

export default FullscreenBtn;