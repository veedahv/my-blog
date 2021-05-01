<template>
  <div class="navigation">
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Blog</router-link>
          <div class="nav-authour-box">
          <img
            :src="require(`@/assets/images/author-img/blog-author.jpg`)"
            class="nav-author-img"
          />
          <p class="nav-author">Marylene Ibuoteto</p>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  // props: ["post"],
  // data() {
  //   return {
  //     // contentsObj: this.post.contents,
  //     contentsObj: JSON.stringify(this.post.contents),
  //     postsObj: JSON.stringify(this.post),
  //     // contentsObj: JSON.parse(this.post.contents),
  //   };
  // },
  mounted() {
    // console.log(this.contents);
    // console.log(this.contentsObj);
    // console.log(JSON.stringify(this.contentsObj));
  },
};
</script>

<style scoped>
.nav-authour-box,
.nav-links {
  /* padding: 10px 5px; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.nav-links > * {
  margin-left: 20px;
  font-size: 20px;
  /* font-weight: 500; */
  /* font-weight: bolder; */
  font-weight: bold;
}
.nav-author-img {
  width: 50px;
  border-radius: 50%;
  margin-right: 5px;
}
/* @media only screen and (max-width: 567px) {
  .post {
    flex-direction: column;
  }
} */
</style>