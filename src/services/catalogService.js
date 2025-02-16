import trackService from "./trackService";

const catalogService = {
    _catalogs: [],
    // addToCatalog: () => {
    //     const beats = trackService.listTracks();

    //     catalogService._catalogs.push({
    //         name: "2025",
    //         id: catalogService._catalogs.length + 1,
    //         beats,
    //         artist: "Robert Veinberg-Vikking"
    //     });
    // },
    listCatalog: () => {
        const beats = trackService.listTracks();
        

        return [{
            name: "2025",
            id: 1,
            beats,
            artist: "Robert Veinberg-Vikking"
        }, {
            name: "2024",
            id: 2,
            beats,
            artist: "Robert Veinberg-Vikking"
        }, {
            name: "2023",
            id: 3,
            beats,
            artist: "Robert Veinberg-Vikking"
        }];
    },
}

export default catalogService;