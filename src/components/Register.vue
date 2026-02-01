<template>
  <div>
    <h2>Register</h2>
    <input v-model="user.username" placeholder="Username" />
    <input v-model="user.email" placeholder="Email" />
    <input type="password" v-model="user.password" placeholder="Password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { user: {} };
  },
  methods: {
    register() {
      axios.post("http://localhost:8080/api/register", this.user)
        .then(() => {
          alert("Registered Successfully");
          this.$router.push("/login");
        });
    }
  }
};
</script>
