<template>
  <div class="container">
    <h1>Pizza</h1>
    <div class="search">
      <input type="text" v-model="search" placeholder="Busque no Cardápio">
    </div>
    <div class="app">
      <div class="card" v-for="{id,title, picture, description, price} in searchResults" :key="id">
           <div class="info">
              <h3>{{title}}</h3>
              <p>{{description}}</p>
              <h2>R$: {{price}}</h2>
           </div> 
           <img :src="picture" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
  padding: .3rem;
  color:rgb(209, 91, 47) ;
}
.container{
  width: 100vw;
  overflow: hidden !important;
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
.app{
  display: flex;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  padding: 0 0 3rem 0;
  height: 85vh !important;
  margin: 1rem;
}
.search{
  margin: .3rem;
  height: 4rem;
  background-color: coral;

  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
}
.search input{
  width: 18rem;
  height: 2rem;
  border: none;
  background-color: coral;
  color: white;
  font-size: 1rem;
  padding: .3rem;
  outline: none;
}
.info{
  padding: .4rem;
  width: 70%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 12rem;
}
.info h3{
  font-weight: 100;
}
.info p{
  font-size: 1rem;
  color: rgb(146, 141, 141);
  padding: 0;
  margin: 0;
}
.info h2{
  font-size: 1rem;
  color: rgb(80, 80, 80);
  font-weight: 100;
}

.card{
  margin: 1rem;
  background-color: rgb(255, 255, 255);
  color: rgb(80, 80, 80);
  max-width: 24rem;
  min-width: 24rem;
  max-height: 12rem;
  min-height: 12rem;
  border-radius: .3rem;
  display: flex;
  flex-direction: row;
  box-shadow: -2px 1px 2px 1px rgba(0,0,0,0.32);
  -webkit-box-shadow: -2px 1px 2px 1px rgba(0,0,0,0.32);
  -moz-box-shadow: -2px 1px 2px 1px rgba(0,0,0,0.32);
}
.card img{
  height: 4rem;
  height: 100%;
  border-radius:0 .3rem .3rem 0 ;
  width: 30%;
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
    .then(response => (this.info = response.data[1].products))
  }
  
}
</script>
