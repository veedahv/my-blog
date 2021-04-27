<template>
  <div class="post">
    <div class="img-box">
      <!-- <img :src="post.urlToImage" class="post-img" /> -->
      <!-- <img :src="require(`@/assets/images/blog-img/cupcake.jpg`)" class="post-img" /> -->
      <img
        :src="require(`@/assets/images/blog-img/${post.urlToImage}.jpg`)"
        class="post-img"
      />
      <!-- <img :src="require('@/assets/images/blog-img/' + post.urlToImage)" class="post-img" /> -->
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
          <h4 class="author">{{ post.authorProf }}</h4>
        </div>
      </div>
      <h2 class="post-title">{{ post.title }}</h2>
          <small class="author">{{ post.publishedAt }}</small> | 
          <small class="author">{{ post.readTime }}</small>
      <!-- <p class="post-info">{{ post.description }}</p> -->
      <!-- <p class="post-info" v-for="content in post.contents" :key="content">
        {{ content.contentTxt }}
      </p> -->
      <router-link
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
      >
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
.post > .img-box {
  flex-basis: 44%;
}
.post > .txt-box {
  padding-top: 15px;
  flex-basis: 52%;
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
/* .author-post-info {
  height: fit-content;
} */
.author-box {
  display: flex;
  align-items: center;
}
.author-img {
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.author {
  font-size: 10px;
  margin-top: 4px;
  margin-bottom: 4px;
}
@media only screen and (max-width: 567px) {
  .post {
    flex-direction: column;
  }
}
</style>