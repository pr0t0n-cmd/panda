<script>
	export let open = false
</script>

<button  class:open on:click={() => open = !open}>
	<img src="icone/menu.svg" alt="hamburger" />
</button>

<style>
 img{
	 width: 50px;
	 background: transparent;
 }
</style>