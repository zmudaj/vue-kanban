<template>
  <div class="home">
    <h1>Welcome to the Kanban Project</h1>
    <h2>Please <router-link to="/login">Log In</router-link> or <router-link to="/register">Sign Up</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the Kanban Project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
