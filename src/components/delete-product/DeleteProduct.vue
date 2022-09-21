<script setup>
import {ref} from "vue";
import InventoryApi from "../../services/InventoryApi";
import ModalDelete from "../helpers/modal/ModalDelete.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const action = ref('');
const message = ref('');

const deleteItem = async () => {
    const response = await InventoryApi.deleteItem(props.item.id);
    if (response.id) {
      action.value = 'success';
      message.value = 'Product deleted successfully!'
    } else {
      action.value = 'fail';
      message.value = `Error: ${response.detail[0].loc[1]} ${response.detail[0].msg}`
    }
}

</script>
<template>
  <div class="modal fade" id="deleteProductModal" tabindex="-1" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteProductModalLabel">Delete Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              Are you sure to delete the product with serial <strong>{{item.serial}}</strong>?
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-sm btn-outline-danger"
                  data-bs-toggle="modal" data-bs-target="#deleteModal"
                  @click="deleteItem">Delete</button>
        </div>
      </div>
    </div>
  </div>

  <ModalDelete :action="action" :message="message"/>
</template>
