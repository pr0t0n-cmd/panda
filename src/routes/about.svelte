<script>
	import CardBio2 from '$lib/components/CardBio2.svelte';
	import CardBio3 from '$lib/components/CardBio3.svelte';
</script>

<div class="blog-content">
	<h2 class="category">👩🏾‍💻👨🏾‍💻 TEAM</h2>
	<div class="card__collection">
		<CardBio3 name="JoMaker" image="/about/proton.jpeg" />
		<CardBio2 name="Panda" image="/about/panda.jpeg" />
		<CardBio3 name="Proton" image="/about/gb_pc.jpeg" />
		<CardBio2 name="Winterandrea" image="/about/ac.jpg" />
		<CardBio3 name="JoBot" image="/about/gb_ai.jpeg" />
	</div>
</div>

<style>
	.category {
		flex: 100%;
		text-transform: uppercase;
		color: #fff;
		padding: 1rem;
		border-bottom: 1px solid #2be40f;
		font-weight: 100;
		margin-top: 3rem;
	}
	.blog-content {
		display: flex;
		flex-direction: row;
		text-align: left;
		flex-wrap: wrap;
	}

	/* .card__collection {
  position: relative;
  display: block;
  background: rgba(10, 10, 10, 0.5);
  padding: 10px;
  font-family: "Do Hyeon", sans-serif;
  overflow: hidden;
} */
</style>
