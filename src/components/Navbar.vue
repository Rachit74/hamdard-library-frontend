<script setup>
import { ref, onMounted } from 'vue';

const loggedIn = ref(false);

const checkLogin = ()=> {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token === null) {
        loggedIn.value = false;
    } else {
        loggedIn.value = true;
    }
}

const logout = () => {
    localStorage.removeItem('token');
    loggedIn.value = false;

}

onMounted(checkLogin);
</script>

<template>
    <nav>
        <ul class="nav-left">
            <li class="brand"><RouterLink to="/">Hamdard Library</RouterLink></li>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/departments">Departments</RouterLink></li>
            <li><a href="">Upload</a></li>
        </ul>
        <ul class="nav-right">
            <div v-if="!loggedIn">
            <RouterLink to="/login">Login</RouterLink><br>
            <RouterLink to="/register">Register</RouterLink>
            </div>
            <div v-else>
                <button @click="logout">Logout</button>
            </div>
        </ul>
    </nav>
</template>
