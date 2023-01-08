<template>
  <div>
    <h6 class="mb-1">Productos</h6>
    <p class="text-sm">Busca lo que necesites</p>
    <material-input id="search" label="Search here" />
  </div>
</template>
<script>
import MaterialInput from "@/components/MaterialInput.vue";
export default {
  name: "search",
  data() {
    return {};
  },
  components: {
    MaterialInput,
  },
};
</script>
