<template>
<div>
  <div class="row justify-content-center">
    <b-alert variant="success" v-bind:time="time" show class="alert-style"><h4> {{ text }} </h4></b-alert>
  </div>
    <div class="row justify-content-center align-middle" >
    <canvas :angle="angle" id="drawing"  width="325" height="325"></canvas>
    </div>

    <!-- Starting playing buttons area -->
    <div class="buttons row justify-content-center">

        <b-button v-on:click ="startTimer" variant="outline-primary"  class="btnawesome"><icon name="play" Label="play" scale="2"></icon></b-button>


        <b-button v-on:click="pauseTimer" variant="outline-primary" class="btnawesome"><icon name="pause-circle" scale="2"></icon></b-button>


        <b-button v-on:click="stopTimer" variant="outline-primary"  class="btnawesome"><icon name="stop-circle" scale="2"></icon></b-button>



    </div>
    <!-- Ending playing buttons area -->
    </div>
</template>

<script src="./script.js"></script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css">

</style>
