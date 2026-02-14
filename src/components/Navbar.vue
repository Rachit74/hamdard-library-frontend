<template>
    <nav>
        <ul class="nav-left">
            <li class="brand"><RouterLink to="/">Hamdard Library</RouterLink></li>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/departments">Departments</RouterLink></li>
            <li><a href="">Upload</a></li>
        </ul>
        <ul class="nav-right">
            <li><a href="">Login</a></li>
            <li><a href="">Signup</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a1a2e;
    padding: 0 2rem;
}

ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
}

a, .router-link-active, .router-link-exact-active {
    color: #fff;
    text-decoration: none;
    padding: 1.2rem 0;
    display: block;
}

a:hover {
    color: #e0b54a;
}

.brand a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #e0b54a;
}

.router-link-active {
    border-bottom: 2px solid #e0b54a;
}
</style>