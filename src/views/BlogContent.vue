<template>
  <div class="post-container">
    <div class="post">
      <div class="img-box">
        <img
          :src="require(`@/assets/images/blog-img/${postObj.urlToImage}.jpg`)"
          class="post-img"
        />
      </div>
      <div class="txt-box">
        <h2 class="post-title">{{ id }}</h2>
        <div
          class="post-contents"
          v-for="content in postObj.contents"
          :key="content"
        >
          <h3 class="post-subtitle" v-if="content.subTitle">
            {{ content.subTitle }}
          </h3>
          <p class="post-info">
            {{ content.contentTxt }}
          </p>
        </div>
        <small class="post-author">{{ postObj.author }}</small>
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
  props: ["post", "id"],
  // props: ["id", "contents", "author", "urlToImage"],
  data() {
    return {
      // contentsObj: this.contents,
      // contentsObj: JSON.parse(this.contents),
      postObj: JSON.parse(this.post),
      // post: this.$route.params.post,
      // description: this.$route.params.description,
      // id: this.$route.params.id
    };
  },
  mounted() {
    console.log(this.postObj);
    // console.log(this.contents);
    // console.log(this.contentsObj);
  },
  // props: ["id", "description", "author", "urlToImage"],
};
</script>

<style scoped>
.post-container {
  max-width: 1000px;
  padding: 10px 25px;
  margin: 10px auto;
}
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 700px; */
  width: 90%;
  margin: 10px auto;
  /* justify-content: space-between; */
}
.txt-box {
  /* display: flex;
  flex-direction: column-reverse;
  align-items: center; */
  max-width: 700px;
  margin: 10px auto;
  /* justify-content: space-between; */
}
/* .txt-box {
  max-width: 400px;
} */
.post-title {
  font-size: 26px;
  margin: 20px 0;
}
.post-subtitle {
  font-size: 20px;
  margin: 15px 0;
}
.post-info {
  font-size: 16px;
  margin-bottom: 15px;
}
.img-box,
.post-img {
  width: 100%;
}
@media only screen and (max-width: 567px) {
  .post {
    width: 100%;
  }
}
</style>