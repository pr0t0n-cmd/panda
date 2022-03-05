<div>
	<img class="logo" src="loghi/panda.svg" alt="" />
	<header>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</header>
	<main>
		<slot />
	</main>
	<footer>Footer - thecodingpanda.dev</footer>
</div>

<style>
	ul {
		display: flex;
		flex-direction: row;
	}
	li {
		padding: 0.25rem 0.75rem;
		margin: 0 0.125rem;
		list-style-type: none;
		background: linear-gradient(180deg, #93ff00 0%, #2be40f 100%);
		border: 1px solid #222222;
	}
	a {
		text-decoration: none;
		font-weight: bold;
	}
	header {
		padding: 2rem 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	main {
		position: relative;
		padding: 0.5rem 3rem;
		flex: 1;
	}
	footer {
		padding: 2rem 3rem;
	}
	div {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
	}

	.logo {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100px;
		position: fixed;
	}
</style>
