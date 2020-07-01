<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: "TitleCompontent",
  props:{
      title:{
          type:String,
          required:true
      }
  }
//   data() {
//     return {
//       title: "Hello CainOtakuWhat",
//     };
//   },
};
</script>
<style scoped>
/* scoped代表：仅在当前组件 */
h1.title{
    color:orange;
}
</style>