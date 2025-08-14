import "./TrackInformation.scss";

const TrackInformation = ({ timeElapsed, name, contributors }) => {
  return (
    <div className="track-information">
      <div className="track-information__top">
        <h5 className="track-information__top__name">
          <span>{name}</span>
        </h5>
        {/* <span className="track-information__top__contributors">
          {contributors.toString()}
        </span> */}
      </div>
      <h5 className="track-information__time-elapsed">
        <span>{timeElapsed}</span>
      </h5>
    </div>
  );
};

export default TrackInformation;
