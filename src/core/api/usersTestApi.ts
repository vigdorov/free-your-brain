import {makeApi} from '_utils/makeApi';
import {http} from '../infrastructure/Http';

type User = {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
};
type Support = {
    text: string;
    url: string;
};
type UserReponse = {
    data: Array<User>;
    page: number;
    per_page: number;
    support: Support;
    total: number;
    total_pages: number;
};

type UserFindResponse = {
    data: User;
    support: Support;
}
const ROOT_URL = 'https://reqres.in/api/users';
export const usersApi = makeApi({
    request: async () => {
        const {data} = await http.get<void, UserReponse>(ROOT_URL);
        return data;
    },
    findById: async (id: string) => {
        const {data} = await http.get<void, UserFindResponse>(`${ROOT_URL}/${id}`);
        return data;
    }
});
