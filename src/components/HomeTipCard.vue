<template>
  <!-- <div class="post"> -->
  <div class="tip">
    <div class="txt-box">
        <h2 class="tip-title">{{ tip.title }}</h2>
      <!-- <div class="time-info-box">
        <small class="time-info">{{}}</small>
      </div> -->
      <div class="tip-box">
        <ul class="tip-ul">
          <li class="tip-txt" v-for="content in tip.contents" :key="content">{{ content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tip"],
  // data() {
  //   return {
  //     // postsObj: JSON.stringify(this.post),
  //   };
  // },
  // mounted() {
  //   // console.log(this.contents);
  //   // console.log(this.contentsObj);
  //   // console.log(JSON.stringify(this.contentsObj));
  // },
};
</script>

<style scoped>
.tip {
  /* display: flex; */
  /* flex-direction: column-reverse; */
  /* align-items: flex-start; */
  /* justify-content: space-between; */
  /* background: var(--light-color); */
  background: var(--primay-color);
  color: var(--sec-color);
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 7px rgba(255, 255, 255, 0.2);
}
/* .txt-box {
  max-width: 400px;
} */
.tip-ul {
  margin-left: 20px;
  margin-top: 15px;
}
.tip-title {
  font-size: 20px;
  font-weight: 700;
}
.tip-txt {
  font-size: 16px;
  margin-bottom: 8px;
}
.time-info {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
/* @media only screen and (max-width: 567px) {
  .post {
    flex-direction: column;
  }
} */
</style>