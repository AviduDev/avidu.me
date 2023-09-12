export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { client } from '$lib/client';

export const load = async () => {
	const { projects } = await client.request(
		`query MyQuery {
			projects {
				name
				slug
                year
                type
                image
                publishedAt
                liveUrl
			}
    	}	
    
          `
	);

	return {
		projects
	};
};
