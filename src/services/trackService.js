const trackService = {
    listTracks: () => (
        [{
            id: 1,
            name: `Commonwealth`,
            isPlaying: false,
            src: 'src/assets/audio/Commonwealth.wav'
        }, 
        {
            id: 2,
            name: `bombayy`,
            isPlaying: false,
            src: 'src/assets/audio/bombayy.wav'
        },
        // ...Array(10).keys()
        //     .map(num => ({
        //         id: num + 2,
        //         name: `Song ${num + 2}`,
        //         isPlaying: false,
        //         src: 'src/assets/audio/bombayy.wav'
        //     }))
        ]
    )
}

export default trackService;