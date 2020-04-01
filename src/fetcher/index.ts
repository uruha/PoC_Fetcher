import fetch from 'isomorphic-unfetch';

type Domain = string;
type Endpoint = string;

export default class Fetcher {
    readonly domain: Domain;

    constructor(readonly apiDomain: string) {
        this.domain = apiDomain;
    }

    get(endpoint: Endpoint, opt?: RequestInit) {
        return fetch(`${this.domain}/${endpoint}`, opt);
    }

    post(endpoint: Endpoint, opt: RequestInit = {}) {
        const postOption = {
            method: 'POST',
            ...opt
        };

        return fetch(`${this.domain}/${endpoint}`, postOption);
    }

    put(endpoint: Endpoint, opt: RequestInit = {}) {
        const putOption = {
            method: 'PUT',
            ...opt
        };

        return fetch(`${this.domain}/${endpoint}`, putOption);
    }

    delete(endpoint: Endpoint, opt?: RequestInit) {
        const deleteOption = {
            method: 'DELETE',
            ...opt
        };

        return fetch(`${this.domain}/${endpoint}`, deleteOption);
    }
}
