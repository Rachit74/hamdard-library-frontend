<script setup>
</script>

<template>
    <nav>
        <div class="nav-inner">
            <ul class="nav-left">
                <li class="brand">
                    <RouterLink to="/">
                        <span class="brand-icon">📚</span>
                        Hamdard Library
                    </RouterLink>
                </li>
            </ul>
            <ul class="nav-links">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/departments">Departments</RouterLink></li>
                <li><RouterLink to="/upload" class="nav-upload">Upload</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background: var(--green-900);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 16px rgba(13, 43, 31, 0.3);
}

.nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    max-width: 1060px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* Brand */
ul.nav-left {
    display: flex;
    align-items: center;
}

ul.nav-left li.brand a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0;
    text-decoration: none;
    transition: color var(--transition);
}

ul.nav-left li.brand a:hover {
    color: var(--green-300);
}

.brand-icon {
    font-size: 1.1rem;
    line-height: 1;
}

/* Nav links */
ul.nav-links {
    display: flex;
    align-items: center;
    gap: 0.15rem;
    list-style: none;
}

ul.nav-links li a {
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.88rem;
    font-weight: 400;
    padding: 0.45rem 0.9rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
    transition: background var(--transition), color var(--transition);
    letter-spacing: 0.01em;
}

ul.nav-links li a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}

ul.nav-links li a.router-link-active {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
}

/* Upload CTA stands out */
ul.nav-links li a.nav-upload {
    color: var(--green-300);
    border: 1px solid rgba(114, 212, 165, 0.35);
    margin-left: 0.4rem;
}

ul.nav-links li a.nav-upload:hover,
ul.nav-links li a.nav-upload.router-link-active {
    background: rgba(114, 212, 165, 0.12);
    color: var(--green-300);
    border-color: rgba(114, 212, 165, 0.6);
}

@media (max-width: 600px) {
    .nav-inner {
        padding: 0 1rem;
    }

    ul.nav-links li a {
        padding: 0.4rem 0.6rem;
        font-size: 0.82rem;
    }

    ul.nav-left li.brand a {
        font-size: 0.95rem;
    }
}
</style>