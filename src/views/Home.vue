<template>
  <div class="home">
    <div class="post-box">
      <div class="post" v-for="post in posts" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: 'Home',
  components: {
    BlogCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&apiKey=0bae2999e97a4e048d292e345367ca99"
    )
      .then((res) => res.json())
      // .then((data) => console.log(data.articles))
      .then((data) => (this.posts = data.articles))
      .catch((err) => console.log(err.message));
    console.log(this.posts);
  },
}
</script>

<style scoped>
/* #app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
} */
.post-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: 1fr; */
  grid-gap: 25px;
}
/* @media only screen and (min-width: 567px) {
  .post-box {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (min-width: 798px) {
  .post-box {
    grid-template-columns: 1fr 1fr 1fr;
  }
} */
/* @media only screen and (max-width: 798px) and (min-width: 567px) {
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
