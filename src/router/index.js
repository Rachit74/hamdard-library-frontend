import Departments from "@/views/Departments.vue";
import Files from "@/views/Files.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/departments', component: Departments },
    { path: '/files/:department', component: Files, props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router