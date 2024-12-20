import stepForwardIcon from "../../../../assets/svg/stepForward.svg"
import "./NextTrackButton.scss";

const NextTrackButton = ({ onClick }) => {
    return (
        <img
            className="next-track-button"
            onClick={onClick}
            src={stepForwardIcon}
            alt="A step forward button."
        />
    );
}

export default NextTrackButton;