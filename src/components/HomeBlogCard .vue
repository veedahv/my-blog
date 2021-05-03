<template>
  <div
    class="post"
    :style="{
      backgroundImage:
        'url(' +
        require(`@/assets/images/blog-img/${post.urlToImage}.jpg`) +
        ')',
    }"
  >
    <div class="txt-box">
      <small class="time-info">{{ post.readTime }} read time </small>
      <router-link
        :to="{
          name: 'BlogContent',
          params: {
            title: post.title,
          },
        }"
      >
        <h2 class="post-title">{{ post.title }}</h2>
      </router-link>
      <div class="time-info-box">
        <small class="time-info">{{ post.publishedAt }}</small>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  // data() {
  //   return {
  //     contentsObj: JSON.stringify(this.post.contents),
  //     postsObj: JSON.stringify(this.post),
  //   };
  // },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: var(--sec-color) center center no-repeat;
  background-blend-mode: soft-light;
  color: var(--light-color);
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
}
.post a {
  text-decoration: none;
  color: inherit;
}
.post > .txt-box {
  padding-top: 10px;
}
.post-title {
  font-size: 28px;
  font-weight: 700;
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
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: flex-end;
}
.author-img {
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.2);
}
.author {
  font-size: 16px;
  margin-bottom: 4px;
}
.authorProf {
  font-size: 14px;
  font-weight: 400;
}
.time-info {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
</style>