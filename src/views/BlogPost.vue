<template>
  <div class="blog-post">
    <h3 class="blog-top">Blog posts</h3>
    <div class="post-box">
      <div class="post" v-for="post in visibleBlogArr" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div>
    </div>
    <pagination :postsArr="postsArr" :currentPage="currentPage" :perPage="perPage" v-on:page:update="updatePage"></pagination>
  </div>
</template>

<script>
// @ is an alias to /src
import Pagination from '@/components/Pagination'
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
      postsArr: articleInfo,
      visibleBlogArr: [],
      currentPage: 0,
      perPage: 4,
    };
  },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.visibleBlog();
    },
    visibleBlog() {
      this.visibleBlogArr = this.postsArr.slice((this.currentPage * this.perPage), (this.currentPage * this.perPage + this.perPage));
    },
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
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 5px;
  border-left: 4px solid var(--spare-color);
}
.post-box {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: 20px auto;
}
</style>
