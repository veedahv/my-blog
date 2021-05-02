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
        <div class="top-post">
          <div class="top-post-left">
            <small class="top-post-author">By {{ postObj.author }} </small>
            <small class="top-post-published">
              Published at {{ postObj.publishedAt }}
            </small>
          </div>
          <div class="top-post-right">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div class="social-box">
              <ul class="social-ul">
                <li class="social-li">
                  <a href="mailto:" class="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-li">
                  <a href="mailto:" class="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-li">
                  <a href="mailto:" class="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-li">
                  <a href="mailto:" class="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
  props: ["post", "id"],
  data() {
    return {
      postObj: JSON.parse(this.post),
    };
  },
  mounted() {
    console.log(this.postObj);
  },
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
.fa-ellipsis-v {
  display: none;
}
.top-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-post-published {
  padding-left: 15px;
}
.social-box {
  position: relative;
}
.social-ul {
  list-style: none;
  display: flex;
}
.social-li {
  margin-left: 15px;
}
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
  .fa-ellipsis-v {
    display: inline-block;
  }
  .social-ul {
    display: none;
    position: absolute;
    flex-direction: column;
    padding: 10px;
    top: 0;
    right: 0;
  }
}
</style>