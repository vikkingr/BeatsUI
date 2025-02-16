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
    getBeats:() => {
        const beats = fetch("https://localhost:7270/api/beats", {
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            mode: "cors"
        }).then(response => response.json());

        return beats;
    }
}

export default trackService;