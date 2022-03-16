<script>
    export let content
    export let clickoutside
    export let toggle
</script>

<span>
    <ul>
        {#each Object.values(content) as article}
            <li>
                <a href={`/blog/articles/${article.category}/${article.link}`} use:clickoutside={toggle}>{article.link}</a>
            </li>
        {/each}
    </ul>
</span>

<style>
    span{
        z-index: 10;
        position: absolute;
        top: 150%;
        left: 0;
        width: max-content;
        padding: .75rem;
        background: #FFF;
        border-left: 1px solid #444;
        border-top: 1px solid #444;
        border-bottom: 3px solid #222;
        border-right: 3px solid #222;
    }
    li{
        padding: 1rem .75rem;
        list-style-type: none;
    }
</style>