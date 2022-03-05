<script>
    import { articles } from '$lib/data/articles.json'
    import HeaderDropdown from '$lib/components/HeaderDropdown.svelte'

    let value = 0

    function handleClick(){
        value = value === 1 ? 0 : 1
    }

</script>
<div>
    <header>
        <img class="logo" src="/static/loghi/panda.svg" alt="" />
        <ul>
            <li>
                <a href="/" on:click={handleClick}>Home</a>
            </li>
            <li>
                <a href="/blog" on:click={handleClick}>Blog</a>
                <span on:click={handleClick}>🌐</span>
                {#if value === 1}
                    <HeaderDropdown content={articles} bind:menuValue={value}/>
                {/if}
            </li>
        </ul>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        Footer - thecodingpanda.dev
    </footer>
</div>

<style>
    span{
        cursor: pointer;
        line-height: 0px;
        font-size: .75rem;
        padding-left: .25rem;
        border-left: 1px solid #222;
    }
    ul{
        display: flex;
        flex-direction: row;
    }
    li{
        position: relative;
        padding: .25rem .75rem;
        margin: 0 .125rem;
        list-style-type: none;
        background: linear-gradient(180deg, #93ff00 0%, #2be40f 100%);
        border: 1px solid #222222;
    }
    a{
        text-decoration: none;
        font-weight: bold;
    }
    header{
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    main{
        position: relative;
        padding: .5rem 3rem;
        flex: 1;
    }
    footer{
        padding: 2rem 3rem;
    }
    div{
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
