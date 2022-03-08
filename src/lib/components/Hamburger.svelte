<script>
	export let open = false
</script>

<button  class:open on:click={() => open = !open}>
	<img src="/icone/menu.svg" alt="hamburger" />
</button>

<style>
 img{
	 width: 50px;
	 background: transparent;
 }

 button{
	     border: none;
    background: transparent;
		position: absolute;
		top: 20px;
		left: 20px;
		
 }
</style>