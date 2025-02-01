import "./TrackInformation.scss"; 

const TrackInformation = ({ name, contributors }) => {
    return (
        <div className="track-information">
            <span className='track-information__name'>{name}</span>
            <span className='track-information__contributors'>{contributors.toString()}</span>
        </div>
    );
}

export default TrackInformation;