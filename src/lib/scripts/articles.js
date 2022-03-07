import { articles } from '$lib/data/articles.json'
import { getContext } from 'svelte';
const currentPage = getContext('currentPage');
const currentArticle = currentPage.substring(currentPage.lastIndexOf('/') + 1)
const article = articles[currentArticle]

export default article