import { articles } from '$lib/data/articles.json';

export const get = async () => {
	let items = '';
	for (const [key, value] of Object.entries(articles)) {
		if (value.category === 'blockchain') {
			items += `<item>
    <title>${value.title}</title>
    <link>https://thecodingpanda.dev/blog/articles/blockchain/${value.link}</link>
    <description>${value.description}</description>
		<guid>https://thecodingpanda.dev/blog/articles/blockchain/${value.link}</guid>
  </item>`;
		}
	}
	const rssDocument = `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
<channel>
  <title>The Coding Panda</title>
  <link>https://www.thecodingpanda.dev</link>
  <description>Free web building tutorials</description>
  ${items}
</channel>
</rss>`;
	return {
		status: 200,
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		},
		body: rssDocument
	};
};
