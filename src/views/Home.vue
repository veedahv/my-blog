<template>
  <div class="home">
    <div class="landing">
      <div class="home-container">
        <div class="landing-container">
          <div class="landing-box">
            <div class="quote-box">
              <p class="home-quote">
                <i class="fa fa-quote-left"></i> Reading changes your life.
                Reading unlocks worlds unknown or forgotten, taking travelers
                around the world and through time. Reading helps you escape the
                confines of school and pursue your own education.
                <i class="fa fa-quote-right"></i>
              </p>
              <div class="home-quote-author">
                <em class=""> - Donalyn Miller</em>
              </div>
            </div>
            <div class="quote-img-box">
              <img
                :src="require('@/assets/images/quote-img.jpg')"
                alt=""
                class="quote-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-post-section">
      <div class="home-container">
        <h3 class="home-sub-title">Here are a few articles that might interest you</h3>
        <div class="home-post-box">
          <div class="post-box" v-for="post in HomeBlogCards" :key="post.title">
            <home-blog-card :post="post"></home-blog-card>
          </div>
        </div>
        <div class="blog-link-box">
          <router-link to="/blog">
            <div class="blog-link">View All</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="tips-post-section">
      <div class="home-container">
        <h3 class="home-sub-title">Here are a few articles that might interest you</h3>
        <div class="home-tip-box">
          <div class="tip-box" v-for="tip in HomeTipsArr" :key="tip.title">
            <!-- <home-blog-card :post="post"></home-blog-card> -->
            <home-tip-card :tip="tip"></home-tip-card>
          </div>
        </div>
      </div>
    </div>
    <!-- <h2 class="hom-intro">SOON</h2> -->
    <!-- <h3 class="blog-top">Hey there!</h3>
    <h4 class="blog-intro">Welcome to my blog!!</h4>
    <p class="blog-txt">
      I created it using Vue Js. 
       Have fun reading!!!
    </p>
    <div class="post-box">
      <iv class="post" v-for="post in postsArr" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div> -->
    <!-- <div class="post" v-for="post in posts" :key="post.title">
        <blog-card :post="post"></blog-card>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import HomeTipCard from '@/components/HomeTipCard'
// @ is an alias to /src
// import BlogCard from "@/components/BlogCard.vue";
// import BlogCard from "@/components/BlogCard.vue";
// import @HomeBlogCardVue from ''
import tipsInfo from "@/tips-info";
import articleInfo from "@/article-info";
import HomeBlogCard from "@/components/HomeBlogCard .vue";

export default {
  name: "Home",
  components: {
    HomeTipCard,
    HomeBlogCard,
  },
  data() {
    return {
      HomeTipsArr: tipsInfo,
      HomeCardsArr: articleInfo,
      HomeBlogCards: [],
    };
  },
  mounted() {
    (this.HomeBlogCards = this.HomeCardsArr.slice(0, 3)),
      // (this.HomeBlogCards = this.HomeCardsArr.slice(0, 4)),
      console.log(this.HomeBlogCards);
  },
  // computed: {},
  // data() {
  //   return {
  //     // posts: [],
  //     postsArr: articleInfo,
  //   };
  // },
  // mounted() {
  //   // fetch(
  //   //   "https://newsapi.org/v2/top-headlines?country=ng&apiKey=" + process.env.VUE_APP_BLOGKEY
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((data) => (this.posts = data.articles))
  //   //   .catch((err) => console.log(err.message));

  //   // console.log(this.posts);
  //   console.log(this.postsArr);
  // },
};
</script>

<style scoped>
.home {
  margin: 10px auto;
}
.home-container {
  max-width: 1000px;
  margin: 10px auto;
  padding: 10px 25px;
}
.landing {
  /* padding-top: 40px;
  padding-bottom: 100px; */
  background: var(--primay-color);
}
.landing-container {
  padding-top: 40px;
  padding-bottom: 200px;
}
.landing-box {
  margin: 20px;
  max-width: 700px;
  position: relative;
}
.quote-box {
  /* max-width: 350px; */
  width: 55%;
  font-size: 20px;
  line-height: 28px;
  padding: 35px 40px;
  background: var(--spare-color);
  color: var(--white-color);
  /* box-sizing: border-box; */
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 0 2px rgba(0, 0, 0, .2); */
  /* position: relative; */
  position: absolute;
  top: 75%;
  left: 45%;
  z-index: 1;
}
.home-quote {
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}
.home-quote-author {
  font-weight: lighter;
  font-size: 16px;
  text-align: right;
  width: 100%;
}
.quote-img-box {
  width: 55%;
  position: relative;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  /* position: absolute;
  top: 70%;
  left: 45%; */
  /* right: -20px; */
}
.quote-img {
  width: 100%;
}

.home-sub-title{
  /* margin-top: 20px; */
  font-size: 25px;
  text-transform: capitalize;
}

.home-post-box {
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
}

.blog-link-box {
  width: 150px;
  text-align: center;
  margin: 25px auto;
  /* background: var(--primay-color);
  color: var(--light-color);
  padding: 10px;
  border-radius: 5px; */
}
.blog-link {
  /* width: 150px; */
  /* text-align: center; */
  /* margin: 25px auto; */
  background: var(--primay-color);
  color: var(--sec-color);
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
}
.blog-post-section {
  padding-top: 40px;
  padding-bottom: 25px;
}
.tips-post-section {
  padding-top: 40px;
  padding-bottom: 40px;
  background: var(--sec-color);
  color: var(--light-color);
}
.home-tip-box {
  margin-top: 20px;
  display: grid;
  gap: 20px;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
}
@media only screen and (max-width: 798px) and (min-width: 567px) {
  .post-box:last-of-type {
    grid-column: 1 / 3;
  }
  .post-box:last-of-type > .post {
    width: 50%;
    margin: auto;
  }
}
@media only screen and (max-width: 798px) {
  .home-post-box {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
}
@media only screen and (max-width: 567px) {
  .landing-container {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .landing-box {
    margin: 0px;
  }
  .quote-box {
    width: 100%;
    padding: 35px 40px;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0;
    left: 0;
  }
  .home-quote {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  .quote-img-box {
    width: 100%;
    position: relative;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
  }
  .home-post-box {
    grid-template-columns: 1fr;
  }
  .home-tip-box {
    grid-template-columns: 1fr;
  }
}
</style>
