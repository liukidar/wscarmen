<template>
  <div class="papersheet" :style="{paddingTop: padding+'%', transform:'skew(0deg, '+deg+'deg)'}">
  </div>
</template>

<script>
export default {
  props: ['deg'],
  computed: {
    padding() {
      return Math.abs(100 * Math.tan(this.deg * (Math.PI / 180)))
    }
  }
}
</script>

<style>
.papersheet {
  box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.5);
  position:absolute;
  width:100%;
  margin:0;
  transition: margin 1s;
}
.papersheet.rb {
  transform-origin:100% 0%;
  bottom:0;
  left:0;
}
.papersheet.lb {
  transform-origin:0% 0%;
  bottom:0;
  right:0;
}
.papersheet.rt {
  transform-origin:100% 100%;
  top:0;
  left:0;
}
.papersheet.lt {
  transform-origin:0% 100%;
  top:0;
  right:0;
}
</style>
