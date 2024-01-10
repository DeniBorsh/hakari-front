import axios from "axios"

export default class OrgService {
    static async getAll() {
        const response = {
            data: [
                {id: 1, title: 'test1'},
                {id: 2, title: 'test2'}
            ]
        }
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }
}