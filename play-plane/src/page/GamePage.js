import {
  defineComponent,
  h,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";
import Map from "../component/Map";
import Plane from "../component/Plane";
import Bullet from "../component/Bullet";
import EnemyPlane from "../component/EnemyPlane";
import { getGame } from "../Game";
import {hitTestRectangle} from '../utils/index'

export default defineComponent({
  setup(props,ctx) {
    //飞机数据
    const planeInfo = usePlaneInfo();
    //子弹数据
    const bullets = reactive([]);
    const handleAttack = (info)=>{
      const createBulletInfo = () => {
        return {
          x: info.x + 67,
          y: info.y,
        }
      }

      bullets.push(createBulletInfo());
    };
    //敌军数据
    const enemyPlanes = reactive([
      {
        x:10,
        y:10,
        width:308,
        height:207
      }
    ]);
    //循环
    getGame().ticker.add(()=>{
      //让子弹动起来
      moveBullets(bullets);
      //碰撞检测
      enemyPlanes.forEach(enemyPlaneInfo => {
        if(hitTestRectangle(enemyPlaneInfo,planeInfo)){
          ctx.emit("changePage","EndPage");
          
        }
      });
    });
    
    return {
      planeInfo,
      bullets,
      handleAttack,
      enemyPlanes
    };
  },
  render(ctx) {
    //渲染子弹
    const renderBullets = () => {
      return ctx.bullets.map((info) => {
        return h(Bullet, { x: info.x, y: info.y });
      });
    };
    //渲染敌机
    const renderEnemys = () => {
      return ctx.enemyPlanes.map((info) => {
        return h(EnemyPlane, { x: info.x, y: info.y });
      });
    };
    return h("Container", [
      h(Map),
      h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y, onAttack:ctx.handleAttack}),
      // h(Bullet, { x: ctx.bulletInfo[0].x, y: ctx.bulletInfo[0].y }),
      ...renderBullets(),
      ...renderEnemys()
    ]);
  },
});

const usePlaneInfo = () => {
  //reactive创建数组对象类型的响应式对象
  //打印出来是一个proxy代理，ref打印出来是一个对象;
  //reactive没有value;

  //飞机位置
  const planeInfo = reactive({
    x: 275,
    y: 780,
    width:200,
    height:200
  });

  const { x, y } = useMovePlane(planeInfo.x, planeInfo.y);
  planeInfo.x = x;
  planeInfo.y = y;

  return planeInfo;
};

const useMovePlane = (initX, initY) => {
  //让飞机移动起来
  const planeSpeed = 15;
  const point = reactive({
    x: initX,
    y: initY,
  });
  const handleKeyDown = (e) => {
    switch (e.code) {
      case "ArrowUp":
        point.y -= planeSpeed;
        break;
      case "ArrowDown":
        point.y += planeSpeed;
        break;
      case "ArrowLeft":
        point.x -= planeSpeed;
        break;
      case "ArrowRight":
        point.x += planeSpeed;
        break;
    }
  };
  //生命周期，函数式引用
  //组件创建完,创建事件监听
  onMounted(() => {
    window.addEventListener("keydown", handleKeyDown);
  });
  //组件销毁时,移除事件监听
  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });
  return toRefs(point);
};

const moveBullets = (bullets)=>{
  const speed = 5;
  bullets.forEach((bulletInfo) => {
    bulletInfo.y -=speed;
  });
};
