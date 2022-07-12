<script>
  let menuOpened = false;
  function handleNav() {
		menuOpened = !menuOpened;
	}
</script>

<navbar class:menuOpened class="navbar">
    <div on:click={handleNav} class="burger-container">
      <div id="burger">
        <div class="bar topBar"></div>
        <div class="bar btmBar"></div>
      </div>
    </div>
    <a class="logo" href="/">
      <img src="/loghi/panda-bg-black.png" alt="panda" />
    </a>
    <ul class="menu">
      <li on:click={handleNav} class="menu-item"><a href="/">Home</a></li>
      <li on:click={handleNav} class="menu-item"><a href="/blog">Blog</a></li>
      <!-- <li on:click={handleNav} class="menu-item"><a href="/about">About</a></li> -->
      
    </ul>
    <div class="shop icon icon-bag"></div>
  </navbar>

  <style>
    

.navbar {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: linear-gradient(to top right, #333, #000);
  overflow: hidden;
  transition: all 0.5s ease-out;
  transition-delay: 0.2s;
  z-index: 2;
  padding-bottom: 50px;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 25%);
}
 .navbar .burger-container {
  position: relative;
  display: inline-block;
  height: 50px;
  width: 50px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 99;
}
 .navbar .burger-container #burger {
  width: 18px;
  height: 8px;
  position: relative;
  display: block;
  margin: -4px auto 0;
  top: 50%;
}
 .navbar .burger-container #burger .bar {
  width: 100%;
  height: 1px;
  display: block;
  position: relative;
  background: #2be40f;
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0s;
}
 .navbar .burger-container #burger .bar.topBar {
  transform: translateY(0px) rotate(0deg);
}
 .navbar .burger-container #burger .bar.btmBar {
  transform: translateY(6px) rotate(0deg);
}

 .navbar ul.menu {
  position: relative;
  display: block;
  padding: 0px 48px 0;
  list-style: none;
  visibility: hidden;
  transition: all 0.3s ease-in;
}
 .navbar ul.menu li.menu-item {
  border-bottom: 1px solid #333;
  margin-top: 5px;
  transform: scale(1.15) translateY(-30px);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
}
 .navbar ul.menu li.menu-item:nth-child(1) {
  transition-delay: 0.49s;
}
 .navbar ul.menu li.menu-item:nth-child(2) {
  transition-delay: 0.42s;
}
 .navbar ul.menu li.menu-item:nth-child(3) {
  transition-delay: 0.35s;
}
 .navbar ul.menu li.menu-item:nth-child(4) {
  transition-delay: 0.28s;
}
 .navbar ul.menu li.menu-item:nth-child(5) {
  transition-delay: 0.21s;
}
 .navbar ul.menu li.menu-item:nth-child(6) {
  transition-delay: 0.14s;
}
 .navbar ul.menu li.menu-item:nth-child(7) {
  transition-delay: 0.07s;
}
 .navbar ul.menu li.menu-item a {
  display: block;
  position: relative;
  color: #fff;
  font-family: 'Mukta', sans-serif;
  font-weight: 100;
  text-decoration: none;
  font-size: 22px;
  line-height: 2.35;
  font-weight: 200;
  width: 100%;
  color: #2be40f;
  letter-spacing: 2px;
  text-shadow: 0px 0px 10px #93ff0050;
}
 .navbar.menuOpened {
  height: 100%;
  background-color: #000;
  transition: all 0.3s ease-in;
  transition-delay: 0.25s;
  z-index: 99;
}

 .navbar.menuOpened ul.menu{
  visibility: visible;
}
 .navbar.menuOpened .burger-container {
  transform: rotate(90deg);
}
 .navbar.menuOpened .burger-container #burger .bar {
  transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0.2s;
}
 .navbar.menuOpened .burger-container #burger .bar.topBar {
  transform: translateY(4px) rotate(45deg);
}
 .navbar.menuOpened .burger-container #burger .bar.btmBar {
  transform: translateY(3px) rotate(-45deg);
}
 .navbar.menuOpened ul.menu li.menu-item {
  transform: scale(1) translateY(0px);
  opacity: 1;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(1) {
  transition-delay: 0.27s;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(2) {
  transition-delay: 0.34s;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(3) {
  transition-delay: 0.41s;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(4) {
  transition-delay: 0.48s;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(5) {
  transition-delay: 0.55s;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(6) {
  transition-delay: 0.62s;
}
 .navbar.menuOpened ul.menu li.menu-item:nth-child(7) {
  transition-delay: 0.69s;
}
 .navbar.menuOpened .icon.icon-bag {
  transform: translateX(75px);
  transition-delay: 0.3s;
}

.logo{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 50px;
	}
 
@media (max-width: 600px) {
   .navbar {
    position: fixed;
    display: block;
  }
}
  </style>