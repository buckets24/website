<script >
    let urlHash = ""
</script>

<div>
    <header class="main_nav">
    <div class="main_nav__container">
      <a
        href="/"
        on:click={() => urlHash = ""}
      >
        <img class="main_nav__logo" src="/assets/devxpress.png" alt="DevXpress" />
      </a>
      <div class="main_nav__nav_list">
          <div>{urlHash}</div>
        <div class="main_nav__nav_list__item" on:click={() => urlHash = "#about"}>
          <a onClick={() => alert('Hello, Astro!')} class={urlHash === "#about" ? "main_nav__nav_item__active" : "main_nav__nav_item"} href="#about">About</a>
        </div>
        <div class="main_nav__nav_list__item" on:click={() => urlHash = "#services"}>
          <a class={urlHash === "#services" ? "main_nav__nav_item__active" : "main_nav__nav_item"} href="#services">Services</a>
        </div>
        <div class="main_nav__nav_list__item" on:click={() => urlHash = "#contact"}>
          <a class={urlHash === "#contact" ? "main_nav__nav_item__active" : "main_nav__nav_item"} href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </header>
</div>

<style>
.main_nav {
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  z-index: 2;
  width: 100%;
}


.main_nav__container {
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_nav__logo {
  margin: 0;
  max-height: 35px;
}

.main_nav__nav_item {
  text-transform: uppercase;
  font-weight: 700;
  color: #000000;
  padding: 10px;
  /* display: none; */
  text-decoration: none;
}

.main_nav__nav_item__active {
  text-transform: uppercase;
  font-weight: 700;
  color: #D64343;
  padding: 10px;
  /* display: none; */
  text-decoration: none;
}

.main_nav__nav_list {
  display: flex;
  list-style-type: none;
  margin: 0;
}

.main_nav__nav_list__item {
  display: flex;
  list-style-type: none;
  margin: 0;
}

@media only screen and (min-width: 768px) {
  .main_nav__container  {
    justify-content: space-between;
  }

  .main_nav__nav_item {
    display: flex;
  }
}

@media only screen and (min-width: 1024px) {
  .main_nav__container  {
    justify-content: space-between;
  }

  .main_nav__nav_item {
    display: flex;
  }
}
</style>