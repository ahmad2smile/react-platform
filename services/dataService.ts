// tslint:disable:no-object-mutation
import axios from "axios"

import config from "../App/config.json"

const apiConfig = config.api

export const appBaseUrl =
	process.env.NODE_ENV !== "production"
		? apiConfig.development.baseUrl
		: apiConfig.production.baseUrl

export const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json"
	}
})

const apiGq = axios.create({
	baseURL: `${appBaseUrl}/api/graphql`,
	timeout: 15000,
	headers: { "Content-Type": "application/json" }
})

export function runGqlQueries(query: string, token: string) {
	apiGq.defaults.headers = { "x-access-token": token }

	return apiGq.post(null, { query })
}

export function getPosts({ limit = 10, offset = 0, filter = "" }) {
	if (filter) {
		return api.get(`/merchants?q=${filter}`)
	}

	return api.get(`/merchants?_page=${offset}&_limit=${limit}`)
}
