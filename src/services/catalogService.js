import trackService from "./trackService";

const catalogService = {
    _catalogs: [],
    addToCatalog: () => {
        const beats = trackService.listTracks();

        catalogService._catalogs.push({
            name: "2025",
            id: catalogService._catalogs.length + 1,
            beats,
            artist: "Robert Veinberg-Vikking"
        });
    },
    listCatalog: () => {
        const beats = trackService.listTracks();
        const catalog = {
            name: "2025",
            id: catalogService._catalogs.length + 1,
            beats,
            artist: "Robert Veinberg-Vikking"
        };

        catalogService._catalogs.push(catalog);

        return catalogService._catalogs;
    },
}

export default catalogService;