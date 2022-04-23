<script>
    import { onMount } from 'svelte';
    import BlogCard from '$lib/components/BlogCard.svelte';
    import { articles } from '$lib/data/articles.json';
    import { category } from '$lib/data/categories';
    import { TypeWriter } from '$lib/classes/Typewriter';
    import { MetaTags } from 'svelte-meta-tags';
    import { JsonLd } from 'svelte-meta-tags';

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
<div>
    <div class="blog-content">
        <h2 class="category">🔥🔥 TRENDING</h2>
        <BlogCard author="" content={articles['la-isola-della-blockchain']}/>
        <BlogCard author="" content={articles['guerra-crittografica']}/>
        <BlogCard author="" content={articles['anchor-protocol']}/>
    </div>
    <div class="blog-content">
        <h2 class="category">🐱‍🏍🐱‍👤🐱‍🚀 CHAINLINK HACKATHON 2022</h2>
        <BlogCard author=" https://www.youtube.com/watch?v=UkdYCFVea68" content="The Purpose of Smart Contracts"/>
        <BlogCard author="https://www.youtube.com/watch?v=HuUcdoPkzeg " content="Intro to Solidity & Remix"/>
        <BlogCard author=" https://www.youtube.com/watch?v=p8LbgPwbtxw" content="Intro to Chainlink"/>
        <BlogCard author="https://www.youtube.com/watch?v=5WBng0kWzJo " content="Intro to Hardhat"/>
        <BlogCard author="https://www.youtube.com/watch?v=JrYdDkpOzyQ" content="Intro to Brownie"/>
        <BlogCard author="https://www.youtube.com/watch?v=fG66LNaceWU" content="Intro to Foundry"/>
        <BlogCard author="https://www.youtube.com/watch?v=jPp7a1w-J6 " content="Intro to Truffle"/>
        <BlogCard author=" https://www.youtube.com/watch?v=fPsH77ZoXt4 " content="Intro to Anchor / Solana Development"/>
        <BlogCard author=" https://www.youtube.com/watch?v=dDr7glOjtvI" content="Testing with Hardhat"/>
        <BlogCard author="https://www.youtube.com/watch?v=uR3VKVQtYhQ " content="Testing with Brownie"/>
    </div>
    <div class="blog-content">
        <h2 class="category">🎁💣 PROSSIMI POST</h2>
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
    <div class="blog-content">
        <h2 class="category">🛠🛠 LAVORI IN CORSO</h2>
        <BlogCard author="andrea" content="Pop-up donazione ETH🐱‍🚀"/>
        <BlogCard author="andrea" content="Newsletter mailchimp🙊"/>
        <BlogCard author="andrea" content="Rimuovere social📷"/>
        <BlogCard author="giorgio" content="Integrazione Metamask🦊"/>
        <BlogCard author="andrea" content="Dark-mode"/>
        <BlogCard author="giorgio" content="Vite image plugin"/>
        <BlogCard author="andrea" content="plugin SEO"/>
        <BlogCard author="andrea" content="Google News account + pubblicazione articoli"/>
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
    .blog-content{
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
        .blog-content{
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





<MetaTags
  title="The Coding Panda"
  description="Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro"
  canonical="https//www.thecodingpanda.dev"
  openGraph={{
    url: 'https//www.thecodingpanda.dev',
    title: 'The Coding Panda',
    description: 'Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro',
    images: [
      {
        url: 'https://thecodingpanda.dev/loghi/panda.svg',
        width: 800,
        height: 600,
        alt: 'The Coding Panda'
      },
      {
        url: 'https://thecodingpanda.dev/Blockchain_Black.jpg',
        width: 900,
        height: 800,
        alt: 'The Coding Panda'
      }
    ],
    site_name: 'The Coding Panda'
  }}
/>

<JsonLd
  schema={{
    '@type': 'Dataset',
    name: 'The Coding Panda',
    description: 'Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro',
    license: 'https//www.thecodingpanda.dev'
  }}
/>