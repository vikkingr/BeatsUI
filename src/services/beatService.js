
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
            
            // Vite will copy assets to the correct place and update the import path to a URL
            // So we can use the module's default export as the URL
            return {
                id: idx + 1,
                name,
                isPlaying: false,
                contributors: contributorsDefault,
                src: audioFiles[filePath].default.startsWith('http')
                  ? audioFiles[filePath].default
                  : import.meta.env.BASE_URL + 'assets/audio/' + fileName,
            };
        });
    },
    listTrackIds: () => {
        return beatService.getBeats().map(beat => beat.id);
    },
};

export default beatService;