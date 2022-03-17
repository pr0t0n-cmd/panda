<script>
    export let content
    export let clickoutside
    export let toggle
</script>

<span>
    <ul>
        {#each Object.values(content) as article}
            <li>
                <a href={`/blog/articles/${article.category}/${article.link}`} use:clickoutside={toggle}>{article.title}</a>
            </li>
        {/each}
    </ul>
</span>

<style>
    span{
        z-index: 10;
        position: absolute;
        top: 150%;
        left: -50%;
        width: max-content;
        padding: .75rem;
        background: #FFF;
        border: 1px solid #444;
        box-shadow: 2px 2px 6px  rgba(0,0,0,.3);
    }
    li{
        font-size: .75rem;
        padding: .75rem .75rem;
        list-style-type: none;
        text-align: left;
        text-transform: capitalize;
        border-bottom: .5px solid rgb(134, 134, 134);
    }
    li:last-child{
        border-bottom: none;
    }
    a{
        text-decoration: none;
    }
</style>