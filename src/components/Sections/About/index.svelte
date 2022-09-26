<script>
	import Title from '../../Title.svelte';
  import { Info } from './config';
</script>
 
 <!-- ABOUT -->
<section class="section__about relative pt-0 pb-[60px] md:pt-[40px] md:pt-[60px]" id="about">

  <div class="pt-[110px] pb-[30px]">
    <Title title="our" subtitle="story" />
  </div>

  <!-- CARDS -->
  <div class="bg-dark w-full flex flex-col w-full m-auto lg:w-3/4 lg:flex-row">

    <div class="w-full flex flex-col flex-wrap md:flex-row lg:px-[60px] mx-0 my-auto">
      {#each Info as { title, description }}
        <div class="flex-1 p-[30px] bg-boxDark border border-solid border-boxDarkHover hover:bg-boxDarkHover md:min-w-[50%] lg:min-w-[33%%]">
          <h4 class="text-light font-primary text-[34px] inline border-b-4 border-solid border-primary uppercase">{title}</h4>
          <p class="text-light font-md leading-[26px] font-[100] pt-[20px] m-0">{description}</p>
        </div>
      {/each}
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