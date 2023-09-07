<template>
  <form class="login" @submit.prevent="login">
    <h1>Sign in</h1>
    <label>Email</label>
    <input type="text" required v-model="email">
    <label>Password</label>
    <input type="password" required v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  /*text-align: center;*/
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}
.login input, button {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
}
hr {
  margin: 10px 0;
}
</style>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login () {
      const userData = {
        email: this.email,
        password: this.password,
      };

      this.$store
          .dispatch('AUTH_REQUEST', userData)
          .then(() => this.$router.push("/"));
    },
  },
};
</script>