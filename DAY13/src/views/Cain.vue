<template>
  <div>
    <h1>CainOtakuWhat</h1>
    <router-link :to="{name:'cain-info'}">Info</router-link> |
    <router-link :to="{name:'cain-myvideo'}">Myvideo</router-link>
    <router-view/>
  </div>
</template>
