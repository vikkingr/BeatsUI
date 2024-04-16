import React, { useConext, useContext, useState } from 'react'
import { BeatsContext } from '../../context/BeatsContext'
import BeatListItem from './BeatListItem/BeatListItem'
import './BeatList.scss'

const BeatList = () => {
    const { listOfTracks } = useContext(BeatsContext);

    return (
        <div className='beatList'>
            {listOfTracks.map((track, index) => (
                <BeatListItem
                    key={index}
                    track={track}
                />
            ))}
        </div>
    )
}

export default BeatList