<template>
  <div class="post">
    <div class="txt-box">
      <h2 class="post-title">{{ id }}</h2>
      <p class="post-info">{{ description }}</p>
      <p class="post-info">{{ content }}</p>
      <small class="post-author">{{ author }}</small>
    </div>
    <div class="img-box">
      <img :src="urlToImage" class="post-img" />
      <!-- <img :src="post.urlToImage" width="153" height="130" /> -->
    </div>
  </div>
  <!--item-->
</template>

<script>
export default {
  // data() {
  //   return {
  //     post: this.$route.params.post,
  //     description: this.$route.params.description,
  //     id: this.$route.params.id
  //   };
  // },
  props: ['id', 'description', 'content', 'author', 'urlToImage'],
  // props: ['post', 'id'],
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-width: 700px;
  margin: 10px auto;
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