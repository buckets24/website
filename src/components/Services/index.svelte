
<section class="section__services" id="services">
  <div class="section__services__wrapper">
    <h2 class="section__title">
    our<span class="section__subtitle">services</span>
    </h2>

    <div class="section__services__container ">
      <div class="section__services__card">
          <h4 class="section__services__card-title">Web Development</h4>
          <p class="section__services__card-description">Lightning fast websites, Lightning fast, scalable and easy to use and highly secured. Reach even more customers!</p>
      </div>
          <div class="section__services__card">
          <h4 class="section__services__card-title">Mobile Development</h4>
          <p class="section__services__card-description">High standard mobile applications that is IOS and Android compliant to reach customers in their mobile devices.</p>
      </div>
          <div class="section__services__card">
          <h4 class="section__services__card-title">UI/UX Design</h4>
          <p class="section__services__card-description">Different design for different needs, from modern to minimalistic, to understand that user experience is the top priority.</p>
      </div>
    </div>
  </div>
</section>

<style>
/* SERVICES */
.section__services {
  background-image: url("/assets/large-triangles.svg");
  position: relative;
  padding: 0 0 80px 0;
}

.section__services__wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.section__services__container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.section__services__card {
  padding: 30px;
  flex: 1;
  text-align: center;
}

.section__services__card:hover {
  background: rgb(34, 34, 34);
}

.section__services__card:last-child {
  border-right: none;
}

.section__services__card-title {
  color: #FFFFFF;
  font-family: Teko, sans-serif;
  font-size: 34px;
  display: inline;
  border-bottom: 4px solid #D64343;
}

.section__services__card-description {
  color: #FFFFFF;
  font-size: 16px;
  line-height: 26px;
  font-weight: 100;
  padding-top: 20px;
  margin: 0;
}

@media only screen and (min-width: 768px) {
  .section__services {
    padding: 80px 0;
  }

  .section__services__container {
    width: 100%;
    margin: 0 auto;
    padding: 0 60px;
    flex-direction: row;
  }
}
@media only screen and (min-width: 1024px) {
  .section__services {
    padding: 80px 0;
  }
  
  .section__services__container {
    width: 80%;
    margin: 0 auto;
    padding: 0 60px;
    flex-direction: row;
  }
}
/* END OF SERVICES */
</style>