import { getRequest } from './network-request.js';

export default class InnovatorsMapTz {
	constructor(options = {}){
		const { apiKey } = options;
		this.apiKey = apiKey;
	}

	async getRegions(){
		const response = await fetch(url , requestConfig);
		const regions = await response.json();

		return regions.map(({name}) => name);
	}

	getInnovators(filters){
		if(!this.apiKey)
			throw new Error('API Key required, go to https://innovate.co.tz/app/studio/developer to get your key.');
			
		return getRequest("/stakeholders", this.apiKey, filters);
	}
}