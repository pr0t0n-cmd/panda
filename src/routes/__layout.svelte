<script>
    import Footer from '$lib/components/layout/Footer.svelte'
    import Navbar from '$lib/components/layout/Navbar.svelte'
    import NavbarMobile from '$lib/components/layout/NavbarMobile.svelte'
</script>
	
<div>
    <NavbarMobile />
    <Navbar/>
    <main id="main">
        <slot />
    </main>
    <Footer/>
    
</div>

<style>
    main{
        position: relative;
        flex: 1;
        padding: 5%;
        min-height: 100vh;
        overflow: hidden !important;
    }
    div{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
    
    /* @media screen and (max-width: 600px){
        main{
            margin-top: 30px;
        }
    } */
</style>
