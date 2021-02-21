<template>
  <navBar></navBar>
  <pageBody></pageBody>
  <footerBar></footerBar>

</template>


<script>
import navBar from "./components/nav.vue"
import pageBody from "./components/body.vue"
import footerBar from "./components/footer.vue"
export default{
  components:{
  navBar,
  pageBody,
  footerBar
},
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

