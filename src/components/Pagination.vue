<template>
  <div class="pagination">
    <div class="pagination-row">
      <!-- <button class="pagination-btn" v-if="showPrevPage" @click="updatePage(currentPage - 1)"> -->
      <button class="pagination-btn" :disabled="currentPage <= 0" v-if="showPrevPage" @click="updatePage(currentPage - 1)">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <span>
        {{ currentPage + 1 }} of {{ totalPages() }}
      </span>
      <!-- <span v-for="n in pages" :key="n">
        <button class="pagination-btn" @click="pagNumber = n + 1">
          Prv
        </button>
      </span> -->
      <!-- <button class="pagination-btn" v-if="showNextPage" @click="updatePage(currentPage + 1)"> -->
      <button class="pagination-btn" :disabled="currentPage >= (totalPages() - 1)" v-if="showNextPage" @click="updatePage(currentPage + 1)">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['postsArr', 'currentPage', 'perPage'],
  data() {
    return {
      // contentsObj: this.post.contents,
      // pageNumber: 1,
      // perPage: 8,
      // totalBlogs: total,
      // contentsObj: JSON.parse(this.post.contents),
    };
  },
  mounted() {
    console.log(this.totalPages());
    console.log(this.perPage);
    // consol.log(JSON.stringify(this.contntsObj));
    console.log(this.postsArr.length);
  },
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber);
    },
    totalPages() {      
      return Math.ceil(this.postsArr.length / this.perPage)
    },
    showPrevPage() {
      return this.currentPage == 0 ? false : true;
    },
    showNextPage() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    },
  },
  // computed: {
  //   pages(){
  //   }
  // },
};
</script>

<style scoped>
.pagination-row {
  text-align: center;
}
.pagination-btn {
  margin: 10px;
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
}
.pagination-btn:hover {
  cursor: pointer;
}
@media only screen and (max-width: 567px) {
  .navigation {
    width: 100%;
  }
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
  .nav-links > * {
    margin-left: 0px;
    padding: 15px 25px;
  }
}
</style>