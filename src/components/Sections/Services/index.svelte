<script>
	import Title from '../../Title.svelte';
  import { Info } from './config'
</script>
 
<section class="relative pb-[80px] md:pt-[80px]" id="services">
  <div class="section__services__wrapper flex justify-center flex-col">
    <div class="pt-[120px] pb-[30px]">
      <Title title="main" subtitle="services" />
    </div>

    <div class="w-full flex flex-col flex-wrap md:flex-row lg:px-[60px] mx-0 my-auto">
      {#each Info as { title, description }}
        <div class="p-[30px] flex-1 text-center hover:bg-boxDarkHover md:min-w-[50%] lg:min-w-[33%]">
          <h4 class="text-light font-primary text-[34px] inline border-b-4 border-solid border-primary uppercase">{title}</h4>
          <p class="text-light text-[16px] leading-[26px] font-[100] pt-[20px] m-0">{description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>