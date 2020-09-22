import { reactive, onMounted, onUnmounted } from "vue";

export function useMousePosition() {
  // 封装对应的鼠标移动逻辑

  const position = reactive({
    x: 0,
    y: 0,
  });
  onMounted(() => {
    window.addEventListener("mousemove", (e) => {
      position.x = e.pageX;
      position.y = e.pageY;
    });
  });
  onUnmounted(() => {
      window.removeEventListener("mousemove", () => {
          console.log("mousemove事件移除成功");
      })
  });

  return position;
}
