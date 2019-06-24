<template>
  <div>
    <div class="spread">
      <span>&copy; 2019 - Bart Fransen</span>
    </div>
    <div class="spread">
      <span><a href="https://www.linkedin.com/in/bartfransen/" target="_blank"><v-icon small>fab fa-linkedin</v-icon></a></span>
      <span><a href="https://twitter.com/TechieB" target="_blank"><v-icon small>fab fa-twitter</v-icon></a></span>
      <span><a href="https://github.com/bartfransen" target="_blank"><v-icon small>fab fa-github</v-icon></a></span>
    </div>
  </div>
</template>

<style>
  div.spread {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  div.spread span {
    display: table-cell;
    text-align: center;
  }

  div.spread span a{
    text-decoration: none;
  }
</style>