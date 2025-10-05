
const contributorsDefault = ["Robert Veinberg-Vikking"];

const audioFiles = import.meta.glob('../assets/audio/\*.wav', { eager: true });

const beatService = {
    getBeats: () => {
        // audioFiles is an object: { path: module }
        return Object.keys(audioFiles).map((filePath, idx) => {
            // Extract file name from path
            const parts = filePath.split('/');
            const fileName = parts[parts.length - 1];
            const name = fileName.replace('.wav', '');
            return {
                id: idx + 1,
                name,
                isPlaying: false,
                contributors: contributorsDefault,
                src: filePath.replace('..', 'src'), // Vite will resolve this
            };
        });
    },
    listTrackIds: () => {
        return beatService.getBeats().map(beat => beat.id);
    },
};

export default beatService;