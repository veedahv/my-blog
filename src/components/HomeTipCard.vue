<template>
  <div class="tip">
    <div class="txt-box">
        <h2 class="tip-title">{{ tip.title }}</h2>
      <div class="tip-box">
        <ul class="tip-ul">
          <li class="tip-txt">{{ tip.contents }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tip"],
};
</script>

<style scoped>
.tip {
  background: var(--primay-color);
  color: var(--sec-color);
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 7px rgba(255, 255, 255, 0.2);
}
.tip-ul {
  margin-top: 15px;
  list-style: none;
}
.tip-title {
  font-size: 20px;
  font-weight: 700;
}
.tip-txt {
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.5;
}
.time-info {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
</style>