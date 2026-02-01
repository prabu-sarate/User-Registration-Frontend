<template>
  <div>
    <h2>Admin Panel</h2>

    <table border="1">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td>{{ u.username }}</td>
          <td>{{ u.email }}</td>
          <td>
            <button @click="deleteUser(u.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios.get("http://localhost:8080/api/users")
      .then(res => {
        this.users = res.data;
      });
  },
  methods: {
    deleteUser(id) {
      axios.delete(`http://localhost:8080/api/users/${id}`)
        .then(() => {
          this.users = this.users.filter(u => u.id !== id);
        });
    }
  }
};
</script>
