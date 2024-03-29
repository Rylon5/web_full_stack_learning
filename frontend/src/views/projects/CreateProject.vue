<template>
  <div class="wrapper">
    <ProjectsNavbar/>
  </div>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Create project </h2>
      <form id="create-project-form" @submit.prevent="createProject">
        <fieldset>
        <legend>Register new project</legend>
          <div class="form-group col-md-12">
            <label for="name"> Project name: </label>
            <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter project name">
          </div>
          <div class="form-group col-md-12">
            <label for="description"> Project description: </label>
            <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter project description">
          </div>
          <div class="form-group col-md-12">
            <label for="link"> Project link: </label>
            <input type="text" id="link"  v-model="link" name="link" placeholder="Enter project link" class="form-control">
          </div>

          <div class="form-group col-md-4 pull-right">
            <button class="btn btn-success submit" type="submit"> Create Project </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { server } from "@/utils/helper"
import axios from "axios";
import router from "@/router";
import ProjectsNavbar from "@/components/navbars/ProjectsNavbar.vue";
  export default {
    components: {ProjectsNavbar},
    data() {
      return {
        name: "",
        description: "",
        link: ""
      };
    },
    methods: {
      createProject() {
        let projectData = {
          name: this.name,
          description: this.description,
          link: this.link
        }
        this.name = "";
        this.description = "";
        this.link = "";
        this.__submitToServer(projectData)
      },
      __submitToServer(data) {
        axios.post(`${server.baseURL}/projects`, data)
            .then(() => router.push({ name: "projects/create" }));
      }
    }
  }
</script>

<style>
  label {
    margin-right: 10px;
  }

  .form-group {
    margin: 5px 0 5px 0;
  }
</style>