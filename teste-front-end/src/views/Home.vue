<template>
  <div>
    <h1>Hambúrguer</h1>
    <input type="text" v-model="search">
    <div class="card" v-for="{id,title, picture, description, price} in searchResults" :key="id">
          <h3>{{title}}</h3>
          <img :src="picture" alt="">
          <p>{{description}}</p>
          <h2>R$: {{price}}</h2>
    </div>
  </div>
</template>

<style scoped>
  .card{
    background-color: rgb(197, 197, 197);
    color: white;
  }
  
</style>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    
  }, 
  data(){
    return{
      info: null, 
      search: ''
    }
  },

  computed: {
    searchResults: function() {
      if (this.search == '' || this.search ==  ' ') {
        return this.info
      } else {
        return this.info.filter((info) => {
          return info.title.match(this.search);
        });
      }
    }
  },

  mounted () {
    axios 
    .get('https://front-end-test-app.s3.amazonaws.com/menu.json')
    .then(response => (this.info = response.data[0].products))
    
   
  }
  
}
</script>
