<template>
  <div>
    <!-- Formulaire d'ajout d'utilisateur -->
    <form @submit.prevent="submitForm">
      <div>
        <label for="firstName">Prénom :</label>
        <input type="text" id="firstName" v-model="user.firstName" required />
      </div>
      <div>
        <label for="lastName">Nom :</label>
        <input type="text" id="lastName" v-model="user.lastName" required />
      </div>
      <div>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <button type="submit">Ajouter</button>
    </form>

    <!-- Liste des utilisateurs -->
    <table v-if="users.length > 0">
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <router-link :to="'/users/' + user.id">{{
              user.firstName
            }}</router-link>
          </td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucun utilisateur trouvé.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      users: [], // Liste des utilisateurs
    };
  },
  created() {
    this.fetchUsers(); // Charger les utilisateurs dès le montage du composant
  },
  methods: {
    // Instance Axios avec une base URL dynamique
    api() {
      return axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
      });
    },

    // Envoi du formulaire pour ajouter un utilisateur
    async submitForm() {
      try {
        await this.api().post("/users", this.user);
        console.log("Utilisateur ajouté");

        // Réinitialiser le formulaire après l'ajout
        this.user = { firstName: "", lastName: "", email: "", password: "" };

        // Rafraîchir la liste des utilisateurs
        this.fetchUsers();
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'utilisateur:", error);
      }
    },

    // Récupérer la liste des utilisateurs
    async fetchUsers() {
      try {
        const response = await this.api().get("/users");
        this.users = response.data;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}
th {
  background-color: rgb(139, 44, 44);
  color: white;
}
</style>
