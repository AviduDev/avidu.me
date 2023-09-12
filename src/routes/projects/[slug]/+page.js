export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { client } from '$lib/client';

export const load = async ({ params }) => {
	const { slug } = params;

	const { project } = await client.request(
		`query MyQuery($slug: String!) {
            project(where: {slug: $slug}) {
                name
                slug
            }
        }`,
		{
			slug
		}
	);

	return {
		project
	};
};
