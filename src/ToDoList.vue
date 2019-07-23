<template>
    <body>
      <div id="app" class="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
    </body>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
export default {
  name: 'app',
  components:{
    Header,
    Body,
    Footer
  }
}
</script>

<style>
.container{
    padding: 20px;
    width: 500px;
    margin: 0 auto;
    margin-top: 40px;
    background: white;
}
body{
    background: #ccc;
}
</style>
