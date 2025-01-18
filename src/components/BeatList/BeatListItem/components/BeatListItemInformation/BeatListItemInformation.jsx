import "./BeatListItemInformation.scss"; 

const BeatListItemInformation = ({ name, contributors }) => {
    return (
        <div className="beat-list-item-information">
            <span className='beat-list-item-information__name'>{name}</span>
            <span className='beat-list-item-information__contributors'>{contributors?.toString()}</span>
        </div>
    );
}

export default BeatListItemInformation;