<script>
<<<<<<< HEAD
	import { articles } from '$lib/data/articles.json';
=======
    import { articles } from '$lib/data/articles.json';
    import Card from '$lib/components/BlogCard.svelte'
>>>>>>> 3d8b1638467293bf1a25576d4c00659a0d119ef2
</script>

<h1>BLOG</h1>
<div>
<<<<<<< HEAD
	{#each Object.values(articles) as article}
		<a href={`/blog/articles/${article.link}`}>
			<h2>{article.title}</h2>
			<h3>{article.description}</h3>
		</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		background: ;
	}
	h1 {
		margin-bottom: 2rem;
	}
	a {
		padding: 2rem;
		width: 320px;
		height: 400px;
		box-shadow: 2px 2px 7px #00000015;
	}
</style>
=======
    {#each Object.values(articles) as article}
        <!-- <a href={`/blog/articles/${article.link}`}>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            {#if article.topImage}
                <img src={`${article.topImage}`} alt="">
            {/if}
        </a> -->
        <Card content={article}/>
    {/each}
</div>

<style>
    div{
        background-image: url;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: .75rem;
    }
</style>
>>>>>>> 3d8b1638467293bf1a25576d4c00659a0d119ef2
