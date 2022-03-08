<script>
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'
   

</script>
<div>
    <Header/>
    <main>
        <slot />
    </main>
    <Footer/>
   
</div>

<style>
    
    
    main{
        position: relative;
        padding: .5rem 3rem;
        flex: 1;
    }
     
    
    div{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
   
</style>
