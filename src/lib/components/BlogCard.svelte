<script>
    export let author
    export let content

    let cardImageStyle = 
        content.topImage ?
        `background: url(/${content.topImage});background-size: cover;
        background-position: center;` :
        `background: url(/favicon.png), linear-gradient(45deg, #00000085 100%, #00000015 0%); `
</script>

{#if typeof content != "string"}
    {#if content.type != "link"}
        <a href={`/blog/articles/${content.category}/${content.link}`} >
        <div style={cardImageStyle} class="img-sfondo"></div>
        <div class="card-content">
            <h2>{content.title}</h2>
            <h4>{content.description}</h4>
        </div>
    </a>
    {:else}
        <a href={content.link} target="_blank">
            <div style={cardImageStyle} class="img-sfondo"></div>
            <div class="card-content">
                <h2>{content.title}</h2>
                <h4>{content.description}</h4>
            </div>
        </a>
    {/if}
    
{:else}
    <p>🤦‍♂️{content}<span class="author"> - {author === 'A' ? '👳🏼‍♂️' : '👨🏼‍🦰'} {author}</span></p>
{/if}
<style>

    .author{
        color: #b5b5b5;
        font-size: smaller;
        font-style: italic;
    }

    p{
        flex-basis: 100%;
    }

    a{
        position: relative;
        padding: 10px;
        width: 280px;
        height: 380px;
        box-shadow: 2px 2px 7px #000;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }


    a:hover {
        box-shadow: 0px 0px 6px #fff;
    }

   

    h2{
        text-align: left;
        margin-bottom: 1rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    h4{
        font-weight: 400;
    }

    .card-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 0px;
        margin-top: 150px;
        color: #333;
    }
    .img-sfondo{
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
        right: 0;
    }
    
</style>