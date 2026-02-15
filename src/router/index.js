import ApprovalView from "@/views/ApprovalView.vue";
import Departments from "@/views/Departments.vue";
import Files from "@/views/Files.vue";
import Home from "@/views/Home.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import UploadFileView from "@/views/UploadFileView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/departments', component: Departments },
    { path: '/files/:department', component: Files, props: true},
    { path: '/login', component: LoginView},
    { path: '/register', component: RegisterView},
    { path: '/approval', component: ApprovalView },
    { path: '/upload', component: UploadFileView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router