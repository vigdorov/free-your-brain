import {http} from '../infrastructure/Http';
import {makeApi} from '../utils/makeApi';

type User = {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
};

type UserReponse = {
    data: Array<User>;
    page: number;
    per_page: number;
    support: {
        text: string;
        url: string;
    }
    total: number;
    total_pages: number;
};

export const usersApi = makeApi({
    request: async () => {
        const {data} = await http.get<never, UserReponse>('https://reqres.in/api/users');
        return data;
    },
});
