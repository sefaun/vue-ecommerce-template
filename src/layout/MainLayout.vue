<template>
  <div>
    {{ yeni_deger }}
    <Navbar :ferit="feritin_degiskeni" @erdem="erdemdenGelen($event)"></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      feritin_degiskeni: 100,
      yeni_deger: 0,
    };
  },
  methods: {
    erdemdenGelen(event) {
      // this.feritin_degiskeni = event;
      this.yeni_deger = event;
    },
  },
};
</script>

<style>
</style>