export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { client } from '$lib/client';

export const load = async ({ params }) => {
	const { slug } = params;
	const { relatedService } = await client.request(
		`query MyQuery($slug: String!) {
            relatedService(where: {slug: $slug}) {
                name
				biggerDescription
				description
				image
				slug
				feature {
				html
				}
            }
        }`,
		{
			slug
		}
	);

	return {
		relatedService
	};
};
