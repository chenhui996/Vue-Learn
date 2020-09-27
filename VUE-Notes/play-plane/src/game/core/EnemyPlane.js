import { reactive, onMounted, onUnmounted } from "vue";
import { game } from "../../game/index.js";
export function useEnemyPlane() {
  // 敌军逻辑
  // const enemyPlanes = reactive([
  //   {
  //     x: 50,
  //     y: 50,
  //   },
  //   {
  //     x: 250,
  //     y: 50,
  //   },
  // ]);
  // bug，先渲染一个
  const enemyPlanes = reactive(
    {
      x: 50,
      y: 50,
    },
  );

  // 移动
  const speed = 2;
  const move = () => {
    const handleTicker = () => {
      // enemyPlanes.forEach((enemy)=>{
        enemyPlanes.y+=speed;
      // });
    };
    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };

  move();

  return { enemyPlanes };
}
