<template>
  <div class="home-wrapper">
    <h1>
      <Roller
        text="W hatever A pp's"
        :charList="stringCharList"
        :transition="2"
        :isStatic="false"
        :wordWrap="20"
        class="roller"
      >
      </Roller>
    </h1>
    <div class="contact">
      <span>CONTACT ME</span>
      <span>E-mail : soft4750@gmail.com</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Roller from "vue-roller";

@Component({
  components: { Roller },
})
export default class Home extends Vue {
  readonly stringCharList: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
}
</script>
<style scoped>
div.home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: white;
}
div.contact {
  display: flex;
  flex-direction: column;
  animation: fadein 5s;
  -moz-animation: fadein 5s; /* Firefox */
  -webkit-animation: fadein 5s; /* Safari and Chrome */
  -o-animation: fadein 5s; /* Opera */
}

div.contact span:first-child {
  font-size: 2rem;
  line-height: 2;
  text-align: center;
}

div.contact span:last-child {
  text-align: center;
  font-size: 1rem;
}

.roller {
  margin: 5px;
  font-size: calc(32px + 28 * (100vw - 320px) / 1120);
  color: #42b983;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
