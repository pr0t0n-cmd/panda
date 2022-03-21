<script>
    import SubscribeForm from '$lib/components/SubscribeForm.svelte'
   import { onMount } from 'svelte';
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
    <div class="bg-img"></div>
    <div class="header-content">
        <p class="small">Siamo programmatori con la passione per le nuove tecnologie</p>
         <p class="bold">Creiamo contenuti speciali a proposito di</p>
         <div class="dynamic-text-container">
        <span class="txt-type" data-wait="3000" data-words='["Blockchain","WEB3", "Programmazione Web", "Crypto & Trading", "Grafica & Animazioni"]'></span>
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
        height: 500px;
        justify-content: center;
    }

    .bg-img{
        /* background-image: url("./landing/cover-block.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */
         position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: .4;
    }

    .header-content{
        z-index: 2;
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
    @media (max-width:450px){
        section {
            text-align: left;
        }
        .small {
            font-size: 1rem;
        }
        .bold{
            font-size: 1.5rem;
        }
        .txt-type{
            font-size: 2.5rem;
            letter-spacing: 1.5px;
        }
    }
</style>
