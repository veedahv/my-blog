<template>
  <div id="body">
    <div class="nav" id="nav">
      <div class="nav-container">
        <div class="nav-body">
          <router-link to="/" class="logo">VeeBlog</router-link>
          <!-- <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Blog</router-link>
        </div> -->
          <navigation></navigation>
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
  </div>
</template>


<script>
import Navigation from "@/components/Navigation.vue";

export default {
  // name: "Home",
  components: {
    Navigation,
  },
  // data() {
  //   return {
  //     HomeTipsArr: tipsInfo,
  //     HomeCardsArr: articleInfo,
  //     HomeBlogCards: [],
  //   };
  // },
  // mounted() {
  //   (this.HomeBlogCards = this.HomeCardsArr.slice(0, 3)),
  //     // (this.HomeBlogCards = this.HomeCardsArr.slice(0, 4)),
  //     console.log(this.HomeBlogCards);
  // },
  // computed: {},
  // data() {
  //   return {
  //     // posts: [],
  //     postsArr: articleInfo,
  //   };
  // },
};
</script>

<style>
/* :root {
  --primay-color: #f2d43d;
  --sec-color: #a68524;
  --tertiary-color: #f2ca52;
  --light-color: #f2f2f2;
  --spare-color: #8c8c8c;
  --white-color: #ffffff;
} */
:root {
  --primay-color: #ffe849;
  --sec-color: #4d4d3d;
  --sec-a-color: #4d4d3d79;
  --tertiary-color: #8b9386;
  --light-color: #f0f0eb;
  --light-a-color: #f0f0eb63;
  --spare-color: #a9b1a1;
  --white-color: #ffffff;
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
  /* color: #2c3e50; */
  color: var(--sec-color);
  /* max-width: 1000px; */
  margin: 5px auto;
  /* padding: 10px 30px; */
}
.nav-container {
  max-width: 1000px;
  margin: 0px auto;
  padding: 7px 25px;
}
.logo {
  font-size: 25px;
  font-weight: 700;
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
  border-bottom: 4px solid var(--tertiary-color);
}
.nav-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
