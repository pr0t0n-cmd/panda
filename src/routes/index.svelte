<script>
    import { onMount } from 'svelte';
    import BlogCard from '$lib/components/BlogCard.svelte';
    import BlogCardVideo from '$lib/components/BlogCard_Video.svelte';
    import { articles } from '$lib/data/articles.json';
    import { category } from '$lib/data/categories';
    import { videos } from '$lib/data/videos.json';
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

<section >
    <a style="position: absolute; top:30px; padding:20px" href="/about"><img width="25px" src="./icone/dev2.svg" alt="about dev"/></a>
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
        <BlogCardVideo content={videos['chainlink-01']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-02']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-03']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-04']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-05']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-06']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-07']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-08']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-09']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-10']}></BlogCardVideo>
        <BlogCardVideo content={videos['chainlink-11']}></BlogCardVideo>
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
        z-index: 1;
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
  title="The Coding Panda"
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
    name: 'The Coding Panda',
    description: 'Unisciti alla nostra community ed accedi a contenuti speciali che ti permetteranno di approfondire il mondo della blockchain attraverso gli occhi di due giovani programmatori appassionati di programmazione, nft, defi, dao e molto altro',
    license: 'https://thecodingpanda.dev/'
  }}
/>