<script>
    import { articles } from '$lib/data/articles.json'
    import { categories, category } from '$lib/data/categories.json'
    import NavDropdown from '$lib/components/layout/NavDropdown.svelte'
    

    let array = [];
    for (const key in category) {
    array.push(key.toString())
    }

    


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

<nav id="nav">
        <a class="logo" href="/">
            <img src="/loghi/panda.svg" alt="panda" />
        </a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/blog">Post</a>
                <span on:click={openModal}><img src="/icone/arrowdown.png" class="arrow" alt="expand dropdown" /></span>
                {#if showModal}
                    <NavDropdown content={array} clickoutside={clickOutside} toggle={toggle}/>
                {/if}
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>

    <style>
    nav{
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        z-index: 99;
        font-size: 1rem;
    }

    span{
        cursor: pointer;
        font-size: .75rem;
        padding-left: .25rem;
    }
    

    
a {
    color: #333;
    text-decoration: none;
    padding: .25rem .75rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;
}

li {
	display: inline-block;
	position: relative;
	padding-bottom: 3px;
    margin-right: 10px;
}
li:last-child {
  margin-right: 0;
}

li:after {
	content: '';
	display: block;
	margin: auto;
	height: 1px;
	width: 0px;
	background: transparent;
	transition: width .5s ease, background-color .5s ease;
}
li:hover:after {
	width: 80%;
	background: #2be40f;
}

    .logo{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100px;
	}

    .arrow{
        width: 10px;
        position: absolute;
        right: 0;
        top: 0;
    }

@media (max-width: 600px) {
    nav {
        display: none;
    }
}
    </style>