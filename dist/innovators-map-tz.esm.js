async function getRequest(endpoint, apiKey, data){
	return await request("GET", endpoint, apiKey, data);
}

async function request(method, endpoint, apiKey, data = {}){
	let url = `https://innovate.co.tz/api${endpoint}?clientId=${apiKey}`;

	const requestConfig =  {
		method,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	if(data){
		if(method === "POST" || method === "PATCH")
			requestConfig.body = JSON.stringify(data);
		else if(method === "GET"){
			let params = Object.keys(data)
				.filter(key => data[key] !== 'all')
				.map(key => {
					let value = data[key];
					if(Array.isArray(value))
						value = value.join(',');

					return `&${key}=${value}`;
				});
			
			if(params.length)
				url += params.join("&");
		}
	}

	const response = await fetch(url , requestConfig);
	if (response.ok){
		try {
			const res = await response.json();
			return res;
		} catch (error) {
			return null;
		}
	}
	else {
		const error = await response.json();
		console.log("Response error: ", error);
		throw error;
	}
}

class InnovatorsMapTz {
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

export default InnovatorsMapTz;
