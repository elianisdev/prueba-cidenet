<script setup>
import AddProduct from "../add-product/AddProduct.vue";
import {ref} from "vue";
import './styles.css';

const props = defineProps({
  searchKey: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['handleSearch']);
const keyword = ref(props.searchKey);

</script>
<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">
        <img class="img-logo" src="@/assets/images/img.png" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
        </ul>
        <div class="d-flex">
          <AddProduct />
          <input class="form-control me-2" type="search" placeholder="Search serial..."
                 v-model="keyword">
          <button class="btn btn-outline-success btn-sm btn-search"
                  @click="emit('handleSearch', keyword)" type="button">
            <i class="bi bi-search"></i>
            Search </button>
        </div>
      </div>
    </div>
  </nav>
</template>
