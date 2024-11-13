const trackService = {
    listTracks: () => (
        [{
            id: 9,
            name: `bugatti remix`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/bugatti remix.wav'
        },
        {
            id: 1,
            name: `Commonwealth`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/Commonwealth.wav'
        }, 
        {
            id: 2,
            name: `bombayy`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/bombayy.wav'
        },
        {
            id: 3,
            name: `smish me2`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/smish me2.wav'
        },
        {
            id: 4,
            name: `grains`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/grains.wav'
        },
        {
            id: 5,
            name: `end2`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/end2.wav'
        },
        {
            id: 8,
            name: `end`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/end.wav'
        },
        {
            id: 6,
            name: `phonk4`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/phonk4.wav'
        },
        {
            id: 7,
            name: `phonk10`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/phonk10.wav'
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