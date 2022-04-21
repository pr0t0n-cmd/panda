import { category } from '$lib/data/categories';
 
/** @type {import('./[category]').RequestHandler} */
export function get({ params }) {
  // `params.id` comes from [id].js
  const item = category[params.id]
 
  if (item) {
    return {
      body: { item }
    };
  }
 
  return {
    status: 404
  };
}