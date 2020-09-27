<template>
  <container>
    <sprite :texture="MapImg" :y="mapY1"></sprite>
    <sprite :texture="MapImg" :y="mapY2"></sprite>
  </container>
</template>

<script>
import { ref } from "vue";
import { game } from "../game/index.js";
import MapImg from "../assets/map.jpg";
export default {
  setup() {
    const viewHeight = 1080;
    const mapY1 = ref(0);
    const mapY2 = ref(-viewHeight);

    // loop
    const speed = 5;
    function handleTicker() {
        mapY1.value+=speed;
        mapY2.value+=speed;

        if(mapY1.value >= viewHeight){
            mapY1.value = -viewHeight;
        }
        if(mapY2.value >= viewHeight){
            mapY2.value = -viewHeight;
        }
    }
    game.ticker.add(handleTicker);

    return {
      MapImg,
      mapY1,
      mapY2,
    };
  },
};
</script>

<style scoped></style>
