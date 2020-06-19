<template>
  <section>
    <div class="container">
      <div class="title">
        <img class="logo" :src="src" />
        <h1>{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      src: require('@/assets/image/my_logo.png'),
      title: "VUE第一个小训练"
    };
  }
};
</script>
<style src="@/assets/css/style.css"></style>
