
<script>
  function handleOpenModal (){
    console.log("pino popup")
  }
</script>

<footer>
    <div class="f-box-container">

      <div class="f-box">
        <p class="f-bold">The Coding Panda</p>
        <p class="f-bk">thecodingpanda.dev</p>
        <!-- <p class="f-bold-s">ITALIA</p>
        <p class="f-bk">Corso Magenta 46, 20123 <span class="f-bold-s">Milano</span> </p>
        <p class="f-bk">Tel. 0039 02.48.01.30.81</p>
        <p class="f-bk">Fax. 0039 02.48.01.14.86</p>
        <p class="f-bk">cromm@cromm.it</p> -->
      </div>

      <div class="f-box">
        <p class="f-bold">Newsletter</p>
        <div class="newsletter">
          <input type="text">
          <span id="iscriviti"> <p>Iscriviti</p> </span>
        </div>
        
        <!-- <p class="f-bk">Freight forwarders</p>
        <p class="f-bold-s">NIGERIA</p>
        <p class="f-bk">25, Oyekan Road,<span class="f-bold-s">Apapa - Lagos</span></p>
        <p class="f-bk">cromm-nigeria@cromm-nig.com</p> -->
      </div>

      <div class="f-box">
        <p class="f-bold">Supportaci</p>
          <button onclick={ handleOpenModal } 
          class="btn-donazioni" >
            <img src="icone/ethereum-eth-logo.svg"alt="Ethereum Logo" />
            Ethereum
          </button>
      </div>

    </div>
    <div class="f-box-social">
      <p class="f-bold">Seguici sui social</p>
      <div class="f-box-img">
        <a href="#">
          <img style="width: 15px;" src="icone/social/facebook-f-brands.svg" alt="Facebook">
        </a>
        <a href="#">
          <img src="icone/social/instagram-brands.svg" alt="Instagram">
        </a>
        <a href="#">
         <img style="width: 22px;" src="icone/social/linkedin-in-brands.svg" alt="LinkedIn">
        </a>
        <a href="#">
           <img style="width: 30px;" src="icone/social/medium-brands.svg" alt="Medium">
        </a>
        <a href="#">
          <img style="width: 25px;" src="icone/social/reddit-brands.svg" alt="Reddit">
        </a>
        <a href="#">
          <img src="icone/social/rss-solid.svg" alt="RSS">
        </a>
        <a href="#">
          <img src="icone/social/tiktok-brands.svg" alt="Tik Tok">
        </a>
        <a href="#">
         <img style="width: 30px;" src="icone/social/youtube-brands.svg" alt="Youtube">
        </a>
      </div>
      <p class="f-bk">@thecodingpanda</p>
    </div>


  </footer>


<style>
 footer {
  background: linear-gradient(to top right, #333, #000);
  margin-top: -2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
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
  font-size: 1.1rem;
}

.f-bold-s {
  font-size: 0.8rem;
}

.f-bk {
  font-size: 0.7rem;
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
  font-size: .6rem;
}

.newsletter span {
  font-size: .6rem;
  margin-left: .5rem;
}

.f-box .newsletter span p {
  color: #fff;
  margin-bottom: 0;
  transition: all .5s;
}

.newsletter span:hover {
  cursor: pointer;
}

.newsletter span:hover p{
  color: #2be40f;
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
  }

  .btn-donazioni img {
    width: 20px;
    height: 20px;
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
    background: linear-gradient(to top right, #333, #000);
    height: max-content;
    margin-top: -2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 1rem;
  }

  .f-box-container {
    max-width: 100%;
    display: flex;
    margin: 0 auto;
    margin-top: 7rem;
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