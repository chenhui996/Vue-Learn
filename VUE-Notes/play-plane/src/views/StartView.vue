<template>
  <container>
    <sprite :texture="startPageImg"> </sprite>
    <sprite
      :texture="startBtnImg"
      x="255"
      y="550"
      :interactive="true"
      @click="handleClick"
    >
    </sprite>
  </container>
</template>

<script>
import startPageImg from "../assets/start_page.jpg";
import startBtnImg from "../assets/startBtn.png";

export default {
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    function handleClick() {
      console.log("click");
      emit("change-view", "GameView");
    }

    return {
      handleClick,
      startPageImg,
      startBtnImg,
    };
  },
};
</script>

<style scoped></style>
