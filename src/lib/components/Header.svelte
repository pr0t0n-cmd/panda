<script>
  import { articles } from '$lib/data/articles.json'
  import HeaderDropdown from '$lib/components/HeaderDropdown.svelte'
  import Hamburger from '$lib/components/Hamburger.svelte'
  import Menu from '$lib/components/Menu.svelte'
   
    let value = 0
    function handleClick(){
        value = value === 1 ? 0 : 1
    }
    function resetValue(){
        value = 0
    }
</script>

<header>
        <a class="logo" href="/">
            <img src="loghi/panda.svg" alt="panda" />
        </a>
        <Hamburger/>

        <ul>
            <li>
                <a href="/" on:click={resetValue}>Home</a>
            </li>
            <li>
                <a href="/blog" on:click={resetValue}>Blog</a>
                <span on:click={handleClick}>🌐</span>
                {#if value === 1}
                    <HeaderDropdown content={articles} bind:menuValue={value}/>
                {/if}
            </li>
            <li>
                <a href="/about" on:click={resetValue}>About</a>
            </li>
        </ul>
    </header>

    <style>
      header{
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

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

    .logo {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100px;
		position: fixed;
	}
    </style>