import "./CameraBar.scss";
import cameraSVG from "../../assets/svg/cameraEnhance.svg";
function CameraBar() {
  return (
    <div className="camera-bar">
      <label for="imageFile">
        {" "}
        <img src={cameraSVG} alt="camera" />
      </label>
      <input type="file" id="imageFile" capture="user" accept="image/*"></input>
    </div>
  );
}

export default CameraBar;
