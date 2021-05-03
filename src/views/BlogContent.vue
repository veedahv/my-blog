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
                  <a href="mailto:hello@blog.me" class="">
                    <span class="social-icon">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span class="social-name">hello@blog.me</span>
                  </a>
                </li>
                <li class="social-li">
                  <a href="tel:+01128754424" class="">
                    <span class="social-icon">
                      <i class="fa fa-phone-square" aria-hidden="true"></i>
                    </span>
                    <span class="social-name">+01128754424</span>
                  </a>
                </li>
                <li class="social-li">
                  <a href="" class="">
                    <span class="social-icon">
                      <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </span>
                    <span class="social-name">@MaryleneIbuoteto</span>
                  </a>
                </li>
                <li class="social-li">
                  <a href="" class="">
                    <span class="social-icon">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </span>
                    <span class="social-name">Marylene Ibuoteto</span>
                  </a>
                </li>
                <li class="social-li">
                  <a href="" class="">
                    <span class="social-icon">
                      <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </span>
                    <span class="social-name">Marylene Ibuoteto</span>
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
.social-name {
  display: none;
  padding-left: 10px;
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
  .top-post-published {
    padding-left: 5px;
  }
  .fa-ellipsis-v {
    display: inline-block;
  }
  .fa-ellipsis-v:hover {
    cursor: pointer;
  }
  .social-ul {
    display: none;
    position: absolute;
    flex-direction: column;
    padding: 10px;
    top: 0;
    right: 0;
    width: fit-content;
  }
  .fa-ellipsis-v:hover ~ .social-box .social-ul {
    display: block;
    background: var(--white-color);
    z-index: 1;
  }
  .social-li {
    margin: 15px 0px;
  }
  .social-li a {
    display: flex;
  }
  .social-name {
    display: inline-block;
  }
}
</style>