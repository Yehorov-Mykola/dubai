import { useRef, useState } from "react";
import "./video.scss";

function Video() {
  const [isBtnClicked, setIsBtnClicked] = useState(true);
  const videoRef = useRef(null);
  const handlePlayBtnClick = () => {
    videoRef.current.play();
    setIsBtnClicked(!isBtnClicked);
  };

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="video">
      <div className="container">
        <div className="video__wrapper">
          {isVideoOpen && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QbFdXKDaYng?&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}

          {!isVideoOpen && (
            <>
              <div className="video__img" />
              <button className="video__btn" onClick={() => setIsVideoOpen(true)}/>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
export default Video;
