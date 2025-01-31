<template>
  <div v-if="user">
    <h2>Détails de l'utilisateur</h2>
    <p><strong>Prénom:</strong> {{ user.firstName }}</p>
    <p><strong>Nom:</strong> {{ user.lastName }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Mot de passe:</strong> {{ user.password }}</p>
  </div>
  <p v-else>Chargement...</p>
</template>

<script>
import axios from "axios";

// Création d'une instance Axios avec une baseURL dynamique
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export default {
  props: ["id"],
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async fetchUserDetails() {
      try {
        const response = await api.get(`/users/${this.id}`);
        this.user = response.data;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'utilisateur:",
          error
        );
      }
    },
  },
  created() {
    this.fetchUserDetails();
  },
};
</script>

<style scoped>
/* Ajoutez des styles ici si nécessaire */
</style>
