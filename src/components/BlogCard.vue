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
          <small class="author">{{ post.publishedAt }}</small>
        </div>
      </div>
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-info">{{ post.description }}</p>
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
        >More</router-link
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
    console.log(this.contentsObj);
    console.log(JSON.stringify(this.contentsObj));
  },
};
</script>

<style scoped>
.post {
  display: flex;
  /* flex-direction: column-reverse; */
  align-items: center;
  justify-content: space-between;
}
.post > .img-box {
  flex-basis: 44%;
}
.post > .txt-box {
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
.author-box {
  display: flex;
  align-content: center;
}
.author-img {
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.author {
  font-size: 10px;
  margin-bottom: 2px;
}
@media only screen and (max-width: 567px) {
  .post {
    flex-direction: column;
  }
}
</style>