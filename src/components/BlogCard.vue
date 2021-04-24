<template>
  <div class="post">
    <div class="txt-box">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-info">{{ post.description }}</p>
    <router-link :to="{ name: 'BlogContent', params: {id: post.title, description: post.description, content: post.content, author: post.author, urlToImage: post.urlToImage}}">More</router-link>
    </div>
    <div class="img-box">
      <img :src="post.urlToImage" class="post-img" />
      <!-- <img :src="post.urlToImage" width="153" height="130" /> -->
    </div>
  </div>
  <!--item-->
</template>

<script>
export default {
  // data() {
  //   return {
  //   };
  // },
  props: ["post"],
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  /* justify-content: space-between; */
}
/* .txt-box {
  max-width: 400px;
} */
.post-title {
  font-size: 16px;
}
.post-info {
  font-size: 14px;
}
.post-img {
  width: 100%;
}
</style>