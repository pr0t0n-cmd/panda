<script>
    import { articles } from '$lib/data/articles.json'
    import { category } from '$lib/data/categories'
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
    function toggleModal(event){
        showModal = !showModal;
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
                <a href="/blog">Blog</a>
                <span on:click={toggleModal}><img src="/icone/arrowdown.png" class="arrow" alt="expand dropdown" /></span>
                {#if showModal}
                    <NavDropdown content={array} clickoutside={clickOutside} toggle={toggle}/>
                {/if}
            </li>
            <!-- <li>
                <a href="/about"><img src="./icone/dev.png" alt="about dev"/></a>
            </li> -->
        </ul>
    </nav>

    <style>
        img{
            width: 80px;
        }
    nav{
        display: grid;
        grid-template-columns: 10% 1fr;
        justify-content: center;
        align-items: center;
        z-index: 99;
        font-size: 1rem;
        background: linear-gradient(to top right, #333, #000);
    }

    span{
        cursor: pointer;
        font-size: .75rem;
        padding-left: .25rem;
    }
    

    
a {
    color: #fff;
    text-decoration: none;
    padding: .25rem .75rem;
    font-family: 'Mukta', sans-serif;
    font-weight: 200;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
ul{
    display: flex;
    justify-self: center;
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
		width: 100px;
	}

    .arrow{
        width: 25px;
        position: absolute;
        right: -15px;
        top: 0px;
    }

@media (max-width: 600px) {
    nav {
        display: none;
    }
}
    </style>