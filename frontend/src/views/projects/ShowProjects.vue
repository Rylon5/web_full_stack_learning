<template>
  <div class="wrapper">
    <ProjectsNavbar></ProjectsNavbar>
  </div>
  <div class="container text-center">
    <h5><span class="glyphicon glyphicon-time"></span> Projects: </h5>
  </div>
  <table class="container text-center">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Link</th>
      </tr>
    </thead>
    <tbody v-for="project in projects" :key="project.id">
      <tr>
        <td>
          {{ project.name }}
        </td>
        <td>
          {{ project.description }}
        </td>
        <td>
          <a :href="project.link">{{ project.link }}</a>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import axios from "axios"
import { server } from "@/utils/helper"
import ProjectsNavbar from "@/components/navbars/ProjectsNavbar.vue";
export default {
  components: {ProjectsNavbar},
  data() {
    return {
      id: 0,
      projects: [],
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      axios.get(`${server.baseURL}/projects`).then(response => (this.projects = response.data))
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-left: auto;
  margin-right: auto;
}

table th, td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

table td {
  text-align: center;
}
</style>