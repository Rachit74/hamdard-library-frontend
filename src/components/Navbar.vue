<script setup>

let loggedIn = false;

const checkLogin = ()=> {
    const token = localStorage.getItem('token');

    if (token === null) {
        loggedIn = true;
    } else {
        loggedIn = false;
    }
}

checkLogin();
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
            <div v-if="loggedIn">
            <RouterLink to="/login">Login</RouterLink><br>
            <RouterLink to="/register">Register</RouterLink>
            </div>
            <div v-else>
                Logout
            </div>
        </ul>
    </nav>
</template>
