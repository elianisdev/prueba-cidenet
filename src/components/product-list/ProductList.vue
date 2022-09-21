<script setup>
import {onMounted, onUpdated, ref} from "vue";
import InventoryApi from "../../services/InventoryApi";
import ProductInfo from "../product-info/ProductInfo.vue";
import Loading from "../helpers/loading/Loading.vue";
import {useRoute} from "vue-router";
import EditProduct from "../edit-product/EditProduct.vue";
import DeleteProduct from "../delete-product/DeleteProduct.vue";

const props = defineProps({
  searchKey: {
    type: String,
    required: true,
  },
});

const data = ref({});
const loading = ref(false);
const items = ref([]);
const itemSelected = ref({});
const route = useRoute();
const serialKeyword = ref('');

const getItems = async () => {
  loading.value = true;
  const searchParams = {};
  searchParams.page = route.query.page-1 || 0;
  if(serialKeyword.value !== '') {
    searchParams.serial = serialKeyword.value;
    searchParams.page = 0;
  }
  data.value = await InventoryApi.getItems(searchParams);
  loading.value = false;
  items.value = data.value.items;
};

const onHoverItem = (data) => {
  itemSelected.value = data;
}

onMounted(async () => {
  await getItems();
});

onUpdated(async () => {
  if (props.searchKey !== serialKeyword.value) {
    serialKeyword.value = props.searchKey;
    await getItems();
  }
})

</script>
<template>
  <div class="col-md-12 table-responsive">
    <div class="row text-end">
      <span>{{data.total}} products founded</span>
    </div>
    <hr>
    <table class="table table-borderless table-hover">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Serial</th>
        <th scope="col">Connection Type</th>
        <th scope="col">Storage System</th>
        <th scope="col">Condition</th>
        <th scope="col">Owner</th>
        <th scope="col">Location</th>
        <th scope="col">Manufacturer</th>
        <th scope="col">Purchase</th>
        <th scope="col">Seals</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items" :key="index"
          v-if="!loading && items?.length"
          @click="onHoverItem(item)"
          data-bs-toggle="modal" data-bs-target="#productInfoModal">
        <td class="text-end">{{item.id}}</td>
        <td>{{item.serial}}</td>
        <td>{{item.connection_type}}</td>
        <td>{{item.storage_system}}</td>
        <td>{{item.condition}}</td>
        <td>{{item.owner}}</td>
        <td>{{item.location}}</td>
        <td>{{item.manufacturer}}</td>
        <td>{{item.purchase}}</td>
        <td class="text-end">{{item.seals}}</td>
        <td>
          <button type="button" class="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal" data-bs-target="#editProductModal"
          ><i class="bi bi-pencil-square"></i> Edit</button>
          <button type="button" class="btn btn-danger btn-sm"
                  data-bs-toggle="modal" data-bs-target="#deleteProductModal"
          ><i class="bi bi-trash"></i> Delete</button>
        </td>
      </tr>
      <tr v-if="loading">
        <td colspan="11">
          <div class="py-5 bg-light">
            <Loading />
          </div>
        </td>
      </tr>
      <tr v-if="!loading && (!items?.length || data?.detail)">
        <td colspan="11">
          <div class="py-5 bg-light text-center">
            <h5 class="m-5">Products not found.</h5>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <hr>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item"
        :class="data.previous_page === null ? 'disabled' : ''">
          <a class="page-link" :href="`/home?page=${data.previous_page+1}`">Previous</a>
        </li>
        <li class="page-item"
            :class="index === data.page+1 ? 'active': ''"
            v-for="index in data.pages" :key="index"
        ><a class="page-link"
            :href="`/home?page=${index}`">{{index}}</a></li>
        <li class="page-item"
            :class="data.next_page === null ? 'disabled' : ''"
        >
          <a class="page-link" :href="`/home?page=${data.next_page+1}`">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <ProductInfo :item="itemSelected" />
  <EditProduct :item="itemSelected" />
  <DeleteProduct :item="itemSelected" />
</template>
