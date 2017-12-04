<template>
  <div id="app">
    <top></top>
    <canvas-comp></canvas-comp>

  </div>
</template>

<script>
import CanvasComp from './components/canvasComponent/CanvasComp'
import Top from './components/headerComp/header'

export default {
  name: 'app',
  components: {
    CanvasComp,
    Top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
