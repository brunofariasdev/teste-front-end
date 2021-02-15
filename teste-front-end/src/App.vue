<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hambúrguer</router-link> 
      <router-link to="/pizza">Pizza</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  overflow: hidden !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #2c3e50;
  height: 100vh;
  
  
}
#nav{
  margin: 1rem;
}
#nav a {
  margin: .5rem;
  font-size: 1.7rem;
  padding:  .7rem;
  width: 12rem !important;
  text-decoration: none;
  color: rgb(100, 100, 100);
  border: 1px solid rgb(100, 100, 100);
  outline: none;
  border-radius: 2rem;
}

#nav a.router-link-exact-active {
  margin: .5rem;
  font-size: 1.7rem;
  padding:  .7rem;
  width: 12rem !important;
  text-decoration: none;
  color: white;
  background-color: coral;
  outline: none;
  border: none;
  border-radius: 2rem;
}
</style>
