import { articles } from '$lib/data/articles.json';

export const get = async () => {
	let items = '';
	for (const [key, value] of Object.entries(articles)) {
		if (value.category === 'crypto') {
			items += `<item>
    <title>${value.title}</title>
    <link>https://thecodingpanda.dev/blog/articles/crypto/${value.link}</link>
    <description>${value.description}</description>
		<guid>https://thecodingpanda.dev/blog/articles/crypto/${value.link}</guid>
  </item>`;
		}
	}
	const rssDocument = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
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
			'Content-Type': 'application/rss+xml'
		},
		body: rssDocument
	};
};
