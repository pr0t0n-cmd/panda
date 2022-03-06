<script>
// @ts-nocheck

    export let content
    let cardImageStyle = `
        background: ${content.topImage 
            ? `url(/${content.topImage});` 
            : `url(/favicon.png), linear-gradient(45deg, #00000085 100%, #00000015 0%);`}
    `
</script>
<a href={`/blog/articles/${content.link}`} style={cardImageStyle}>
    <h2>{content.title}</h2>
    <h3>{content.description}</h3>

</a>
<style>
    a{
        padding: 2rem;
        width: 320px;
        height: 400px;
        box-shadow: 2px 2px 7px #00000015;
        background-image: url(content.topImage);
    }
</style>