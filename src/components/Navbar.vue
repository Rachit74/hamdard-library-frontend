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
            <li><RouterLink to="/upload">Upload</RouterLink></li>
        </ul>
    </nav>
</template>
