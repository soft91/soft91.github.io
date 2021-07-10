<template>
  <div class="about-wrapper">
    <div class="about-intro">
      <h1>YOON HOSEUNG</h1>
      <h2>Front-End Web Developer</h2>
      <h3>Lang : Javascript(ES5, ES6)</h3>
      <h3>FE : Next.js, React.js, Vue.js</h3>
      <h3>BE : Spring Framework, Node.js, MySQL</h3>
      <div class="icon-container">
        <a target="_blank" href="https://github.com/soft91" class="icon">
          <span class="iconName">GitHub</span>
          <img src="../assets/about/GitHub.svg" alt="GitHub" class="iconImg"/>
        </a>
        <a target="_blank" href="http://linkedin.com/in/soft91" class="icon">
          <span class="iconName">Linked In</span>
          <img src="../assets/about/Linkedin.svg" alt="GitHub" class="iconImg"/>
        </a>
        <a target="_blank" href="https://instagram.com/soft4750" class="icon">
          <span class="iconName">Instagram</span>
          <img src="../assets/about/Instagram.svg" alt="GitHub" class="iconImg"/>
        </a>
        <a target="_blank" href="https://soft91.tistory.com" class="icon">
          <span class="iconName">Blog</span>
          <img src="../assets/about/Blog.svg" alt="GitHub" class="iconImg"/>
        </a>
      </div>
    </div>
    <div class="about-img">
      <img src="../assets/about/Yoon.jpg" class="aboutImg"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {

}
</script>

<style scoped>
h1 {
  color: #ffffff;
  max-width: 400px;
  line-height: 80px;
  font-size: calc(32px + 28*(100vw - 320px)/1120);
}

h2, h3 {
  color: #ffffff;
  max-width: 400px;
  line-height: 80px; 
}

.about-wrapper {
  display: flex;
  padding: 3% 10%;
}

.about-intro {
  flex: 1;
}

.about-img {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 0 50%;
  margin: 0 auto;
  overflow: hidden;
}

.aboutImg {
  width: 500px;
  height: 650px;
}

.icon-container {
  display: flex;
}

.icon {
  display: inline-block;
  position: relative;
  text-decoration: none;
  background-color: #ffffff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 3rem;
  margin-right: 1.5rem;
  padding: 0;
}

.iconName {
  position: absolute;
  top: -15px;
  left: 50%;
  font-family: five_boroughs_handwritingRg,sans-serif;
  color: #4758fc;
  -webkit-transform: translateX(-50%) rotate(0deg);
  transform: translateX(-50%) rotate(0deg);
  font-size: 1rem;
  letter-spacing: 3px;
  opacity: 0;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  margin-left: 5%;
}

.iconImg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
</style>