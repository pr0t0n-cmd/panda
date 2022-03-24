<script>
   import { onMount } from 'svelte';
   import BlogCard from '$lib/components/BlogCard.svelte';
class TypeWriter {
	constructor(txtElement, words, wait = 1000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;
		// Get full text of current word
		const fullTxt = this.words[current];

		// Check if deleting
		if (this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Insert txt into element
		this.txtElement.innerHTML = this.txt;

		// Initial Type Speed
		let typeSpeed = 100;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// If word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = this.wait;
			// Set delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}

// Init On DOM Load
onMount(init);

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}


</script>
<svelte:head>
	<title>The Coding Panda | Home</title>
</svelte:head>
<section>
    <div style="max-width: 1000px;">
        <video width="100%" height="100%" controls poster="blog/Capture.PNG">
            <source src="blog/test.mp4" type="video/mp4">
        </video>
    </div>
    <!-- <div class="bg-img"></div> -->
    <div class="header-content">
        <p class="small">Siamo programmatori con la passione per le nuove tecnologie</p>
         <p class="bold">Creiamo contenuti speciali a proposito di</p>
         <div class="dynamic-text-container">
        <span class="txt-type" data-wait="3000" data-words='["Blockchain", "Cryptovalute", "WEB3", "Programmazione Web", "Live Hackathon", "Hacker Rank", "Automazione Bot", "Animazioni Avanzate"]'></span>
        </div>
    </div>
<div class="blog-container">
    <div id="blog">
        <h2 class="category">🔥🔥 TRENDING</h2>
        <BlogCard content="test"/>
        <BlogCard content="test"/>
        <BlogCard content="test"/>
    </div>

    <div id="blog">
        <h2 class="category">🎬🎬 VIDEO TUTORIAL</h2>
        <BlogCard content="test"/>
        <BlogCard content="test"/>
        <BlogCard content="test"/>
    </div>

     <div id="blog">
        <h2 class="category">👩‍💻👨‍💻 BLOCKCHAIN</h2>
        <BlogCard content="test"/>
        <BlogCard content="test"/>
        <BlogCard content="test"/>
    </div>
    
    </div>
</section>

<style>

    section{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        text-align: center;
        
    }

    .dynamic-text-container{
        display: flex;
        position: relative;
        width: 100%;
        height: 200px;
        justify-content: center;
    }

    /* .bg-img{
        background-image: url("./landing/cover-block.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
         position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: .4;
    } */

    .header-content{
        z-index: 2;
        padding: 5%;
    }
    
 
    .small {
        font-size: 1.5rem;
        color: #333;
    }

    .bold{
        font-weight: 700;
        font-size: 2.5rem;
        text-transform: uppercase;
        margin: .5rem 0;
        color: #333;
    }

    .txt-type{
        text-align: center;
        font-size: 4.5rem;
        text-transform: uppercase;
        color: #2be40f;
        letter-spacing: 2px;
        margin-top: 20px;
        font-weight: 700;
    }

    .category{
        flex: 100%;
        text-transform: uppercase;
        color: #333 ;
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        font-weight: 100;
        margin-top: 3rem;
    }
    #blog{
        display: flex;
        flex-direction: row;
        text-align: left;
        flex-wrap: wrap;
        
    }
    @media (max-width:450px){
        section {
            text-align: left;
            padding: 1rem;
        }
        .header-content{
            padding: 5%;
        }
        .small {
            font-size: 1.3rem;
        }
        .bold{
            font-size: 1.8rem;
        }
        .txt-type{
            font-size: 2.5rem;
            letter-spacing: 1.5px;
        }
    }
     @media screen and (max-width:600px){
        #blog{
            justify-content: center;
        }
    }
</style>
