export const prerender = true;

import { client } from '$lib/client';

export const load = async () => {
	const { projects, questionTypes } = await client.request(
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
            services {
                name
            }
			questionTypes {
				typeName
				questions {
				  question
				  answer
				}
			  }
    	}`
	);

	return {
		projects,
		questionTypes
	};
};