<script setup>
import './styles.css';
import {onMounted, ref} from "vue";
import router from "../../router";

const credentials = ref({
  username: '',
  password: '',
});
const errorLogin = ref(false);
const loading = ref(false);

const submitLogin = () => {
  loading.value = true;
  errorLogin.value = false;
  setTimeout(() => {
    loading.value = false;
    if (credentials.value.username === 'admin' && credentials.value.password === 'admin') {
      localStorage.setItem('credentials', JSON.stringify(credentials.value));
      router.push('/home');
    } else {
      errorLogin.value = true;
    }
  }, 2000);
}

onMounted(()=> {
  let data = localStorage.getItem('credentials');
  if(data) {
    data = JSON.parse(data);
    if (data.username === 'admin' && data.password === 'admin') {
      router.push('/home');
    }
  }
})

</script>

<template>
  <main class="container text-center">

    <div class="col-md-12">
      <div class="form-signin">
        <img class="mb-4 img-logo" src="@/assets/images/img.png" alt="logo">
        <h1 class="h3 mb-3 fw-normal">Log In</h1>

        <div class="form-floating">
          <input type="text" class="form-control" v-model="credentials.username"
                 id="username" placeholder="name@example.com">
          <label for="username">Username</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" v-model="credentials.password"
                 id="password" placeholder="Password">
          <label for="password">Password</label>
        </div>
        <div class="alert alert-danger" role="alert" v-if="errorLogin">
          Usuario o contraseña incorrecto!
        </div>

        <button class="w-100 btn btn-primary" type="button" @click="submitLogin">
          Login
          <span class="spinner-border text-light spinner-border-sm" role="status" v-if="loading">
            <span class="sr-only"></span>
          </span>
        </button>
        <p class="mt-5 mb-3 text-muted">© EnerBit challenge - Prueba Cidenet 2022 <br>
        Desarrollado por Eliana Suancha</p>
      </div>
    </div>

  </main>
</template>

<style scoped>

</style>
