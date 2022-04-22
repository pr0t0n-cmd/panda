<script>
    import { onMount } from 'svelte';
    import BlogCard from '$lib/components/BlogCard.svelte';
    import { articles } from '$lib/data/articles.json';
    import { category } from '$lib/data/categories';
    import { TypeWriter } from '$lib/classes/Typewriter';

    console.log(articles)
// Init On DOM Load
onMount(init);

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, parseInt(wait));
}

let categoryString = ''

Object.keys(category).forEach((element, idx) => {
    if (Object.keys(category).length - idx === 1){
        categoryString += `"${element.toString()}"`
    } else{
        categoryString += `"${element.toString()}", `
    }
});


categoryString = `[${categoryString}]`


</script>
<svelte:head>
	<title>The Coding Panda | Home</title>
</svelte:head>

<section >
    <div class="header-content">
        <!-- <p class="small">Siamo programmatori con la passione per le nuove tecnologie</p>
        <p class="bold">Creiamo contenuti speciali a proposito di</p> -->
        <div class="dynamic-text-container">
            <h1>
            <!-- <span class="txt-type" data-wait="3000" data-words={categories2}></span> -->
            <span class="txt-type" data-wait="3000" data-words={categoryString}></span>
            </h1>
        </div>
    </div>
<div class="blog-container">
    <div id="blog">
        <h2 class="category">🔥🔥 TRENDING</h2>
        <BlogCard author="" content={articles['la-isola-della-blockchain']}/>
        <BlogCard author="" content={articles['guerra-crittografica']}/>
        <BlogCard author="" content={articles['anchor-protocol']}/>
    </div>
    <div id="blog">
        <h2 class="category">🎩🎩 POST</h2>
        <BlogCard author="andrea" content="Previsioni Shiba inu 2030"/>
        <BlogCard author="giorgio" content="Come comprare le critovalute su Binance"/>
        <BlogCard author="andrea" content="Come comprare le critovalute su Coinbase"/>
        <BlogCard author="giorgio" content="Come scambiare le critovalute su Metamask"/>
        <BlogCard author="giorgio" content="Come comprare un NFT"/>
        <BlogCard author="andrea" content="Come creare un NFT"/>
        <BlogCard author="giorgio" content="Come vendere un NFT"/>
        <BlogCard author="giorgio" content="Come usare CoinMarketcap"/>
        <BlogCard author="andrea" content="Come entrare nel metaverso in soli 5 minuti"/>
        <BlogCard author="andrea" content="Come creare un portafoglio su Metamask"/>
    </div>
    <div id="blog">
        <h2 class="category">🚧🚧 LAVORI IN CORSO</h2>
        <BlogCard author="andrea" content="Pop-up donazione ETH🐱‍🚀"/>
        <BlogCard author="andrea" content="Newsletter mailchimp🙊"/>
        <BlogCard author="andrea" content="Rimuovere social📷"/>
        <BlogCard author="giorgio" content="Integrazione Metamask🦊"/>
        <BlogCard author="andrea" content="Dark-mode"/>
        <BlogCard author="giorgio" content="Vite image plugin"/>
        <BlogCard author="andrea" content="plugin SEO"/>
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

    .header-content{
        z-index: 2;
    }
    


    h1 .txt-type{
    font-family: "NNRektoratSTD-HeavyRe";
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    text-shadow: 0px 0px 6px #fff;
    margin-top: 50px;
    font-weight: 700;
}
    

    .category{
        flex: 100%;
        text-transform: uppercase;
        color: #fff ;
        padding: 1rem;
        border-bottom: 1px solid #fff;
        font-weight: 100;
        margin-top: 3rem;
    }
    #blog{
        display: flex;
        flex-direction: row;
        text-align: left;
        flex-wrap: wrap;
    }

      @media screen and (max-width:800px){
         h1 .txt-type{
            font-size: 3rem;
            letter-spacing: 2.5px;
        }
    }
   
     @media screen and (max-width:600px){
        #blog{
            justify-content: center;
        }
         h1 .txt-type{
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
    }
     @media (max-width:450px){
        section {
            text-align: left;
            padding: 1rem;
        }
        .header-content{
            padding: 5%;
        }
        h1 .txt-type{
            font-size: 2rem;
            letter-spacing: 1px;
        }
    }
    @media (max-width:350px){
      
        h1 .txt-type{
            font-size: 1.7rem;
            letter-spacing: 1px;
        }
    }
</style>
