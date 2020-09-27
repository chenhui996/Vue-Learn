import { reactive } from "vue";
export function usePlane() {
  // 先创建一个飞机数据
  const planeInfo = reactive({
    x: 100,
    y: 350,
  });

  const move = () => {
    const speed = 10;
    window.addEventListener("keyup", (e) => {
      console.log(e.code);
      switch (e.code) {
        case "ArrowUp":
          planeInfo.y -= speed;
          break;
        case "ArrowDown":
          planeInfo.y += speed;
          break;
        case "ArrowLeft":
          planeInfo.x -= speed;
          break;
        case "ArrowRight":
          planeInfo.x += speed;
          break;

        default:
          break;
      }
    });
  };

  move();

  return { planeInfo };
}
