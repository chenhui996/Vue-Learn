<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <EnemyPlane :x="enemyPlanes.x" :y="enemyPlanes.y"></EnemyPlane>
  </container>
</template>

<script setup>
// import { reactive } from "vue";
import Map from "../components/Map.vue";
import Plane from "../components/Plane.vue";
import EnemyPlane from "../components/EnemyPlane.vue";
import { usePlane } from "../game/core/Plane.js";
import { useEnemyPlane } from "../game/core/EnemyPlane.js";

export default {
  components: {
    Map,
    Plane,
    EnemyPlane,
  },
};

// 先创建一个飞机数据
const { planeInfo } = usePlane();

// 敌军逻辑
const { enemyPlanes } = useEnemyPlane();

export { planeInfo, enemyPlanes };
</script>

<style scoped></style>
