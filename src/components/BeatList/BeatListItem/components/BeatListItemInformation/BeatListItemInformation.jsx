import "./BeatListItemInformation.scss";

const BeatListItemInformation = ({ name, contributors }) => {
  return (
    <div className="beat-list-item-information">
      <h5 className="beat-list-item-information__name">
        <span>{name}</span>
      </h5>
      {/* <span className="beat-list-item-information__contributors">
        {contributors?.toString()}
      </span> */}
    </div>
  );
};

export default BeatListItemInformation;
