export const prerender = true;

/** @type {import('./$types').PageLoad} */

import { client } from '$lib/client';

export const load = async () => {
	const { bios, educations, works, technologies } = await client.request(
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
