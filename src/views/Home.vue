<template>
  <div class="home">
    <div class="landing">
      <div class="home-container">
        <div class="landing-container">
          <div class="landing-box">
            <div class="quote-box">
              <p class="home-quote">
                <i class="fas fa-quote-left"></i>Reading changes your life. Reading unlocks worlds unknown or forgotten, taking travelers around the world and through time. Reading helps you escape the confines of school and pursue your own education.<i class="fas fa-quote-right"></i> – Donalyn Miller
              </p>
            </div>
            <div class="quote-img-box">
              <img :src="require('@/assets/images/quote-img.jpg')" alt="" class="quote-img">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h2 class="home-intro">SOON</h2> -->
    <!-- <h3 class="blog-top">Hey there!</h3>
    <h4 class="blog-intro">Welcome to my blog!!</h4>
    <p class="blog-txt">
      I created it using Vue Js. 
       Have fun reading!!!
    </p>
    <div class="post-box">
      <iv class="post" v-for="post in postsArr" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div> -->
    <!-- <div class="post" v-for="post in posts" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import BlogCard from "@/components/BlogCard.vue";
// import articleInfo from "@/article-info";

export default {
  name: "Home",
  // components: {
  //   BlogCard,
  // },
  // data() {
  //   return {
  //     // posts: [],
  //     postsArr: articleInfo,
  //   };
  // },
  // mounted() {
  //   // fetch(
  //   //   "https://newsapi.org/v2/top-headlines?country=ng&apiKey=" + process.env.VUE_APP_BLOGKEY
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((data) => (this.posts = data.articles))
  //   //   .catch((err) => console.log(err.message));

  //   // console.log(this.posts);
  //   console.log(this.postsArr);
  // },
};
</script>

<style scoped>
.home {
  margin: 10px auto;
}
/* .blog-txt,
.blog-top,
.blog-intro {
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 0px;
} */
.landing-container {
  /* padding-top: 40px;
  padding-bottom: 100px; */
  background: var(--primay-color);
}
.landing-container {
  padding-top: 40px;
  padding-bottom: 200px;
}
.landing-box {
  margin: 20px;
  max-width: 700px;
  position: relative;
}
.quote-box {
  /* max-width: 350px; */
  width: 55%;
  font-size: 20px;
  line-height: 28px;
  padding: 35px 40px;
  background: var(--spare-color);
  color: var(--light-color);
  /* box-sizing: border-box; */
  box-shadow: 7px 7px 10px rgba(0, 0, 0, .2);
  /* box-shadow: 0 0 2px rgba(0, 0, 0, .2); */
  /* position: relative; */
  position: absolute;
  top: 75%;
  left: 45%;
  z-index: 1;
}
.home-quote {
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}
.quote-img-box {
  width: 55%;
  position: relative;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, .2);
  display: flex;
  /* position: absolute;
  top: 70%;
  left: 45%; */
  /* right: -20px; */
}
.quote-img {
  width: 100%;
}
/* @media only screen and (max-width: 798px) {
  .post-box {
    grid-template-columns: 1fr 1fr;
  }
} */
@media only screen and (max-width: 567px) {
  .quote-box {
  width: 100%;
  padding: 35px 40px;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, .2);
  position: relative;
  top: 0;
  left: 0;
}
.home-quote {
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}
.quote-img-box {
  width: 100%;
  position: relative;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, .2);
}
}
</style>
