<template>
    <div>
        鼠标x轴坐标:{{position.x}}
        <br>
        鼠标y轴坐标:{{position.y}}
    </div>
</template>

<script>
import { useMousePosition } from "../use/useMousePosition.js"
export default {
    setup () {
        // position 需要是一个响应式对象
        const position = useMousePosition();
        return {position};
    }
}
</script>

<style scoped>

</style>