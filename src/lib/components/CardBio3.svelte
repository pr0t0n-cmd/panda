<script>
  export let image;
  export let name;
</script>

<div class="cards cards--three">
    <img src={image} class="img-responsive" alt="">
    <span class="cards--three__rect-1">
      <span class="shadow-1"></span>
      <p>{name}</p>
    </span>
    <span class="cards--three__rect-2">
      <span class="shadow-2"></span>
    </span>
    <span class="cards--three__circle"></span>
    <ul class="cards--three__list">
      <li><i class="fab fa-facebook-f"></i></li>
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-linkedin-in"></i></li>
    </ul>
  </div>

  <style>
    .img-responsive {
  max-width: 100%;
  height: auto;
}

.cards {
  width: 300px;
  height: 400px;
  display: block;
  background-size: cover;
  float: left;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  background-position: center;
  margin: 10px;
}
.cards--three {
  position: relative;
  z-index: 10;
}
.cards--three:hover .cards--three__rect-1 {
  left: 10%;
}
.cards--three:hover .cards--three__rect-1 .shadow-1 {
  left: -20%;
}
.cards--three:hover .cards--three__rect-2 {
  left: 60%;
}
.cards--three:hover .cards--three__rect-2:before {
  left: -100%;
}
.cards--three:hover .cards--three__rect-2:after {
  left: 80%;
}
.cards--three:hover .cards--three__rect-2 .shadow-2 {
  left: -10%;
}
.cards--three:hover .cards--three__circle {
  transform: scale(1);
}
.cards--three:hover .cards--three__circle:before {
  transform: scale(0.9);
}
.cards--three:hover .cards--three__list li {
  transform: translateX(0);
}
.cards--three__rect-1 {
  background: #111;
  width: 200px;
  height: 110px;
  transform: skewX(-20deg);
  display: block;
  position: absolute;
  top: 73%;
  opacity: 0.9;
  left: -100%;
  z-index: 8;
  transition: all 0.5s ease-in;
}
.cards--three__rect-1 p {
  font-size: 20px;
  color: #fff;
  transform: skewX(20deg);
  line-height: 6rem;
}
.cards--three__rect-1 .shadow-1 {
  background: #000;
  width: 230px;
  height: 100px;
  display: block;
  position: absolute;
  left: -200%;
  z-index: -1;
  transition: all 0.3s ease-in;
}
.cards--three__rect-2 {
  width: 100px;
  height: 70px;
  background: #111;
  position: absolute;
  top: 65%;
  left: 1000%;
  opacity: 0.9;
  transform: skewX(-20deg);
  z-index: 8;
  transition: all 0.5s ease-in;
}
.cards--three__rect-2::before {
  content: "";
  display: block;
  width: 50px;
  height: 40px;
  background: #000;
  opacity: 1;
  position: absolute;
  left: 500%;
  top: 10%;
  transition: all 0.3s ease-in;
}
.cards--three__rect-2::after {
  content: "";
  display: block;
  width: 50px;
  height: 40px;
  background: #111;
  opacity: 1;
  position: absolute;
  left: 500%;
  top: 114%;
  transition: all 0.5s ease-in;
  transition-delay: 0.2s;
}
.cards--three__rect-2 .shadow-2 {
  background: #000;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: -10%;
  left: 500%;
  transition: all 0.5s ease-in;
  transition-delay: 0.2s;
}
.cards--three__circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: #111;
  position: absolute;
  top: -15%;
  left: 50%;
  opacity: 0.9;
  transform: scale(0);
  transition: all 0.3s ease;
}
.cards--three__circle:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 50%;
  transform: scale(0);
  transition: all 0.3s ease;
  transition-delay: 0.2s;
}
.cards--three__list {
  list-style: none;
  position: absolute;
  top: -9px;
  right: 7px;
  padding-top: 60px;
  transition: all 0.4s ease;
}
.cards--three__list li {
  display: inline-block;
  margin: 4px;
  color: #2be40f;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #111;
  text-align: center;
  line-height: 1.7rem;
  font-size: 12px;
  transition: all 0.3s ease;
  transform: translateX(500%);
}
.cards--three__list li:nth-child(1) {
  transition-delay: 0.2s;
}
.cards--three__list li:nth-child(2) {
  transition-delay: 0.3s;
}
.cards--three__list li:nth-child(3) {
  transition-delay: 0.4s;
}

ul li i {
  color: #2be40f;
}


  </style>