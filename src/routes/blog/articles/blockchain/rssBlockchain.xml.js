import { articles } from '$lib/data/articles.json';


export const get = async () => {
	let items = ""
	for (const [key, value] of Object.entries(articles)) {
		if(value.category === "blockchain"){
			items += `<item>
    <title>${value.title}</title>
    <link>https://thecodingpanda.dev/blog/articles/blockchain/${value.link}</link>
    <description>${value.description}</description>
  </item>`;
		}
	}
	const rssDocument = `
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
