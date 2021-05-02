<template>
  <div id="body">
    <div class="nav" id="nav">
      <div class="nav-container">
        <div class="nav-body">
          <router-link to="/" class="logo">VeeBlog</router-link>
          <input
            type="checkbox"
            name=""
            id="nav-checkbox"
            class="nav-checkbox"
            :checked="boxChecked"
          />
          <!-- <label for="nav-checkbox" class="nav-checkbox-label" @click="navToggle()">
            <span class="menu-line">&nbsp;</span>
          </label> -->
          <span for="nav-checkbox" class="nav-checkbox-label" @click="navToggle()">
            <span class="menu-line">&nbsp;</span>
          </span>
          <div class="navigation">
            <div class="nav-links">
              <router-link to="/" @click="navClose">Home</router-link>
              <router-link to="/blog" @click="navClose">Blog</router-link>
              <div class="nav-authour-box">
                <img
                  :src="require(`@/assets/images/author-img/blog-author.jpg`)"
                  class="nav-author-img"
                />
                <p class="nav-author">Marylene Ibuoteto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <footer>
      <div class="body-container">
        <p class="copyright">
          &#169; 2021 ||
          <a href="https://victoria-akpan.netlify.app/" class="portfolio"
            >By Veedahv</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>


<script>
// import CommentBoxVue from './components/CommentBox.vue';
export default {
  data() {
    return {
      // imgSrc: require('../assets/images/author-img/blank-profile-picture.png'),
      // commentAuthor: 'Anonymous',
      // commentTxts: ['fghjkghjk'],
      // newComment: '',
      // commentState: true,
      boxChecked: false,
    };
  },
  methods: {
    navToggle() {
      this.boxChecked = !this.boxChecked;
      console.log(this.boxChecked);
    },
    navClose() {
      this.boxChecked = false;
      console.log(this.boxChecked);
    }
  },
  // props: ["post"],
};
</script>



<style>
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
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--sec-color);
  margin: 5px auto;
}
.nav-container {
  max-width: 1000px;
  margin: 0px auto;
  padding: 10px 25px;
}
.logo {
  font-size: 25px;
  font-weight: 700;
}
.nav-checkbox {
  display: none;
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
  align-items: center;
  border-bottom: 4px solid var(--tertiary-color);
  transition: all 5s ease-in-out;
}
.nav-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.nav-checkbox-label {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 1px;
  cursor: pointer;
}

.menu-line {
  position: relative;
}
.menu-line,
.menu-line::after,
.menu-line::before {
  background: var(--sec-color);
  width: 25px;
  height: 2px;
  display: inline-block;
  transition: all 0.2s;
}
.menu-line::after,
.menu-line::before {
  content: "";
  position: absolute;
  left: 0;
}
.menu-line::before {
  top: -8px;
}
.menu-line::after {
  top: 8px;
}

.nav-authour-box,
.nav-links {
  display: flex;
  align-items: center;
  transition: all 5s ease-in-out;
}
.nav-links > * {
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
}
.nav-author-img {
  width: 50px;
  border-radius: 50%;
  margin-right: 5px;
}
/* .nav-links a.router-link-exact-active {
  color: var(--primay-color);
  border-bottom: 2px solid var(--sec-color);
} */
.nav-links a:hover {
  color: var(--tertiary-color);
}

.copyright {
  text-align: center;
}

@media only screen and (max-width: 567px) {
  .nav-checkbox-label {
    display: flex;
  }

  .navigation {
    display: none;
    width: 100%;
  /* transition: all 5s ease-in-out; */
    height: 0px;
  }
  .nav-checkbox:checked ~ .navigation {
    display: block;
    height: fit-content;
    /* background: turquoise; */
  }
  .nav-checkbox-label:hover .menu-line::before {
    top: -9px;
  }
  .nav-checkbox-label:hover .menu-line::after {
    top: 9px;
  }
  .nav-checkbox:checked ~ .nav-checkbox-label .menu-line {
    background: transparent;
  }
  .nav-checkbox:checked ~ .nav-checkbox-label .menu-line::before {
    top: 0;
    transform: rotate(135deg);
  }
  .nav-checkbox:checked ~ .nav-checkbox-label .menu-line::after {
    top: 0;
    transform: rotate(-135deg);
  }
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
  .nav-links > * {
    margin-left: 0px;
    padding: 15px 25px;
  }
}
</style>
