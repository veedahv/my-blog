<template>
  <div class="post-container">
    <div class="post">
      <div class="txt-box">
        <h2 class="post-title">{{ id }}</h2>
        <!-- <p class="post-info">{{ description }}</p> -->
        <!-- <p class="post-info">
          {{ contentsObj }}
        </p> -->
        <!-- <p class="post-info" v-for="content in contentsObj" :key="content">
          {{ content }}
        </p> -->
        <div class="post-contents" v-for="content in contentsObj" :key="content">
          <h3 class="post-title" v-if="content.subTitle">{{ content.subTitle }}</h3>
        <p class="post-info">
          {{ content.contentTxt }}
        </p>
        </div>
        <small class="post-author">{{ author }}</small>
      </div>
      <div class="img-box">
        <img
          :src="require(`@/assets/images/blog-img/${urlToImage}.jpg`)"
          class="post-img"
        />
        <!-- <img :src="post.urlToImage" width="153" height="130" /> -->
      </div>
    </div>
    <CommentBox></CommentBox>
  </div>
  <!--item-->
</template>

<script>
import CommentBox from "../components/CommentBox";
export default {
  components: { CommentBox },
  // props: {
  //   id: String,
  //   description: String,
  //   contents: Object,
  //   author: String,
  //   urlToImage: String,
  // },
  // props: ["id", "description", "contents", "author", "urlToImage"],
  props: ["id", "contents", "author", "urlToImage"],
  data() {
    return {
      // contentsObj: this.contents,
      contentsObj: JSON.parse(this.contents),
      // post: this.$route.params.post,
      // description: this.$route.params.description,
      // id: this.$route.params.id
    };
  },
  mounted() {
    // console.log(this.contents);
    // console.log(this.contentsObj);
  },
  // props: ["id", "description", "author", "urlToImage"],
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