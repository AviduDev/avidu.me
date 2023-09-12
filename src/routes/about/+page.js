export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { GraphQLClient } from 'graphql-request';

export const load = async () => {
	const hygraph = new GraphQLClient(
		'https://ap-south-1.cdn.hygraph.com/content/clm4qu4va2ql701ugggfxggwo/master'
	);

	const { bios, educations, works, technologies } = await hygraph.request(
		`query MyQuery {
            bios {
                bioName
                bioDes
            }
            educations {
                certificate
                institution
                year
            }
            works {
                type
                company
                year
            }
            technologies {
                field
                techs
            }
    	}	
    
          `
	);

	return {
		bios,
        educations,
        works,
        technologies
	};
};
