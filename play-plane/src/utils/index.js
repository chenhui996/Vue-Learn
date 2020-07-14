export function hitTestRectangle(objA,objB){
    //不会碰撞的逻辑
    return (
        objA.x + objA.width >= objB.x &&
        objB.x + objB.width >= objA.x &&
        objA.y + objA.height >= objB.y &&
        objB.y + objB.height >= objA.y
    );
}