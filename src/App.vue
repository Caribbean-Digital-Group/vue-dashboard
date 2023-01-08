<template>
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <!-- nav -->
    <div class="bg-white container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <navbar
            isBlur="blur my-3 py-2 mt-4 start-0 end-0 mx-4 shadow blur border-radius-lg"
            btnBackground="bg-gradient-success"
            v-bind:darkMode="true"
          />
        </div>
      </div>
    </div>
    <router-view />
    <app-footer v-show="showFooter" />
  </main>
</template>
<script>
import Navbar from "@/components/Navbars/DefaultNavbar.vue";
import AppFooter from "@/components/Footers/DefaultFooter.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    AppFooter,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    ...mapState([
      "isRTL",
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton",
    ]),
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";

    const sidenav = document.getElementsByClassName("g-sidenav-show")[0];

    if (window.innerWidth > 1200) {
      sidenav.classList.add("g-sidenav-pinned");
    }
  },
};
</script>
