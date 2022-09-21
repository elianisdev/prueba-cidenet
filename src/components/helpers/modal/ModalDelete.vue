<script setup>
import Loading from "../loading/Loading.vue";

defineProps({
  action: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const reload = () => {
  location.reload();
}

</script>
<template>
  <div class="modal" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="col-md-12" v-if="message===''">
            <Loading />
          </div>
          <i v-if="action === 'success'" class="bi bi-check-circle text-success fs-3 p-2"></i>
          <i v-if="action === 'fail'" class="bi bi-x-circle text-danger fs-3 p-2"></i>
          <br>
          <h5 class="modal-title" id="deleteModalLabel">
            {{message}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer" v-show="message!==''">
          <button type="button" class="btn btn-sm" :class="action === 'success' ? 'btn-outline-success' : 'btn-outline-danger'"
                  data-bs-dismiss="modal" @click="reload">Accept</button>
        </div>
      </div>
    </div>
  </div>
</template>
