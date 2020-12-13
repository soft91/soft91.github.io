<template>
  <v-container class="insert-api-wrap">
      <h2>Projects / Interests Api Page</h2>
      <v-row>
        <v-col>
          <v-text-field>
            <template v-slot:label>
              Projects Name
            </template>
          </v-text-field>
          <v-file-input
            accept="image/*"
            label="File input"
            prepend-icon="mdi-camera"
          ></v-file-input>
          <v-btn @click="insertProjects()">Insert Projects</v-btn>
        </v-col>
        <v-col>
          <v-text-field v-model="interestName">
            <template v-slot:label>
              Interests Name
            </template>
          </v-text-field>
          <v-file-input
            accept="image/*"
            label="File input"
            prepend-icon="mdi-camera"
            v-model="interestImg"
          ></v-file-input>
          <v-btn @click="insertInterests()">Insert Interests</v-btn>
        </v-col>
      </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class AdminInsertPages extends Vue {
  private interestName = '';
  private interestImg = '';

  private insertProjects(): void {
    console.log('test')
  }

  private insertInterests(): void {
    const formData = new FormData();
  
    formData.append('name', this.interestName);
    formData.append('img', this.interestImg);

    axios.post('http://localhost:4500/interests/insert', formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then((result: object) => {
      console.log(result)
      alert('Success');
    }).catch((err: object) => {
      console.error(err)
    })
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

  div.insert-api-wrap {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff;
  }
</style>
