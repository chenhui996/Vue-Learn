//创建入口
import {createApp} from "./src/runtime-canvas";
import App from './src/App';
import {getCanvasRootContainer} from './src/Game';

createApp(App).mount(getCanvasRootContainer());  








//目标：将代码渲染到canvas上

//首先，用createApp创建一个组件App,详情可看App.js;
//根组件是返回一个虚拟节点，这时候，还没办法让浏览器跑起来，因为还没有mount；
//但是要mount。需要有一个根容器来支撑，对应的就是平时的"#App"这个vue常用的根容器名称（大家都是这个习惯命名：<div id="#App"></div）;
//于是，咱们去创建不同于基于正常dom，而是基于canvas的根容器！
//这里，我们选择用PIXI这个js库来帮助我们完成————基于canvas的根容器；
//初始化一个PIXI实例化对象：game;
//然后通过打印查看，我们需要了解到PIXI实例化对象，也就是game的两个属性：
    //view:根节点(也就是dom)；
    //stage:整个根容器,根节点canvas是需要塞进这里面的;

