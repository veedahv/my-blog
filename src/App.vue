<template>
  <div id="nav">
    <router-link to="/">My Blog</router-link> 
    <router-link to="/blog">Blog</router-link> 
    <a href="https://victoria-akpan.netlify.app/" class="portfolio">By Veedahv</a>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 1000px;
  margin: 5px auto;
  padding: 10px 30px;
}

#nav {
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 25px;
}

#nav .portfolio {
  font-size: 18px;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
