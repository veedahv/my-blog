<template>
  <div class="slider">
    
    <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides" 
        class='slide'
        :key="slide.id">
            <div class="quote-box">
              <p class="home-quote">
                <i class="fa fa-quote-left"></i> {{ slide.quote }}
                <i class="fa fa-quote-right"></i>
              </p>
              <div class="home-quote-author">
                <em class=""> - {{ slide.author }}</em>
              </div>
            </div>
        <!-- <h4> {{ slide.title }} </h4> -->
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
  </div>
  <!--item-->
</template>

<script>
export default {
   name: "Slider",
 data () {
    return {
      slides: [
        {
          title: 'I am Slide A',
          id: 1,
          author: 'Paul Rand',
          quote: 'You will learn most things by looking, but reading gives understanding. Reading will make you free.'
        },
        {
          title: 'I am Slide B',
          id: 2,
          author: 'John Locke',
          quote: 'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours'
        },
        {
          title: 'I am Slide C',
          id: 3,
          author: 'S.I. Hayakawa',
          quote: 'It is not true that we have only one life to live; if we can read, we can live as many more lives and as many kinds of lives as we wish.'
        },
        {
          title: 'I am Slide D',
          id: 4,
          author: 'Joyce Carol Oates',
          quote: 'Reading is the sole means by which we slip, involuntarily, often helplessly, into another’s skin, another’s voice, another’s soul.'
        },
        {
          title: 'I am Slide E',
          id: 5,
          author: 'Naomi Shihab Nye',
          quote: 'I love the solitude of reading. I love the deep dive into someone else’s story, the delicious ache of a last page.'
        }
      ],      
      timer: null,
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
    startSlide: function() {
        this.timer = setInterval(this.next, 5000);
      },
  },
  // props: ["post"],
  // data() {
  //   return {
  //     // contentsObj: this.post.contents,
  //     // contentsObj: JSON.stringify(this.post.contents),
  //     postsObj: JSON.stringify(this.post),
  //     // contentsObj: JSON.parse(this.post.contents),
  //   };
  // },
  mounted() {
    this.startSlide();
    // console.log(this.contents);
    // console.log(this.contentsObj);
    // console.log(JSON.stringify(this.contentsObj));
  },
};
</script>

<style scoped>
.slider {
  position: relative;
}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  /* width: 24em; */
  width: 30em;
  min-height: 25em;
}
.slide {
  /* flex: 0 0 30em; */
  flex: 0 0 28em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 0.1em dashed #000; */
  /* border-radius: 50%; */
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
  background: var(--spare-color);
  color: var(--white-color);
  padding: 35px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
.home-quote {
  font-size: 20px;
  line-height: 26px;
  margin: 0;
}
.home-quote-author {
  font-weight: lighter;
  font-size: 16px;
  text-align: right;
  width: 100%;
  margin-top: 25px;
}
@media only screen and (max-width: 567px) {
.carousel {  
  /* width: 24em; */
  /* width: 30em; */
  width: 20em;
  min-height: 25em;
}
.slide {
  /* flex: 0 0 30em; */
  /* flex: 0 0 28em; */
  flex: 0 0 18em;
  height: 20em;
  /* border-radius: 50%; */
  border-radius: 15px;
  padding: 25px 30px;
}
.home-quote {
  font-size: 18px;
  line-height: 24px;
}
.home-quote-author {
  font-size: 16px;
  margin-top: 25px;
}
}
</style>