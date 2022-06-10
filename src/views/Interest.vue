<template>
  <div class="interest-wrapper">
    <h1>Interest</h1>
      <div 
        v-for="(value, index) in Interests"
        :key="index"
        class="card-container"
      >
        <v-card
          class="card-wrapper"
          max-width="420"
        >
          <v-img
            :src="value.img"
            height="320px"
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
              :href="value.URL" 
              class="icon-wrap"
            >
              <img src="../assets/about/Instagram.svg" alt="GitHub" class="iconImg"/>
            </a>
          </v-card-actions>
        </v-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Interest extends Vue {
  private Interests: Array<object> = [
    {
      title   : 'Pet', 
      comment : '강아지를 키우고 있습니다.🐕‍🦺',
      img     : require('@/assets/interests/Coni.png'),
      URL     : 'https://www.instagram.com/coconni_siba/'
    },
    {
      title   : 'Food', 
      comment : '맛있는 음식을 먹으며 리뷰를 하고 있습니다.🍩',
      img     : require('@/assets/interests/Food.png'),
      URL     : 'https://www.instagram.com/91_hochelin/',
    }
  ];
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