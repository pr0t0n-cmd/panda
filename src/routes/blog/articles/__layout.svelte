<script>
// @ts-nocheck

    import {page} from '$app/stores'
    import {setContext} from 'svelte';
    setContext('currentPage', $page.url.pathname);
</script>
<slot />