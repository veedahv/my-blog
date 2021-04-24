<template>
  <div class="home">
    <h3 class="blog-top">Hey there!</h3>
    <h4 class="blog-intro">Welcome to my blog!!</h4>
    <p class="blog-txt">
      I created it using Vue Js. 
       Have fun reading!!!
    </p>
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
    fetch("https://newscatcher.p.rapidapi.com/v1/sources?topic=news&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "784160c21emsh489f7d8d6d4c8bdp1f4e3djsn8a68a1315e74",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
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
.home {
  /* max-width: 1000px; */
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
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: 1fr; */
  grid-gap: 25px;
  margin-top: 20px;
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
