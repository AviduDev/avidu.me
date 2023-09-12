import { gql } from 'graphql-request';

const PROJECT_FRAGMENT = gql`
	fragment ProjectDetails on Project {
		name
		slug
	}
`;

export const allProjects = gql`
	${PROJECT_FRAGMENT}
	query GetAllProjects {
		projects {
			...ProjectDetails
			description
			year
			type
			liveUrl
			image {
				url
			}
		}
	}
`;

export const projectQuery = gql`
	${PROJECT_FRAGMENT}
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			...ProjectDetails
			description
			image {
				url
			}
			type
			year
			stage
			technology
			liveUrl
			images
			company
		}
	}
`;
