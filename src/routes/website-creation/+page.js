export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { client } from '$lib/client';

export const load = async () => {
	const { relatedServices } = await client.request(
		`  
		query MyQuery {
			relatedServices {
			  name
			  slug
			  description
			}
		  }
		  
		  `
	);

	return {
		relatedServices
	};
};
