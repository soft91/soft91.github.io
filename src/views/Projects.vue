<template>
  <div class="projects-wrapper">
    <h1>Projects</h1>
      <div 
        v-for="(value, index) in projectList"
        :key="index"
        class="card-container"
       >
        <v-card
          class="card-wrapper"
          max-width="420"
        >
          <v-img
            :src="value.imgPath"
            height="300px"
          ></v-img>
          <v-card-title>
            {{ value.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ value.comment }}
          </v-card-subtitle>
          <v-card-actions>
            <a
              target="_blank" 
              :href="value.gitURL" 
              class="icon"
            >
              <img src="../assets/about/GitHub.svg" alt="GitHub" class="iconImg"/>
            </a>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="toggleShow(index)"
            >
              <v-icon>{{ value.isShowing ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="value.isShowing">
              <v-divider></v-divider>
              <v-card-text>
                {{ value.content }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
    </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ProjectInterfaces } from '@/common/Interface';

@Component
export default class Projects extends Vue {
  private projectList: ProjectInterfaces = [
    {
      imgPath : require('@/assets/projects/Whateverpad.png'),
      title   : 'Whatever Pad',
      comment : 'Electron + Vue.js로 구축한 NotePad',
      content : 'Elctron + Vue.js + Vuex + Vuetify를 활용한 NotePad 구현',
      gitURL  : 'https://github.com/soft91/electron-vue-notepad',
      isShowing: false
    },
    {
      imgPath : require('@/assets/projects/Vue.png'),
      title   : 'Trello Clone by Vue.js',
      comment : 'Vue.js를 이용한 Trello 클론 코딩',
      content : 'Vue.js + Express + MySQL을 활용한 Trello Clone',
      gitURL  : 'https://github.com/soft91/vue-trello-clone',
      isShowing: false
    },
    {
      imgPath : require('@/assets/projects/Electron.png'),
      title   : 'Electron Build',
      comment : '일렉트론 빌드를 통한 앱 구동 테스트',
      content : '.jar 파일로 빌드된 결과물을 실행시키는 기능을 구현함.',
      gitURL  : 'https://github.com/soft91/Electron-Study',
      isShowing: false
    },
    {
      imgPath : require('@/assets/projects/Post.png'),
      title   : '편의점 택배 요금 계산기',
      comment : 'React Naive로 만든 택배 요금 계산기',
      content : '안드로이드 앱으로 출시했던 편의점 택배 요금 계산기 앱을 React Native로 재구현',
      gitURL  : 'https://github.com/soft91/ReactNative-Project',
      isShowing: false
    }
  ]

  private toggleShow(i: number): void {
    this.projectList[i].isShowing = !this.projectList[i].isShowing;
  }
} 
</script>
<style scoped>
  h1 {
    font-family: sans-serif;
    font-size: calc(32px + 28*(100vw - 320px)/1120);
    letter-spacing: 5px;
    text-align: left;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: #ffffff;
  }

  .projects-wrapper {
    margin: 0 auto;
    max-width: 1440px;
    position: relative;
    display: block;
  }

  .projects-wrapper h1 {
    margin-left: 15px;
  }

  .card-container {
    display: inline-grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
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

  .iconImg {
    width: 30px;
    height: 30px;
    padding: 0;
  }
</style>