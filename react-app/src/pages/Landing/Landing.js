import "./Landing.scss";
import mobilePhotoSVG from "../../assets/svg/mobilePhoto.svg";
import viewComputerSVG from "../../assets/svg/viewComputer.svg"

function Landing() {
  //TODO: implement real landing
  return (
    <div className="landing-container">
      <h4>Move your white board code to your computer! </h4>
      <h5> Take a photo of your hand-written code through your phone or upload it on your computer</h5>
      <img src={mobilePhotoSVG} alt="code review" />

      <h5>Download the code to use on your computer!</h5>
      <img src={viewComputerSVG} alt="code review" />
    </div>
  );
}

export default Landing;
