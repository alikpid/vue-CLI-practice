<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div v-if="!$store.getters.isAuthenticated">
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Sign In</router-link>
    </div>
    <div v-else>
      <router-link to="/" @click="logout">Log out</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    logout() {
      this.$store
          .dispatch('AUTH_LOGOUT')
          .then(() => this.$router.push('/'));
    },
  },
};
</script>
