<template class='top'>
<div id="head">
  <b-navbar  type="dark" >
    <b-navbar-brand class="mx-auto big-font">Pomodoro-Clock-Free-Code-Camp</b-navbar-brand>

  </b-navbar>
</div>

</template>

<script>
export default {
  name: "top",
  data: function() {
    return {
      word: "hello from header"
    };
  }
};
</script>

<style scoped>
#head {
  background-color: #0d47a1;
}

.big-font {
 font-family: 'Shrikhand', cursive;
  font-size: 28px;
}
</style>

