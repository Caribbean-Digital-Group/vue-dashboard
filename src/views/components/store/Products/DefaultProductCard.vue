<template>
  <div class="mb-4 col-xl-3 col-md-6 mb-xl-0 md-top">
    <div class="card card-blog card-plain">
      <div class="card-header p-0 mt-n4 mx-3">
        <a class="shadow-xl d-block border-radius-xl">
          <img
            :src="image"
            alt="img-blur-shadow"
            class="shadow img-fluid border-radius-xl"
          />
        </a>
      </div>
      <div class="p-3 card-body">
        <p class="mb-0 text-sm text-gradient text-dark">{{ store }}</p>
        <a href="javascript:;">
          <h3>{{ title }}</h3>
          <h4>$ 50.90</h4>
        </a>
        <div class="d-flex small text-warning mb-2">
          <i class="fa fa-solid fa-star"></i>
          <i class="fa fa-solid fa-star"></i>
          <i class="fa fa-solid fa-star"></i>
          <i class="fa fa-solid fa-star"></i>
          <i class="fa fa-solid fa-star"></i>
        </div>
        <p class="mb-4 text-sm">
          {{ description }}
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <button
            type="button"
            class="mb-0 btn btn-sm"
            :class="`btn-outline-${action.color}`"
          >
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import img1 from "@/assets/img/home-decor-1.jpg";

export default {
  name: "DefaultProjectCard",
  props: {
    image: {
      type: String,
      default: img1,
    },
    store: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Default Project Card",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    const action = ref({
      color: "success",
      label: "Agregar al carrito",
    });
    return { action };
  },
};
</script>
<style scoped>
.md-top {
  margin-top: 20px;
}
</style>
