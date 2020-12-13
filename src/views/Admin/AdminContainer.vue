<template>
  <v-container>
    <h1>Admin</h1>
    <v-container>
      <v-row>
        <v-col>
          <AdminInsertPages />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import AdminInsertPages from '@/views/Admin/AdminInsertPages.vue';

@Component({
  components: {
    AdminInsertPages,
  }
})
export default class AdminContainer extends Vue {

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
</style>
