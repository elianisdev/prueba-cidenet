<script setup>
import {ref} from "vue";
import moment from "moment";
import InventoryApi from "../../services/InventoryApi";
import ModalAdd from "../helpers/modal/ModalAdd.vue";
import './styles.css';

const item = ref({
  serial: "342423423",
  connection_type: "directa",
  storage_system: "interno",
  condition: "nuevo",
  owner: "RF",
  location: "Almacen palmira",
  manufacturer: "yes",
  purchase: moment("2022-07-28 03:08:49.340514").format('YYYY-MM-DDTHH:mm:ss.SSS'),
  i_max: 6345.654,
  i_b: 21.5,
  i_n: 876.5,
  seals: 545.65
});
const action = ref('');
const message = ref('');

const addItem = async () => {
    const data = {...item.value};
    data.purchase = moment(data.purchase).format("YYYY-MM-DD HH:mm:ss.SSSSSS");
    const response = await InventoryApi.addItem(data);
    if (response.id) {
      action.value = 'success';
      message.value = 'Product saved successfully!'
    } else {
      action.value = 'fail';
      message.value = `Error: ${response.detail[0].loc[1]} ${response.detail[0].msg}`
    }
}

</script>
<template>
  <button class="btn btn-outline-primary btn-add-product me-2 btn-sm"
          data-bs-toggle="modal" data-bs-target="#addProductModal"
          type="button">
    <i class="bi bi-plus-lg"></i>
    Add Product</button>

  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-body">
                  <form>
                    <div class="mb-3">
                      <label for="serial" class="form-label">Serial</label>
                      <input type="text" class="form-control" id="serial" v-model="item.serial">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Connection Type</label>
                      <select class="form-select" v-model="item.connection_type">
                        <option value="directa">Directa</option>
                        <option value="semi-directa">Semi directa</option>
                        <option value="indirecta">Indirecta</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Storage System</label>
                      <select class="form-select" v-model="item.storage_system">
                        <option value="interno">Interno</option>
                        <option value="externo">Externo</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Condition</label>
                      <select class="form-select" v-model="item.condition">
                        <option value="nuevo">Nuevo</option>
                        <option value="usado">Usado</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Owner</label>
                      <select class="form-select" v-model="item.owner">
                        <option value="RF">RF</option>
                        <option value="OR">OR</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="location" class="form-label">Location</label>
                      <input type="text" class="form-control" id="location" v-model="item.location">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Manufacturer</label>
                      <select class="form-select" v-model="item.manufacturer">
                        
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="purchase" class="form-label">Purchase</label>
                      <input type="datetime-local" class="form-control" step=".01" id="purchase" v-model="item.purchase">
                    </div>
                    <div class="mb-3">
                      <label for="i_max" class="form-label">Imax</label>
                      <input type="number" class="form-control" id="i_max" v-model="item.i_max"
                      step=".01" min="0">
                    </div>
                    <div class="mb-3">
                      <label for="i_b" class="form-label">Ib</label>
                      <input type="number" class="form-control" id="i_b" v-model="item.i_b"
                      step=".01" min="0">
                    </div>
                    <div class="mb-3">
                      <label for="i_n" class="form-label">In</label>
                      <input type="number" class="form-control" id="i_n" v-model="item.i_n"
                      step=".01" min="0">
                    </div>
                    <div class="mb-3">
                      <label for="seals" class="form-label">Seals</label>
                      <input type="number" class="form-control" id="seals" v-model="item.seals"
                      step=".01" min="0">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-sm btn-outline-primary"
                  data-bs-toggle="modal" data-bs-target="#addModal"
                  @click="addItem">Save</button>
        </div>
      </div>
    </div>
  </div>

  <ModalAdd :action="action" :message="message" />
</template>
