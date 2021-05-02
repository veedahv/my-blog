<template>
  <div class="post">
    <div class="img-box">
      <img
        :src="require(`@/assets/images/blog-img/${post.urlToImage}.jpg`)"
        class="post-img"
      />
    </div>
    <div class="txt-box">
      <div class="author-box">
        <div class="author-img-box">
          <img
            :src="require(`@/assets/images/author-img/${post.authorImg}.jpg`)"
            class="author-img"
          />
        </div>
        <div class="author-post-info">
          <h3 class="author">{{ post.author }}</h3>
          <h4 class="authorProf">{{ post.authorProf }}</h4>
        </div>
      </div>
      <h2 class="post-title">{{ post.title }}</h2>
      <div class="time-info-box">
        <small class="time-info">{{ post.publishedAt }}</small> &#8226;
        <small class="time-info">{{ post.readTime }}</small>
      </div>
      <router-link
        :to="{
          name: 'BlogContent',
          params: {
            id: post.title,
            post: postsObj,
          },
        }"
      >
        <p class="post-info">{{ post.description }}..</p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      postsObj: JSON.stringify(this.post),
    };
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.post a {
  text-decoration: none;
  color: inherit;
}
.post > .img-box {
  flex-basis: 44%;
}
.post > .txt-box {
  padding-top: 10px;
  flex-basis: 52%;
}
.post-title {
  font-size: 16px;
}
.post-info {
  font-size: 14px;
}
.post-img {
  width: 100%;
}
.author-box {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.author-img {
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.author {
  font-size: 12px;
  margin-bottom: 4px;
}
.authorProf {
  font-size: 11px;
  font-weight: 400;
}
.time-info-box {
  margin-top: 8px;
  margin-bottom: 8px;
}
@media only screen and (max-width: 567px) {
  .post {
    flex-direction: column;
  }
  .txt-box {
    margin-top: 20px;
    margin-bottom: 25px;
  }
}
</style>