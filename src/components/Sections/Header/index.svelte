<script >
    let urlHash = ""
    let isActive = false

    const handleMenu = () => {
      isActive = !isActive
    }

    const selectView =(view) => {
      urlHash = view
      isActive = false
    }

</script>

<div>
  <header class="bg-light fixed top-0 z-20 w-screen">
    <div class="m-0 px-3 py-4 md:px-6 flex justify-between items-center">
      <a
        href="/"
        on:click={() => urlHash = "main"}
      >
        <img class="max-h-[35px] m-0" src="/assets/devxpress.png" alt="DevXpress" />
      </a>
      <div class="flex m-0 hidden md:flex ">
        <div class="flex m-0" on:click={() => urlHash = "#about"}>
          <a
            class={urlHash === "#about"
              ? "uppercase font-[700] text-primary p-3 decoration-0"
              : "uppercase font-[700] text-dark p-3 decoration-0"}
            href="#about">
              About
          </a>
        </div>
        <div class="flex m-0" on:click={() => urlHash = "#services"}>
          <a
            class={urlHash === "#services"
              ? "uppercase font-[700] text-primary p-3 decoration-0"
              : "uppercase font-[700] text-dark p-3 decoration-0"}
            href="#services">
            Services
          </a>
        </div>
        <div class="flex m-0" on:click={() => urlHash = "#contact"}>
          <a
            class={urlHash === "#contact"
              ? "uppercase font-[700] text-primary p-3 decoration-0"
              : "uppercase font-[700] text-dark p-3 decoration-0"}
            href="#contact">
            Contact
          </a>
        </div>
      </div>
      
      <div on:click={handleMenu}  class="block md:hidden">
        <img class="max-h-[35px] m-0" src="/assets/menu.svg" alt="Menu" />
      </div>
      {#if isActive}
        <div class="block md:hidden absolute top-0 bottom-0 left-0 right-0 h-screen w-screen bg-light opacity-[.95] flex justify-center items-center">
          <div on:click={handleMenu} class="absolute top-5 right-5 flex items-center border border-solid border-dark rounded px-3">
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.07031 0L7.57031 1.5L3 6.07031L7.57031 10.6406L6.07031 12.1406L0 6.07031L6.07031 0Z" fill="black"/>
            </svg>              
            <span class="pl-2 font-secondary text-[18px] font-bold">Back</span>
          </div>
          <div class="flex flex-col">
            <div class="flex m-0" on:click={() => selectView("#about")}>
              <a
                class={"uppercase font-[700] text-[30px] text-dark p-3 decoration-0"}
                href="#about">
                  About
              </a>
            </div>
            <div class="flex m-0" on:click={() => selectView("#services")}>
              <a
                class={"uppercase font-[700] text-[30px] text-dark p-3 decoration-0"}
                href="#services">
                Services
              </a>
            </div>
            <div class="flex m-0" on:click={() => selectView("#contact")}>
              <a
                class={"uppercase font-[700] text-[30px] text-dark p-3 decoration-0"}
                href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </header>
</div>