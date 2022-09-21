<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <!-- Modal Product Info -->
  <div class="modal fade modal-lg" id="productInfoModal" tabindex="-1" aria-labelledby="productInfoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productInfoModalLabel">Item Detail</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Id</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">
                            {{item.id}}
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Serial</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">
                            {{item.serial}}
                          </p>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Connection Type</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.connection_type}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Storage System</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.storage_system}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Condition</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.condition}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Owner</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.owner}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Location</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.location}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Manufacturer</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.manufacturer}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Purchase</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.purchase}}</p>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Imax</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.i_max}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Ib</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.i_b}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">In</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.i_n}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Seals</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.seals}}</p>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Created at</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.created_at}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Updated at</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">{{item.updated_at}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal" data-bs-target="#editProductModal"
          ><i class="bi bi-pencil-square"></i> Edit</button>
          <button type="button" class="btn btn-danger btn-sm"
                  data-bs-toggle="modal" data-bs-target="#deleteProductModal"
          ><i class="bi bi-trash"></i> Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
