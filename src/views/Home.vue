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
        <h3 class="home-sub-title">
          Here are a few articles that might interest you
        </h3>
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
        <h3 class="home-sub-title">
          things to consider when writing an article
        </h3>
        <div class="home-tip-box">
          <div class="tip-box" v-for="tip in HomeTipsArr" :key="tip.title">
            <home-tip-card :tip="tip"></home-tip-card>
          </div>
        </div>
      </div>
    </div>
    <div class="quote-post-section">
      <div class="home-container">
        <h3 class="home-sub-title">words of wisdom from other readers</h3>
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTipCard from "@/components/HomeTipCard";
import tipsInfo from "@/tips-info";
import articleInfo from "@/article-info";
import HomeBlogCard from "@/components/HomeBlogCard .vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    HomeTipCard,
    HomeBlogCard,
    Slider,
  },
  data() {
    return {
      HomeTipsArr: tipsInfo,
      HomeCardsArr: articleInfo,
      HomeBlogCards: {},
    };
  },
  mounted() {
    (this.HomeBlogCards = Object.keys(this.HomeCardsArr)
      .slice(0, 3)
      .reduce((result, key) => {
        result[key] = this.HomeCardsArr[key];

        return result;
      }, {}))
  },
};
</script>

<style scoped>
.home {
  margin: 0px auto;
}
.home-container {
  max-width: 1000px;
  margin: 0px auto;
  padding: 10px 25px;
}
.landing {
  background: var(--primay-color);
}
.landing-container {
  padding-top: 40px;
  padding-bottom: 225px;
}
.landing-box {
  margin: 20px;
  max-width: 700px;
  position: relative;
}
.quote-box {
  width: 55%;
  font-size: 20px;
  line-height: 28px;
  padding: 35px 40px;
  background: var(--spare-color);
  color: var(--white-color);
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
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
}
.quote-img {
  width: 100%;
}

.home-sub-title {
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
}

.home-post-box {
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
}

.blog-link-box {
  width: 150px;
  text-align: center;
  margin: 25px auto;
}
.blog-link {
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
  grid-template-columns: 1fr 1fr 1fr;
}
.quote-post-section {
  padding-top: 40px;
  background: var(--primay-color);
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
  .home-tip-box {
    grid-template-columns: 1fr 1fr;
  }
  .landing-container {
    padding-bottom: 250px;
  }
  .home-quote {
    font-size: 17px;
    line-height: 22px;
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
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0;
    left: 0;
  }
  .home-quote {
    font-size: 16px;
    line-height: 24px;
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
