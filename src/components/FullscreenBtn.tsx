import Image from "next/image"

const FullscreenBtn = () => {
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.body.requestFullscreen().catch((err) => {
                alert(`전체 화면 모드 진입에 실패했습니다: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    return(
        <span className="fullscreen-btn" onClick={toggleFullScreen}>
            <Image width={20} height={20} src={"/ui/fullscreen.svg"} alt="fullscreenbtn"/>
        </span>
    )
}

export default FullscreenBtn