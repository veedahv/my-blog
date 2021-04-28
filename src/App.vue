<template>
  <div id="body">
    <div class="nav" id="nav">
      <div class="nav-container">
      <div class="nav-body">
        <router-link to="/">VeeBlog</router-link>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Blog</router-link>
        </div>
      </div>
    </div>
    </div>
    <router-view />
    <footer>
      <div class="body-container">
        <p class="copyright">
          &#169; 2020 ||
          <a href="https://victoria-akpan.netlify.app/" class="portfolio"
            >By Veedahv</a
          >
        </p>
      </div>
    </footer>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
</template>

<style>
:root {
  --primay-color: #f2d43d;
  --sec-color: #a68524;
  --tertiary-color: #f2ca52;
  --light-color: #f2f2f2;
  --spare-color: #8c8c8c;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* font-family: Avnir, Helvetia, Arial, sans-serif; */
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* max-width: 1000px; */
  margin: 5px auto;
  /* padding: 10px 30px; */
}
.nav-container {
  max-width: 1000px;
  margin: 0px auto;
  padding: 10px 25px;
}
.body-container {
  max-width: 1000px;
  margin: 10px auto;
  padding: 10px 25px;
}

a {
  text-decoration: none;
  color: inherit;
}

#nav {
  /* padding: 10px 5px; */
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
}
.nav-body {
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

.nav-links > * {
  margin-left: 10px;
}

#nav .portfolio {
  font-size: 18px;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
