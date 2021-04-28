<template>
  <div class="post">
    <!-- <div class="img-box">
      <img
        :src="require(`@/assets/images/blog-img/${post.urlToImage}.jpg`)"
        class="post-img"
      />
    </div> -->
    <div class="txt-box">
      <div class="author-box">
        <div class="author-img-box">
          <!-- <img
            :src="require(`@/assets/images/author-img/${post.authorImg}.jpg`)"
            class="author-img"
          /> -->
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
      <!-- <p class="post-info">{{ post.dscription }}</p> -->
      <!-- <p class="post-info" v-for="content in post.contents" :key="content">
        {{ content.contentTxt }}
      </p> -->
      <!-- <router-link
        :to="{
          name: 'BlogContent',
          params: {
            id: post.title,
            description: post.description,
            contents: contentsObj,
            author: post.author,
            urlToImage: post.urlToImage,
          },
        }"
      >
        <p class="post-info">{{ post.description }}</p></router-link
      > -->
      <!-- <router-link
        :to="{
          name: 'BlogContent',
          params: {
            id: post.title,
            post: postsObj,
          },
        }"
      >
        <p class="post-info">{{ post.description }}</p></router-link
      > -->
      <!-- contents: post.contents, -->
    </div>
  </div>
  <!--item-->
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      // contentsObj: this.post.contents,
      contentsObj: JSON.stringify(this.post.contents),
      postsObj: JSON.stringify(this.post),
      // contentsObj: JSON.parse(this.post.contents),
    };
  },
  mounted() {
    // console.log(this.contents);
    // console.log(this.contentsObj);
    // console.log(JSON.stringify(this.contentsObj));
  },
};
</script>

<style scoped>
.post {
  display: flex;
  /* flex-direction: column-reverse; */
  align-items: flex-start;
  justify-content: space-between;
}
.post a {
  text-decoration: none;
  color: inherit;
}
/* .post > .img-box {
  flex-basis: 44%;
} */
.post > .txt-box {
  padding-top: 10px;
  /* flex-basis: 52%; */
}
/* .txt-box {
  max-width: 400px;
} */
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
  margin-bottom: 10px;
}
.author-img {
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.author {
  font-size: 16px;
  /* margin-top: 4px; */
  margin-bottom: 4px;
}
.authorProf {
  font-size: 14px;
  font-weight: 400;
  /* margin-top: 4px; */
  /* margin-bottom: 4px; */
}
.time-info-box {
  margin-top: 8px;
  margin-bottom: 8px;
}
/* @media only screen and (max-width: 567px) {
  .post {
    flex-direction: column;
  }
} */
</style>