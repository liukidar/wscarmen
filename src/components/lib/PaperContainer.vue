<template>
  <div class="cmp-paper-container">
    <div class="paper-before">
      <slot name="paper-before"></slot>
    </div>
    <div><slot></slot></div>
    <div class="paper-after">
      <slot name="paper-after"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.cmp-paper-container {
  position: relative;
  overflow: visible;
}
.paper-before, .paper-after {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.inset-shadow {
  pointer-events:none;
  box-shadow: inset 0px -10px 20px -10px rgba(0,0,0,0.8);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.inset-shadow.top {
  box-shadow: inset 0px 10px 20px -10px rgba(0,0,0,0.8);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>
