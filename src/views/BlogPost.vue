<template>
  <div class="home">
    <h3 class="blog-top">Hey there!</h3>
    <h4 class="blog-intro">Welcome to my blog!!</h4>
    <p class="blog-txt">
      I created it using Vue Js. 
       Have fun reading!!!
    </p>
    <div class="post-box">
      <div class="post" v-for="post in postsArr" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div>
      <!-- <div class="post" v-for="post in posts" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogCard from "@/components/BlogCard.vue";
import articleInfo from "@/article-info";

export default {
  name: 'Home',
  components: {
    BlogCard,
  },
  data() {
    return {
      // posts: [],
      postsArr: articleInfo,
    };
  },
  mounted() {
    // fetch(
    //   "https://newsapi.org/v2/top-headlines?country=ng&apiKey=" + process.env.VUE_APP_BLOGKEY
    // )
    //   .then((res) => res.json())
    //   .then((data) => (this.posts = data.articles))
    //   .catch((err) => console.log(err.message));
    
    // console.log(this.posts);
    console.log(this.postsArr);
  },
}
</script>

<style scoped>
.home {
  margin: 10px auto;
}
.blog-txt,
.blog-top,
.blog-intro {
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 0px;
}
.post-box {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr;
  grid-gap: 25px;
  margin: 20px auto;
  max-width: 700px;
}
/* @media only screen and (max-width: 798px) {
  .post-box {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 567px) {
  .post-box {
    grid-template-columns: 1fr;
  }
} */
</style>
