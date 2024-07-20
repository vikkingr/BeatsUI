const trackService = {
    listTracks: () => (
        [...Array(15).keys()]
            .map(num => ({ 
                id: num + 1, 
                name: `Song ${num + 1}`, 
                isPlaying: false, 
                src: 'src/assets/audio/bombayy.wav' 
            }))
    )
}

export default trackService;