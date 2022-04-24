
<script>
  function handleOpenModal (){
    console.log("pino popup")
  }

    let y = 0;
	$: console.log(y)

</script>

<svelte:window bind:scrollY={y} />
<footer>
    <div class="f-box-container">

      <div class="f-box">
        <p class="f-bold">Contatti</p>
        
        <p style="font-size: 0.8rem; letter-spacing:1px; margin-top: 6px"><i class="fa-solid fa-envelope" style="margin-right: 5px;"></i>thecodingpanda.dev@gmail.com</p>
      </div>

      <div class="f-box">
        <p class="f-bold">Newsletter</p>
        <div class="newsletter">
          <input type="text" placeholder="email">
          <span id="iscriviti"> <p id="subscribe">Iscriviti</p> </span>
        </div>
      </div>

      <div class="f-box">
        <p class="f-bold">Supportaci</p>
          <button onclick={ handleOpenModal } 
          class="btn-donazioni" >
            <img src="/icone/ethereum-eth-logo.svg"alt="Ethereum Logo" />
            Ethereum
          </button>
      </div>

    </div>
    <div class="f-box-social">
      <p class="f-bold">Seguici sui social</p>
      <div class="f-box-img">
        <!-- <a href="/">
          <img style="width: 30px;" src="/icone/social/discord-brands.svg" alt="Discord">
        </a>
        <a href="/">
          <img style="width: 15px;" src="/icone/social/facebook-f-brands.svg" alt="Facebook">
        </a>
        <a href="/">
          <img src="/icone/social/instagram-brands.svg" alt="Instagram">
        </a>
        <a href="/">
         <img style="width: 22px;" src="/icone/social/linkedin-in-brands.svg" alt="LinkedIn">
        </a>
        <a href="/">
           <img style="width: 30px;" src="/icone/social/medium-brands.svg" alt="Medium">
        </a>
        <a href="/">
          <img style="width: 25px;" src="/icone/social/reddit-brands.svg" alt="Reddit">
        </a>
        <a href="/">
          <img src="/icone/social/rss-solid.svg" alt="RSS">
        </a>
        <a href="/">
          <img src="/icone/social/tiktok-brands.svg" alt="Tik Tok">
        </a> -->
        <a href="https://www.youtube.com/channel/UCrvDRoWnXoOsTh0y0UKvicQ" target="_blank">
         <img style="width: 30px;" src="/icone/social/youtube-brands.svg" alt="Youtube">
        </a>
      </div>
      <p class="f-bk">@thecodingpanda</p>
      
    </div>

    <div class="top-arrow-container" class:hide={y >= 600}>
      <a href="#main" style="width: fit-content;">
          <img class="top-arrow-mobile" src="/icone/arrow-top.svg" alt="Scroll to Top">
      </a>

      <a href="#nav" style="width: fit-content;">
          <img class="top-arrow" src="/icone/arrow-top.svg" alt="Scroll to Top">
      </a>
    </div>

    <div class="footer-sponsor"><a href="https://kit.svelte.dev/" target="_blank"><p>Sviluppato con </p><img src="./loghi/svelte.png" alt="Svelte Kit Logo" style="width: 20px;"></a></div>
    
  </footer>

<style>
  
 footer {
  background: linear-gradient(to top right, #333, #000);
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: auto;
  justify-content: space-evenly;
  padding-top: 80px ;
}

.f-box-container {
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 7rem;
  flex-direction: column;
}

.f-box {
  min-width: max-content;
  display: flex;
  flex-direction: column;
}

.f-box p:first-child{
  margin-bottom: .5rem;
}



.f-box:nth-child(2) {
  margin: 3rem 0;
}

.f-bold {
  font-size: 1.5rem;
}

/* .f-bold-s {
  font-size: 1.2rem;
} */

.f-bk {
  font-size: 1rem;
  letter-spacing: 5px;
}

.f-box-social {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #2be40f;
  min-width: 300px;
  margin-top: 3rem;
  padding-bottom: 6rem;
}

.f-box-social p:first-child{
  margin-bottom: .5rem;
}


.f-box-social img {
  width: 20px;
  margin-right: 10px;
  margin-bottom: .5rem;
  transition: all .5s;
}

.f-box-social img:hover {
  width: 20px;
  margin-right: 10px;
  margin-bottom: .5rem;
  transform: scale(1.2);
}

.f-box-social img:first-child {
  width: 20px;
  margin-left: 5px;
  margin-bottom: .5rem;
}

.f-box-img {
  display: flex;
}
p{
  color: #fff;
}

.newsletter{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.newsletter input {
  min-width: 150px;
  padding: .3rem ;
  border: none;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: .9rem;
}

.newsletter input:focus + span #subscribe {
color: #2be40f !important;

}

.newsletter span p{
  margin-left: .5rem;
}


.newsletter input span:hover:after {
	width: 80%;
	background: #2be40f;
}

.f-box .newsletter span p {
  color: #fff;
  font-size: .8rem;
  margin-bottom: 0;
  transition: all .5s;
  
  display: inline-block;
	position: relative;
}

.f-box .newsletter span p:after {
  content: '';
	display: block;
	margin: auto;
	height: 1px;
	width: 0px;
	background: transparent;
	transition: width .5s ease, background-color .5s ease;
}

.f-box .newsletter span:hover p:after {
	width: 100%;
	background: #2be40f;
}

.newsletter span:hover {
  cursor: pointer;
}


.btn-donazioni {
  min-width: 150px ;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: .2rem 0rem ;
  border-radius: 5px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  }

  .btn-donazioni img {
    width: 20px;
    height: 20px;
  }

  .top-arrow-mobile{
    width: 30px;
    float: right;
    margin: 10px;
    display: none;
  }

   .top-arrow{
    width: 30px;
    float: right;
    margin: 10px;
  }

  .top-arrow-container{
    opacity: 0;
    visibility: hidden;
    position: fixed;
    bottom: 10px;
    right: 10px;
    transition: all .5s linear;  
  }
  .hide{
    opacity: 1;
    visibility: visible;
    transition: all .5s linear;  
    }

  .footer-sponsor a {
    font-family: "Ek Mukta";
    font-size: 12px;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    margin-top: 100px;
    text-decoration: none;
    letter-spacing: -.5px;
  }

  .footer-sponsor a p {
    margin-right:5px;
  }
  


  @media only screen and (max-width: 450px) {
    footer{
      min-height: 100vh;
      justify-content: space-around;
    }
    .top-arrow-mobile{
    display: block;
  }
   .top-arrow{
    display: none;
  }
  }


@media only screen and (min-width: 820px) {
  .f-box:nth-child(2) {
    margin: 0 3rem;
  }
  .f-box-social {
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #2be40f;
    min-width: 250px;
    margin-top: 5rem;
    padding-bottom: 0;
  }

  footer { 
    flex-direction: column;
  }

  .f-box-container {
    max-width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
  }

  .f-box {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    align-items: flex-start;
  }

  .f-box:last-child {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    align-items: flex-start;
  }
}
</style>