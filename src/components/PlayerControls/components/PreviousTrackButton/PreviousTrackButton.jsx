import stepBackIcon from "../../../../assets/svg/stepBack.svg"
import "./PreviousTrackButton.scss";

const PreviousTrackButton = ({ onClick }) => {
    return (
        <img
            className="previous-track-button"
            onClick={onClick}
            src={stepBackIcon}
            alt="A step forward button."
        />
    );
}

export default PreviousTrackButton;