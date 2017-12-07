<template>
  <div id="app">
    <top></top>
    <canvas-comp :time="time" :angle="angle" ></canvas-comp>

  </div>
</template>

<script>
import CanvasComp from "./components/canvasComponent/CanvasComp";
import Top from "./components/headerComp/header";

export default {
  name: "app",
  computed: {
      time() {
            return  20;
        },
  },
  components: {
    CanvasComp,
    Top
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  background-color: #E0F7FA ;
}
</style>
