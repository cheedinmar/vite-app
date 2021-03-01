<template>
<div>
  <navbar></navbar>
      <router-view/>
  <footah></footah>
</div>

</template>


<script>
import navbar from "./components/home/nav.vue"
import footah from "./components/home/footer.vue"

export default{
  components:{
  navbar,
  footah 
}
}

</script>
<style scoped>
#nav a {
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
}

#nav a.router-link-exact-active{
  color: white;
  background: crimson;

}
</style>

