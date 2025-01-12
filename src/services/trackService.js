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
            name: `Commonwealth1`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/Commonwealth1.wav'
        },
        {
            id: 2,
            name: `36`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/36.wav'
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
            name: `keep it reggaedubby2`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/keep it reggaedubby2.wav'
        },
        {
            id: 5,
            name: `bird is da wurm`,
            isPlaying: false,
            contributors: ["Robert Veinberg-Vikking"],
            src: 'src/assets/audio/bird is da wurm.wav'
        },
            // ...Array(10).keys()
            //     .map(num => ({
            //         id: num + 2,
            //         name: `Song ${num + 2}`,
            //         isPlaying: false,
            //         src: 'src/assets/audio/bombayy.wav'
            //     }))
        ]
    ),
    listTrackIds: () => {
        return trackService.listTracks().map(beat => beat.id);
    },
    listCatalog: () => {
        const beats = trackService.listTracks();
        const catalog = [{
            name: "2025",
            beats
        }];

        return catalog;
    },
    getBeats: async () => {
        const beats = await fetch("https://localhost:7270/api/beats", {
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors"
        });

        return beats;
    }
}

export default trackService;