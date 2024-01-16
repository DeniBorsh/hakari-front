import axios from "axios"
import { API_URL, SERVER_URL } from './index.js'

async function fetchData(id) {
	let api_url = API_URL;
	if (!browser) api_url = SERVER_URL;
	
	let obj = {};
	obj.organization = await fetch(api_url + `/organization/${id}`).then(async (data) => {
		return data.json()
	})
	obj.stations = await fetch(api_url + `/station?organization_id=${id}`).then(async (data) => {
		return data.json()
	})

	return obj
}

export default class OrgService {
    static async getAll() {
        const response = await axios.get(API_URL+'/organization');
        return response;
    }

    static async getById(params) {
        if (params.id) {
            return fetchData(params.id)
        }
        throw error(404, 'Not found');
    }


    static async postOrg(orgName) {
        const { data } = await axios.post(API_URL + "/organization",  {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({ name: orgName }),
            })
        return data;
    }
}