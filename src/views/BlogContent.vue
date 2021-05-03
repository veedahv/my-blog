<template>
  <div class="post-container">
    <div v-if="loading" class="loading">
      <div class="loadingio-spinner-spinner-jc478d2mnnj">
        <div class="ldio-9vepvn16t37">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="post" class="post">
      <div class="img-box">
        <img
          :src="require(`@/assets/images/blog-img/${post.urlToImage}.jpg`)"
          class="post-img"
        />
      </div>
      <div class="txt-box">
        <div class="top-post">
          <div class="top-post-left">
            <small class="top-post-author">By {{ post.author }} </small>
            <small class="top-post-published">
              Published at {{ post.publishedAt }}
            </small>
          </div>
          <div class="top-post-right">
            <i
              class="fa fa-ellipsis-v"
              :class="{ dropBox: dropBox }"
              @click="toggleBox()"
              aria-hidden="true"
            ></i>
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
        <h2 class="post-title">{{ title }}</h2>
        <div
          class="post-contents"
          v-for="content in post.contents"
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
    <CommentBox v-if="post" :comments="post.comments"></CommentBox>
  </div>
</template>

<script>
import CommentBox from "../components/CommentBox";
import { getPost } from "@/scripts/getPost.js";
export default {
  components: { CommentBox },
  props: ["title"],
  data() {
    return {
      dropBox: false,
      loading: false,
      post: null,
      error: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      const fetchedId = this.$route.params.title;
      // replace `getPost` with your data fetching util / API wrapper
      getPost(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.title !== fetchedId) return;
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
    },
    toggleBox() {
      this.dropBox = !this.dropBox;
    },
  },
};
</script>

<style scoped>
.post-container {
  max-width: 1000px;
  padding: 10px 25px;
  margin: 10px auto;
}
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes ldio-9vepvn16t37 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.ldio-9vepvn16t37 div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-9vepvn16t37 linear 1s infinite;
  background: #4d4d3d;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}
.ldio-9vepvn16t37 div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #4d4d3d;
}
.ldio-9vepvn16t37 div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #4d4d3d;
}
.loadingio-spinner-spinner-jc478d2mnnj {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-9vepvn16t37 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-9vepvn16t37 div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
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
  max-width: 700px;
  margin: 10px auto;
}
.fa-ellipsis-v {
  display: none;
}
.top-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin-top: 10px;
  border-top: 1px solid var(--tertiary-color);
  border-bottom: 1px solid var(--tertiary-color);
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
.social-icon {
  font-size: 20px;
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
    padding: 5px 15px;
    top: 0;
    right: 0;
    width: fit-content;
  }
  .dropBox ~ .social-box .social-ul {
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