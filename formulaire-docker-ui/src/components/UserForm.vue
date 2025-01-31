<template>
  <div>
    <h2>Créer un utilisateur</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="firstName">Prénom:</label>
        <input type="text" id="firstName" v-model="user.firstName" required />
      </div>

      <div>
        <label for="lastName">Nom:</label>
        <input type="text" id="lastName" v-model="user.lastName" required />
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>

      <div>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>

      <button type="submit">Créer</button>
    </form>

    <!-- Affichage du message de succès ou erreur -->
    <div v-if="message" :class="messageClass">{{ message }}</div>
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
      message: "",
      messageClass: "",
    };
  },
  methods: {
    async submitForm() {
      const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
      });
      try {
        // Envoie de la requête POST à votre API
        const response = await api.post("/users", this.user);

        // Affichage du message de succès
        this.message = "Utilisateur créé avec succès!";
        this.messageClass = "success";

        // Réinitialiser le formulaire
        this.user = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        };
      } catch (error) {
        console.log(error);
        // En cas d'erreur, affichage du message d'erreur
        this.message = "Erreur lors de la création de l'utilisateur";
        this.messageClass = "error";
      }
    },
  },
};
</script>

<style scoped>
.success {
  color: green;
}

.error {
  color: red;
}
</style>
