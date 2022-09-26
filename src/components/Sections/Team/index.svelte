<script>
	import Title from '../../Title.svelte';
  import { Info } from './config'
</script>
 
<section class="relative pb-[80px] md:pt-[80px]" id="team">
  <div class="flex justify-center flex-col">
    <div class="pt-[120px] pb-[30px]">
      <Title title="our" subtitle="team" />
    </div>

    <div class="w-full flex flex-col flex-wrap md:flex-row lg:px-[120px] mx-0 my-auto">
      {#each Info as { name, title, pic }}
        <div class="p-[30px] flex-1 text-center hover:bg-boxDarkHover md:min-w-[50%] lg:min-w-[25%]">
          <img class="max-h-[150px] m-auto rounded" src={pic} alt={name} />
          <h4 class="text-light font-primary text-[34px] inline border-b-4 border-solid border-primary uppercase">{name}</h4>
          <p class="text-light text-[16px] leading-[26px] font-[100] pt-[20px] m-0">{title}</p>
        </div>
      {/each}
    </div>
  </div>
</section>