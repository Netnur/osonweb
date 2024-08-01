<template>
  <div>
    <main-layout></main-layout>
    <!-- <component :is="layout+'-layout'" v-if="layout"></component> -->
  </div>
  <!-- <router-view></router-view> -->
</template>
<script> 
    import MainLayout from './layout/MainLayout.vue';
    // import {computed} from 'vue';
    // import {useRoute} from 'vue-router'




  export default {
    // setup(){
    //   const route = useRoute()
    //   return{
    //     layout: computed( ()=> route.meta.layout )
    //   } 
    // },
    components:{
      MainLayout
    }
  } 
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color:  #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
