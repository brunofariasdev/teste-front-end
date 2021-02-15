<template>
  <div class="pizza">
    <h1>Pizza</h1>
      <div class="card" v-for="infos in info" :key="infos">
          <h3>{{infos.title}}</h3>
          <img :src="infos.picture" alt="">
          <p>{{infos.description}}</p>
          <h2>R$: {{infos.price}}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    
  }, 
  data(){
    return{
      info: null,
      
      
    }
  },

  mounted () {
    axios 
    .get('https://front-end-test-app.s3.amazonaws.com/menu.json')
    .then(response => (this.info = response.data[1].products))
    
   
  }
  
}
</script>

