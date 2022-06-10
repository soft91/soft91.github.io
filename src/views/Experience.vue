<template>
  <div class="interest-wrapper">
    <h1>Experience</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Interest extends Vue {}
</script>
<style scoped>
h1 {
  font-family: sans-serif;
  font-size: calc(32px + 28 * (100vw - 320px) / 1120);
  letter-spacing: 5px;
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #ffffff;
}

.interest-wrapper {
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
  display: block;
}

.interest-wrapper h1 {
  margin-left: 15px;
}

.card-container {
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.card-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  outline: 1px solid transparent;
  margin: 5%;
}

.icon-wrap {
  width: 100%;
}

.iconImg {
  width: 30px;
  height: 30px;
  float: right;
  padding: 0;
}
</style>
