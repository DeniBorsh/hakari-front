import { API_URL } from './index.js'

export default class OrgService {
    static async fetchOrgs() {
        const orgs = await fetch(API_URL + "/organization").then(async (data) => {
            return await data.json();
        });
        return orgs;
    }

    static async getById(id) {
        let obj = {};
        obj.organization = await fetch(`${API_URL}/organization/${id}`).then(async (data) => {
            return  data.json()
        })
        obj.stations = await fetch(`${API_URL}/station?organization_id=${id}`).then(async (data) => {
            return data.json()
        })
    
        return obj
    }

    static async postOrg(orgName) {
        fetch(API_URL + "/organization", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ name: orgName }),
        }).then(async (data) => {
            let createdObj = await data.json();
            return createdObj;
        });
      }
}

