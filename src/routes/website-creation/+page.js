export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { GraphQLClient } from 'graphql-request';

export const load = async () => {
	const hygraph = new GraphQLClient(
		'https://ap-south-1.cdn.hygraph.com/content/clm4qu4va2ql701ugggfxggwo/master'
	);

	const { relatedServices } = await hygraph.request(
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
