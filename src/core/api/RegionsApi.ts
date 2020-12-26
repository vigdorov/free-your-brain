import {makeStorageApi} from './StorageApi';

type Region = {
    name: string;
    subject_number: number;
    gibdd_codes: Array<number>;
};

type ResponseRegions = {
    regions: Array<Region>;
}

const api = makeStorageApi<ResponseRegions>({
    key: 'russian_regions',
    hook: '26502372-6bc4-4cdf-bbcc-41b3b71cb386',
    description: 'Регионы России',
    service_name: 'geo_services',
});

export const regionsApi = {
    request: async (): Promise<Region[]> => {
        const {value: {regions}} = await api.request();
        return regions;
    },
    find: async (name: string): Promise<Undefinable<Region>> => {
        const regions = await regionsApi.request();
        return regions.find(region => region.name === name);
    },
    create: async (newRegion: Region): Promise<Region> => {
        const regions = await regionsApi.request();
        const findedRegion = regions.find(region => region.name === newRegion.name);
        if (findedRegion) {
            throw new Error(`Город с именем "${newRegion.name}" уже существует`);
        }
        await api.update({
            regions: [
                ...regions,
                newRegion,
            ],
        });
        return newRegion;
    },
    update: async (updatedRegion: Region): Promise<Region> => {
        const regions = await regionsApi.request();
        const findedIndex = regions.findIndex(region => region.name === updatedRegion.name);
        if (findedIndex === -1) {
            throw new Error(`Город с именем "${updatedRegion.name}" не найден`);
        }
        await api.update({
            regions: regions.map((region, index) => {
                if (findedIndex === index) {
                    return updatedRegion;
                }
                return region;
            }),
        });
        return updatedRegion;
    },
    remove: async (name: string): Promise<string> => {
        const regions = await regionsApi.request();
        const findedIndex = regions.findIndex(region => region.name === name);
        if (findedIndex === -1) {
            throw new Error(`Город с именем "${name}" не найден`);
        }
        await api.update({
            regions: regions.filter(region => region.name === name),
        });
        return name;
    }
};
