<script setup>
import NavBar from "../../components/navbar/NavBar.vue";
import ProductList from "../../components/product-list/ProductList.vue";
import {ref} from "vue";

const searchKey = ref('');

const onHandleSearch = (data) => {
  searchKey.value = data;
}

</script>
<template>
  <main class="container">
    <header>
      <NavBar :searchKey="searchKey" @handleSearch="onHandleSearch"/>
    </header>
    <section class="mx-3">
      <div class="my-4">
        <h2>Inventory</h2>
        <p class="mb-4">Products list of inventory</p>
        <ProductList :searchKey="searchKey"/>
      </div>
    </section>
  </main>
</template>
