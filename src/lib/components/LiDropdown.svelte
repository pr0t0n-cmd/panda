<script>
    export let content
</script>

<span>
    <ul>
        {#each Object.values(content) as article}
            <li>
                <a href={`/blog/articles/${article.link}`}>{article.link}</a>
            </li>
        {/each}
    </ul>
</span>

<style>
    span{
        position: absolute;
        top: 110%;
        left: 0;
        width: max-content;
    }
    li{
        list-style-type: none;
    }
</style>