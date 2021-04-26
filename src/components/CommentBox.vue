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
        <div class="comment-input-img">
          <!-- <img src="../assets/images/author-img/blank-profile-picture.png" alt="" class="comment-input-img" /> -->
          <img :src="imgSrc" alt="user image" class="comment-input-img" />
        </div>
        <input
          type="text"
          name=""
          class="comment-input"
          id="comment-input"
          placeholder="Write a comment" v-model="newComment"
        />
        <button class="comment-input-send" @click="addComment">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require('../assets/images/author-img/blank-profile-picture.png'),
      commentAuthor: 'Anonymous',
      commentTxts: ['fghjkghjk'],
      newComment: '',
      commentState: true,
      // commentState: false,
    };
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
.commenter-img,
.comment-input-img {
  width: 40px;
  margin: 5px;
  border-radius: 50%;
}
.commenter-img {
  width: 50px;
  margin-right: 25px;
}
.comment-input-img {
  width: 40px;
  margin: 5px;
}
.comment-input {
  padding: 10px 15px;
  width: 100%;
}
.comment-input-send {
  padding: 10px 25px;
}
</style>