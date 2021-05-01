<template>
  <div class="blog-post">
    <h3 class="blog-top">Blog posts</h3>
    <!-- 3ceee 3 cececceedeeed -->
    <div class="post-box">
      <!-- <div class="post" v-for="post in postsArr" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div> -->
      <div class="post" v-for="post in visibleBlogArr" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div>
    </div>
    <pagination :postsArr="postsArr" :currentPage="currentPage" :perPage="perPage" v-on:page:update="updatePage"></pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
// @ is an alias to /src
import BlogCard from "@/components/BlogCard.vue";
import articleInfo from "@/article-info";

export default {
  name: 'BlogPost',
  components: {
    Pagination,
    BlogCard,
  },
  data() {
    return {
      // posts: [],
      postsArr: articleInfo,
      visibleBlogArr: [],
      currentPage: 0,
      perPage: 4,
      // totalPage: this.postsArr.length,
    };
  },
  // computed: {
  //   pages(){
  //     return Math.ceil(this.totalBlogs / this.perPage)
  //   }    
  // },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.visibleBlog();
    },
    visibleBlog() {
      this.visibleBlogArr = this.postsArr.slice((this.currentPage * this.perPage), (this.currentPage * this.perPage + this.perPage));
    },
  },
  mounted() {
    // fetch(
    //   "https://newsapi.org/v2/top-headlines?country=ng&apiKey=" + process.env.VUE_APP_BLOGKEY
    // )
    //   .then((res) => res.json())
    //   .then((data) => (this.posts = data.articles))
    //   .catch((err) => console.log(err.message));
    
    console.log(this.totalPage);
    console.log(this.postsArr);
    // this.visibleBlog();
  },
  beforeMount() {
    this.visibleBlog();    
  },
}
</script>

<style scoped>
.blog-post {
  margin: 5px auto;
  max-width: 760px;
  padding: 10px 25px;
}
.blog-top {
  /* text-align: center; */
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 5px;
  border-left: 2px solid var(--spare-color);
}
/* .blog-txt,
.blog-top,
.blog-intro {
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 0px;
} */
.post-box {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr;
  grid-gap: 25px;
  margin: 20px auto;
  /* max-width: 700px; */
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
