import { category } from '$lib/data/categories';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
    // `params.id` comes from [id].js
    const item = await category.get(params.id);

    if (item) {
        return {
            body: { item }
        };
    }

    return {
        status: 404
    };
}