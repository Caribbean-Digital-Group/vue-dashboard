<template>
  <div class="container-fluid">
    <banner-header />
    <div class="card card-body mx-3 mx-md-4 mt-n6">
      <div class="row">
        <div class="row mt-4">
          <div class="col-12">
            <div class="mb-5 ps-3">
              <search />
              <material-input id="search" label="Search here" />
              <div class="row">
                <div class="col-6">
                  <div class="card card-body margin-default">
                    <div class="row">
                      <default-card-item />
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card card-body margin-default">
                    <div class="row gx-4">
                      <default-card-item />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <default-product-card
                title="Modern"
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                store="Tienda 01"
                description="As Uber works through a huge amount of internal
                management turmoil."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// Header
import BannerHeader from "@/components/Headers/BannerHeader.vue";
// Search
import Search from "./components/store/Search.vue";
// Cards
import DefaultCardItem from "@/components/Cards/DefaultCardItem.vue";
// Products
import DefaultProductCard from "./components/store/Products/DefaultProductCard.vue";
// API
import useApi from "@/composables/useApi.js";
const { getExample, getAllStores } = useApi();

onMounted(async () => {
  console.log("Start...");
  let result = await getExample();
  console.log(result);
  let data = await getAllStores();
  console.log(data);
});
</script>
<style scoped>
.margin-default {
  margin-top: 15px;
}
</style>
