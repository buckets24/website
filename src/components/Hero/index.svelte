 <section class="section__our-story">
  <div class="our_story__overlay"></div>
  <div class="our_story__container">
    <div class="our_story__content">
      <div class="our_story__heading_main">Creative</div>
      <div class="our_story__heading_secondary">Digital Agency</div>
    </div>
  </div>
</section>

<style>
.section__our-story {
  background-image: url("/assets/bg-01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.our_story__overlay {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background-color: rgba(0,0,0, 0.8);
}

.our_story__container {
  width: 100%;
  position: relative;
  z-index: 1;
}

.our_story__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.our_story__heading_main {
  color: #FFFFFF;
  font-family: Teko, sans-serif;
  font-size: 55px;
  line-height: 55px;
  text-transform: uppercase;
  
}

.our_story__heading_secondary {
  color: #D64343;
  font-size: 40px;
  line-height: 38px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
}

@media only screen and (min-width: 768px) {
  .our_story__heading_main {
    font-size: 30px;
    line-height: 55px;
  }
  .our_story__heading_secondary {
    font-size: 50px;
    line-height: 58px;
  }
}

@media only screen and (min-width: 1024px) {
  .our_story__heading_main {
    font-size: 55px;
    line-height: 55px;
  }
  .our_story__heading_secondary {
    font-size: 90px;
    line-height: 78px;
  }
}
</style>