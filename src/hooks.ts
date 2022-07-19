import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		ssr: false,
		transformPage: ({ html }) => html.replace('old', 'new')
	});

	return response;
}
