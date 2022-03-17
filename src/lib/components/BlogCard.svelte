<script>
    export let content

    let cardImageStyle = 
        content.topImage ?
        `background: url(/${content.topImage});background-size: cover;
        background-position: center;` :
        `background: url(/favicon.png), linear-gradient(45deg, #00000085 100%, #00000015 0%);`
</script>

<a href={`/blog/articles/${content.category}/${content.link}`} style={cardImageStyle}>
    <h2>{content.title}</h2>
    <h3>{content.description}</h3>

</a>
<style>
    a{
        padding: 2rem;
        width: 320px;
        height: 400px;
        box-shadow: 2px 2px 7px #00000015;
        text-decoration: none;
    }

    h2{
        text-align: center;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 6px#2be40f ;
    }
</style>