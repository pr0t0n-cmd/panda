<script>
  export let image;
  export let name;

</script>

<div class="cards cards--two">
    <img src={image} class="img-responsive" alt="Cards">
    <span class="cards--two__rect"></span>
    <span class="cards--two__tri"></span>
    <p>{name}</p>
    <ul class="cards__list">
      <li><i class="fab fa-facebook-f"></i></li>
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-instagram"></i></li>
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

.cards--two {
  position: relative;
  backface-visibility: hidden;
}
.cards--two p {
  position: absolute;
  top: 83%;
  left: -100%;
  text-transform: capitalize;
  color: #fff;
  font-size: 20px;
  z-index: 8;
  transition: all 0.6s ease;
}
.cards--two:hover p {
  left: 8%;
}
.cards--two:hover img {
  transform: translateY(-15px);
}
.cards--two:hover .cards--two__rect {
  top: 75%;
}
.cards--two:hover .cards--two__rect:before {
  transform: translateY(15px);
}
.cards--two:hover li {
  transform: translateY(0);
}
.cards--two:hover .cards--two__tri {
  right: -40%;
}
.cards--two:hover .cards--two__tri:before {
  right: -312px;
}
.cards--two img {
  transition: all 0.2s ease;
}
.cards--two__tri {
  border-top: 220px solid transparent;
  border-bottom: 190px solid transparent;
  border-right: 288px solid #111;
  opacity: 0.9;
  position: absolute;
  display: block;
  top: 0;
  right: -100%;
  transition: all 0.3s ease-in-out;
}
.cards--two__tri:before {
  border-top: 220px solid transparent;
  border-bottom: 190px solid transparent;
  border-right: 288px solid #000;
  position: absolute;
  content: "";
  display: block;
  top: -220px;
  right: -612px;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.2s;
}
.cards--two__rect {
  width: 750px;
  height: 200px;
  background: #111;
  display: block;
  position: absolute;
  top: 175%;
  left: -78%;
  transform: rotate(30deg);
  z-index: 5;
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
}
.cards--two__rect:before {
  content: "";
  display: block;
  width: 100%;
  position: relative;
  height: 100%;
  background: #000;
  transform: translateY(200px);
  z-index: 2;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.1s;
}
.cards--two ul {
  list-style: none;
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 9;
}
.cards--two ul li {
  display: inline-block;
  font-size: 16px;
  margin: 7px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  transform: translateY(100px);
}
.cards--two ul li:nth-child(2) {
  transition-delay: 0.2s;
}
.cards--two ul li:nth-child(3) {
  transition-delay: 0.3s;
}
.cards--two ul li:nth-child(4) {
  transition-delay: 0.4s;
}

ul li i {
  color: #2be40f;
}

  </style>