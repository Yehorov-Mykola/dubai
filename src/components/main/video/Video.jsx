import { useRef, useState } from "react";
import "./video.scss"

function Video() {
  const [isBtnClicked, setIsBtnClicked] = useState(true);
  console.log('btnClicked:', isBtnClicked)
  const videoRef = useRef(null);
  const handlePlayBtnClick = () => {
    videoRef.current.play();
    setIsBtnClicked(!isBtnClicked)};
    
    
  return ( 
    <section className="video">
      <div className="container">
        <video className={`video__player ${isBtnClicked ? "" : "video__player--active"}`}ref={videoRef} controls>
          <source src="./video/hotels.mp4" type="video/mp4"/>
        </video>
        {
          isBtnClicked && <button className="video__btn" onClick={handlePlayBtnClick} />
        }        
      </div>    
    </section>

  );
}
export default Video;
