export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { GraphQLClient } from 'graphql-request';

export const load = async ({ params }) => {
	const { slug } = params;
	const hygraph = new GraphQLClient(
		'https://ap-south-1.cdn.hygraph.com/content/clm4qu4va2ql701ugggfxggwo/master'
	);

	const { relatedService } = await hygraph.request(
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
