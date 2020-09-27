<template>
  <container>
    <CurrentView @change-view="handleChangeView"></CurrentView>
  </container>
</template>

<script>
import StartView from "./views/StartView";
import GameView from "./views/GameView";
// import EndView from "./views/EndView";
// import Work from "./components/Work";
import { computed, ref } from "vue";
export default {
  name: "App",
  components: { 
    // StartView, 
    // GameView, 
    // EndView 
  },

  setup() {
    // const currentViewName = ref("StartView");
    const currentViewName = ref("GameView");
    // const currentViewName = ref("EndView");
    // 依赖别的属性的属性
    const CurrentView = computed(() => {
      // eslint-disable-next-line no-debugger
      if (currentViewName.value === "StartView") {
        return StartView;
      } else if (currentViewName.value === "GameView") {
        return GameView;
      }
      // else if (currentViewName.value === "EndView") {
      //   return EndView;
      // }
    });

    function handleChangeView(viewName) {
      currentViewName.value = viewName;
    }

    return {
      CurrentView,
      handleChangeView,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
