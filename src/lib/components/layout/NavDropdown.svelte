<script>
    export let content
    export let clickoutside
    export let toggle
</script>

<span>
    <ul>
        {#each Object.values(content) as category}
            <li>
                <a href={`/blog/section/${category}`} use:clickoutside={toggle}>{category}</a>
            </li>
        {/each}
    </ul>
</span>

<style>
    span{
        z-index: 10;
        position: absolute;
        top: 100%;
        left: 0%;
        padding: 0.75rem;
        box-shadow: 2px 2px 7px #00000030;
    }
    
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    li{
        position: relative;
        font-size: .75rem;
        padding: .75rem .75rem;
        list-style-type: none;
        text-align: left;
        text-transform: uppercase;
    }

    li:after {
        content: '';
        display: block;
        margin: auto;
        height: 1px;
        width: 0px;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }
    li:hover:after {
        width: 100%;
        background: #2be40f;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-family: 'Mukta', sans-serif;
        letter-spacing: 2px;
        font-weight: 200;
    }

    
</style>