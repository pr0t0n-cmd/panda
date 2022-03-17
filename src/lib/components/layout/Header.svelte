<script>
    import { articles } from '$lib/data/articles.json'
    import HeaderDropdown from '$lib/components/layout/HeaderDropdown.svelte'
    function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}
		
		document.body.addEventListener('click', onClick);
		
		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}
    function toggle(){
        showModal = !showModal
    }
    function openModal(event){
        showModal = true;
        event.stopPropagation();
    }
	let showModal = false;
</script>

<header>
        <a class="logo" href="/">
            <img src="/loghi/panda.svg" alt="panda" />
        </a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
                <span on:click={openModal}><img src="./icone/arrowdown.png" class="arrow" alt="expand dropdown" /></span>
                {#if showModal}
                    <HeaderDropdown content={articles} clickoutside={clickOutside} toggle={toggle}/>
                {/if}
            </li>
            <li>
                <a href="/about">About</a>
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
    }
    ul{
        display: flex;
        flex-direction: row;
    }
    li{
        position: relative;
        /* padding: .25rem .75rem; */
        margin: 0 .125rem; 
        list-style-type: none;
        background: linear-gradient(180deg, #93ff00 0%, #2be40f 100%);
        border: 1px solid #444;
        text-align: center;
    }
    a{
        padding: .25rem .75rem;
        text-decoration: none;
        font-weight: bold;
    }

    .logo{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100px;
	}

    .arrow{
        width: 15px;
        position: absolute;
        right: 0;
        top: 0;
    }
    </style>