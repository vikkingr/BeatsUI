import "./BeatlListItemInformation.scss"; 

const BeatlListItemInformation = ({ name, contributors }) => {
    return (
        <div className="beat-list-item-information">
            <span className='beat-list-item-information__contributors'>{contributors?.toString()}</span>
            <span className='beat-list-item-information__name'>{name}</span>
        </div>
    );
}

export default BeatlListItemInformation;