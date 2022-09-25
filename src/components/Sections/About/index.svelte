<script>
	import Title from '../../Title.svelte';
</script>
 
 <!-- ABOUT -->
<section class="section__about relative pt-0 pb-[60px] md:pt-[40px] md:pt-[60px]" id="about">

  <div class="pt-[110px] pb-[30px]">
    <Title title="our" subtitle="story" />
  </div>

  <!-- CARDS -->
  <div class="bg-dark w-full flex flex-col w-full m-auto lg:w-3/4 lg:flex-row">
    <div class="flex-1 p-[30px] bg-boxDark border border-solid border-boxDarkHover hover:bg-boxDarkHover">
      <h4 class="text-light font-primary text-[34px] inline border-b-4 border-solid border-primary">Web Experts</h4>
      <p class="text-light font-md leading-[26px] font-[100] pt-[20px] m-0">We have a team of web artisans that is well equipped with skills and tools to craft production grade Websites and Web Applications.</p>
    </div>
    <div class="flex-1 p-[30px] bg-boxDark border border-solid border-boxDarkHover hover:bg-boxDarkHover">
      <h4 class="text-light font-primary text-[34px] inline border-b-4 border-solid border-primary">Mobile Experts</h4>
      <p class="text-light font-md leading-[26px] font-[100] pt-[20px] m-0">We have a team of mobile gurus that is really fluent in developing mobile applications for IOS and Android.</p>
    </div>
    <div class="flex-1 p-[30px] bg-boxDark border border-solid border-boxDarkHover hover:bg-boxDarkHover">
      <h4 class="text-light font-primary text-[34px] inline border-b-4 border-solid border-primary">UI/UX Experts</h4>
      <p class="text-light font-md leading-[26px] font-[100] pt-[20px] m-0">We have a team of design wizards that is adaptive to different design paradigms for IOS, Android and Web.</p>
    </div>
  </div>

    <!-- END OF CARDS -->
  <!-- <div class="pt-[60px] pb-[20px] lg:flex">
    <h2 class="text-light text-[70px] leading-[60px] font-primary uppercase flex-1 flex-col justify-center items-center m-0">
        we are design and development studio based in the manila
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
  </div> -->
</section>

<style>
  .section__about {
    background-image: url("/assets/path.svg");
  }
</style>