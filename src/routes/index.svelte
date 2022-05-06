<script>
    import { onMount } from 'svelte';
    import BlogCard from '$lib/components/BlogCard.svelte';
    import { articles } from '$lib/data/articles.json';
    import { category } from '$lib/data/categories';
    import { TypeWriter } from '$lib/classes/Typewriter';
    import { MetaTags } from 'svelte-meta-tags';
    import { JsonLd } from 'svelte-meta-tags';

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
    <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
</svelte:head>

<section >
    <div class="header-banner" style="position: absolute; top: 0">
        <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,algorand,terra-luna,solana,truebit-protocol,enjincoin,the-sandbox,decentraland,anchor-protocol,avalanche-2" currency="eur" background-color="transparent" locale="it" font-color="#ffffff"></coingecko-coin-price-marquee-widget>
    </div>
    <div class="header-content">
        <div class="dynamic-text-container">
            <h1>
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
        <h2 class="category">👨🏾‍💻👩🏾‍💻 CHAINLINK HACKATHON 2022 <span>(Link video in Inglese)</span> </h2>
        <BlogCard author="" content={articles['chainlink-01']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-02']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-03']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-04']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-05']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-06']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-07']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-08']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-09']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-10']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-11']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-12']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-13']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-14']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-15']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-16']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-17']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-18']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-19']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-20']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-21']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-22']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-23']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-24']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-25']}></BlogCard>
        <BlogCard author="" content={articles['chainlink-26']}></BlogCard>
    </div>
    <div class="blog-content">
        <h2 class="category">🎁💣 PROSSIMI POST</h2>
        <BlogCard author="A" content="Previsioni Shiba inu 2030"/>
        <BlogCard author="G" content="Come comprare le critovalute su Binance"/>
        <BlogCard author="A" content="Come comprare le critovalute su Coinbase"/>
        <BlogCard author="G" content="Come scambiare le critovalute su Metamask"/>
        <BlogCard author="G" content="Come comprare un NFT"/>
        <BlogCard author="A" content="Come creare un NFT"/>
        <BlogCard author="G" content="Come vendere un NFT"/>
        <BlogCard author="G" content="Come usare CoinMarketcap"/>
        <BlogCard author="A" content="Come entrare nel metaverso in soli 5 minuti"/>
        <BlogCard author="A" content="Come creare un portafoglio su Metamask"/>
    </div>
    <div class="blog-content">
        <h2 class="category">🚧🚧 LAVORI IN CORSO</h2>
        <BlogCard author="A" content="Pop-up donazione ETH🐱‍🚀"/>
        <BlogCard author="A" content="Newsletter mailchimp🙊"/>
        <BlogCard author="A" content="Rimuovere social📷"/>
        <BlogCard author="G" content="Integrazione Metamask🦊"/>
        <BlogCard author="A" content="Dark-mode"/>
        <BlogCard author="G" content="Vite image plugin"/>
        <BlogCard author="A" content="plugin SEO"/>
        <BlogCard author="A" content="Google News account + pubblicazione articoli -> https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit"/>
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
        text-align: center;
    }

    .dynamic-text-container{
        display: flex;
        position: relative;
        width: 100%;
        height: 120px;
        justify-content: center;
    }

    .header-content{
        z-index: 1;
        margin-top: 80px;
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
    h2 span {
        font-size: 12px;
        text-transform: none;
        color: #fff ;
    }

    .category{
        flex: 100%;
        text-transform: uppercase;
        color: #fff ;
        padding: 1rem;
        border-bottom: 1px solid #2be40f;
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
  title="The Coding Panda | Il Blog per appassionati di Blockchain - NFT - DeFi - DAO"
  description="Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro"
  canonical="https://thecodingpanda.dev/"
  openGraph={{
    url: 'https://thecodingpanda.dev/',
    title: 'The Coding Panda',
    description: 'Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro',
    images: [
      {
        url: 'https://thecodingpanda.dev/loghi/panda.png',
        alt: 'The Coding Panda'
      }
    ],
    site_name: 'The Coding Panda'
  }}
/>

<JsonLd
  schema={{
    '@type': 'Dataset',
    name: 'The Coding Panda | Il Blog per appassionati di Blockchain - NFT - DeFi - DAO',
    description: 'Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro',
    license: 'https://thecodingpanda.dev/',
    creator: {
        "@type":"Organization",
         "url": "https://www.thecodingpanda.dev/",
         "name":"The Coding Panda",
         "contactPoint":{
            "@type":"ContactPoint",
            "contactType": "Sviluppatori",
            "email":"thecodingpanda.dev@gmail.com"
         }
    }
  }}
/>