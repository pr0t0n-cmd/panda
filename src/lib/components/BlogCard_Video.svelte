<script>
    export let content

    let cardImageStyle = 
        content.topImage ?
        `background: url(/${content.topImage});background-size: cover;
        background-position: center;` :
        `background: url(/chainlink.png), linear-gradient(45deg, #00000085 100%, #00000015 0%); `
     
</script>


    <a href={content.link} target="_blank">
        <div style={cardImageStyle} class="img-sfondo"></div>
        <div class="card-content">
            <h2>{content.title}</h2>
            <h4>{content.description}</h4>
        </div>
    </a>

<style>

    

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
    }

    a:first-child{
        margin-top: 1rem;
    }

    a:hover {
        box-shadow: 2px 2px 10px #00000080;;
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
    @media screen and (max-width:600px){
        a {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
            height: 230px;
        }
        .img-sfondo{
            width: 100%;
            height: 90px;
            top: 24px;
            right: 0;
            opacity: .9;
        }
        .card-content{
        margin-top: 100px;
    }
        
        h2{
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0;
            color: #fff;
            background: linear-gradient(to top right , rgba(51, 51, 51, 0.815), #000);
            text-align: left;
            padding-left: 10px;
            font-weight: 100;
            box-shadow: 0 2px 6px #333;
            text-shadow: 0px 0px 3px #fff;
        }
        
    }
</style>