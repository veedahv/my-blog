<template>
  <div class="container">
    <div class="box">
      <ul class="comment-container" v-if="commentState">
        <li class="comment-box" v-for="commentTxt in commentTxts" :key="commentTxt">
          <div class="img-box">
            <img :src="imgSrc" class="commenter-img" alt="user image" />
          </div>
          <div class="comment">
            <h4 class="commenter">{{ commentAuthor }}</h4>
            <p class="comment-txt">{{ commentTxt }}</p>
          </div>
        </li>
      </ul>
      <div class="comment-input-box">
        <div class="comment-input-img-box">
          <img :src="imgSrc" alt="user image" class="comment-input-img" />
        </div>
        <input
          type="text"
          name=""
          class="comment-input"
          id="comment-input"
          placeholder="Write a comment" v-model="newComment"
        />
        <button class="comment-input-send" @click="addComment"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comments'],
  data() {
    return {
      imgSrc: require('../assets/images/author-img/blank-profile-picture.png'),
      commentAuthor: 'Anonymous',
      commentTxts: [],
      newComment: '',
      commentState: true,
      // commentState: false,
    };
  },
  mounted() {
    this.commentTxts = this.comments;
  },
  methods: {
    addComment() {
      this.commentTxts.push(this.newComment);
      this.commentState = true;
      this.newComment = '';
    }
  },
  // props: ["post"],
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  /* justify-content: space-between; */
}
.author {
  font-size: 10px;
}
.comment-box,
.comment-input-box {
  display: flex;
  align-content: flex-start;
}
.comment-input-box {
  margin-top: 20px;
}
.commenter-img,
.comment-input-img {
  /* width: 40px;
  margin: 5px; */
  border-radius: 50%;
}
.comment-txt {
  margin-top: 10px;
}
.commenter {
  margin-top: 5px;
}
.commenter-img {
  width: 50px;
  margin-right: 25px;
}
.comment-input-img-box {
  width: 45px;
  /* padding: 5px; */
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment-input-img {
  width: 100%;
  /* margin: 5px; */
}
.comment-input {
  padding: 10px 15px;
  width: 100%;
  outline: none;
  border: 1px solid var(--sec-color);
}
.comment-input-send {
  padding: 10px 25px;
  /* background: var(--primay-color);
  color: var(--sec-color); */
  border: 1px solid var(--sec-color);
  background: var(--sec-color);
  color: var(--primay-color);
  font-size: 25px;
  outline: none;
  border: none;
}
</style>