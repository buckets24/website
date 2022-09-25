 <!-- ABOUT -->
<section class="section__about" id="about">
  <h2 class="section__title">
    our<span class="section__subtitle">story</span>
  </h2>

  <!-- CARDS -->
  <div class="about__card__container">
    <div class="about__card__item">
      <h4 class="about__card__title">Web Experts</h4>
      <p class="about__card__description">We have a team of web artisans that is well equipped with skills and tools to craft production grade Websites and Web Applications.</p>
    </div>
    <div class="about__card__item">
      <h4 class="about__card__title">Mobile Experts</h4>
      <p class="about__card__description">We have a team of mobile gurus that is really fluent in developing mobile applications for IOS and Android.</p>
    </div>
    <div class="about__card__item">
      <h4 class="about__card__title">UI/UX Experts</h4>
      <p class="about__card__description">We have a team of design wizards that is adaptive to different design paradigms for IOS, Android and Web.</p>
    </div>
  </div>
    <!-- END OF CARDS -->
  <div class="about__content">
    <h2 class="about__content__title">
      <span class="about__content__sub">
        we are <span class="about__content__title_sub">design and</span>
      </span>
      <span class="about__content__title_sub">development studio</span>
      <span class="about__content__sub">based in the manila</span>
    </h2>

    <div class="about__content__info">
      <div class="about__content__info__item">
        <div class="about__content__info__amount">10</div>
        <div class="about__content__info__description">Years of Experience</div>
      </div>

      <div class="about__content__info__item">
        <div class="about__content__info__amount">10</div>
        <div class="about__content__info__description">Years of Experience</div>
      </div>

      <div class="about__content__info__item">
        <div class="about__content__info__amount">10</div>
        <div class="about__content__info__description">Years of Experience</div>
      </div>

      <div class="about__content__info__item">
        <div class="about__content__info__amount">10</div>
        <div class="about__content__info__description">Years of Experience</div>
      </div>
    </div>
  </div>
</section>

<style>
/* ABOUT */
.section__about {
  background-image: url("/assets/path.svg");
  position: relative;
  padding: 0 0 60px 0;
}

.about__content {
  padding: 60px 0 20px;
}

.about__content__title {
  color: #FFFFFF;
  font-size: 30px;
  line-height: 30px;
  font-family: Teko, sans-serif;
  text-transform: uppercase;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.about__content__title_sub {
  color:#D64343;
  font-size: 40px;
  font-family: Teko, sans-serif;
}

.about__content__sub {
  font-size: 40px;
  font-family: Teko, sans-serif;
  display: block;
}

.about__content__info {
  flex: 1;
  width: 100%;
  display: grid;
  grid-row: auto auto;
  grid-row-gap: 20px;
  grid-template-columns: 50% 50%;
  padding-top: 30px;
}

.about__content__info__item {
  text-align: center;
}
.about__content__info__amount {
  color: #FFFFFF;
  font-family: Teko, sans-serif;
  font-size: 100px;
  line-height: 100px;
  font-weight: 900;
  position: relative;
}

.about__content__info__description {
  color: #FFFFFF;
  font-size: 14px;
  margin-top: -10px;
}

.about__card__container {
  background: #000000;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.about__card__item {
  flex: 1;
  padding: 30px;
  background: rgb(17, 17, 17);
  border-bottom: 1px solid rgb(68, 68, 68);
  flex: 1,
}
.about__card__item:hover {
  background: rgb(34, 34, 34);
}

.about__card__title {
  color:#FFFFFF;
  font-family: Teko, sans-serif;
  font-size: 34px;
  display: inline;
  border-bottom: 4px solid #D64343;
}
.about__card__description {
  color: #FFFFFF;
  font-size: 16px;
  line-height: 26px;
  font-weight: 100;
  padding-top: 20px;
  margin: 0px;
}

@media only screen and (min-width: 768px) {
  .section__about {
    padding: 40px 0 60px;
  }

  .about__content {
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about__content__title {
    font-size: 50px;
    line-height: 50px;
    align-items: flex-end;
    padding: 0 80px 0 0;
  }

  .about__content__title_sub {
    font-size: 70px;
  }

  .about__content__sub {
    font-size: 70px;
  }

  .about__content__info {
    grid-template-columns: 50% 50%;
    grid-row-gap: 50px;
    grid-column-gap: 20px;
    padding-top: 0
  }

  .about__content__info__amount {
    font-size: 150px;
    line-height: 150px;
  }

  .about__content__info__description {
    font-size: 20px;
    margin-top: -30px;
  }

  .about__card__container {
    width: 100%;
    margin: 0 auto;
    padding: 0 60px;
    flex-direction: row;
  }

  .about__card__item {
    border: 1px solid rgb(68, 68, 68);
  }
}

@media only screen and (min-width: 1024px) {
  .section__about {
    padding: 40px 0 60px;
  }

  .about__content {
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about__content__title {
    font-size: 90px;
    line-height: 90px;
    align-items: flex-end;
    padding: 0 80px 0 0;
  }

  .about__content__title_sub {
     font-size: inherit;
  }

  .about__content__sub {
    font-size: inherit;
  }

  .about__content__info {
    grid-template-columns: 30% 50%;
    grid-row-gap: 50px;
    grid-column-gap: 20px;
    padding-top: 0;
  }

  .about__content__info__amount {
    font-size: 150px;
    line-height: 150px;
  }

  .about__content__info__description {
    font-size: 20px;
    margin-top: -30px;
  }

  .about__card__container {
    width: 80%;
    margin: 0 auto;
    padding: 0 60px;
    flex-direction: row;
  }

  .about__card__item {
    border: 1px solid rgb(68, 68, 68);
  }
}

/* END OF ABOUT */
</style>