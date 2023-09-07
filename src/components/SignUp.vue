<template>
  <form class="sign-up" @submit.prevent="signUp">
    <h1>Sign up</h1>
    <label>Full name</label>
    <input type="text" required v-model="fio">
    <label>Email</label>
    <input type="email" required v-model="email">
    <label>Password</label>
    <input type="password" required v-model="password">
    <hr>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}
.login input, button {
  border: 1px solid black;
  padding: 10px;
}
hr {
  margin: 10px 0;
}
</style>

<script>
export default {
  data() {
    return {
      fio: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp () {
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };

      this.$store
          .dispatch('REG_REQUEST', userData)
          .then(() => this.$router.push("/"));
    },
  },
};
</script>