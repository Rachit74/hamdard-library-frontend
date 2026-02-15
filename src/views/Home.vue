<script setup>
</script>

<template>
    <div class="home-view">
        <div class="hero">
            <p class="eyebrow">Welcome to</p>
            <h1>Hamdard Library</h1>
            <p class="subtitle">
                Your central hub for academic files, resources, and department materials.
            </p>
            <div class="hero-actions">
                <RouterLink to="/departments" class="btn-primary">Browse Departments</RouterLink>
                <RouterLink to="/upload" class="btn-secondary">Upload a File</RouterLink>
            </div>
        </div>

        <div class="features">
            <div class="feature-card">
                <span class="feature-icon">🏛️</span>
                <h4>10 Departments</h4>
                <p>Access files from all faculties across Hamdard University.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">📂</span>
                <h4>Organised by Semester</h4>
                <p>Every file is tagged with its semester so you find exactly what you need.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">⬆️</span>
                <h4>Easy Uploads</h4>
                <p>Contribute resources in seconds with the simple upload form.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-view {
    padding: 2.5rem 1.5rem 4rem;
    max-width: 1060px;
    margin: 0 auto;
    width: 100%;
}

/* Hero */
.hero {
    padding: 3.5rem 0 3rem;
    max-width: 560px;
}

.eyebrow {
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--green-500);
    margin-bottom: 0.6rem;
    max-width: none;
}

.hero h1 {
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 46ch;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    flex-wrap: wrap;
}

.btn-primary {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    background: var(--accent);
    border-radius: var(--radius-sm);
    padding: 0.65rem 1.4rem;
    text-decoration: none;
    transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
    letter-spacing: 0.01em;
}

.btn-primary:hover {
    background: var(--accent-hover);
    box-shadow: 0 4px 14px rgba(42, 153, 104, 0.35);
    transform: translateY(-1px);
    color: #fff;
}

.btn-secondary {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--green-700);
    background: transparent;
    border: 1.5px solid var(--surface-border);
    border-radius: var(--radius-sm);
    padding: 0.63rem 1.4rem;
    text-decoration: none;
    transition: border-color var(--transition), background var(--transition), color var(--transition);
    letter-spacing: 0.01em;
}

.btn-secondary:hover {
    border-color: var(--green-400);
    background: var(--accent-subtle);
    color: var(--green-700);
}

/* Feature cards */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 2.5rem;
    border-top: 1px solid var(--surface-border);
}

.feature-card {
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-md);
    padding: 1.5rem 1.35rem;
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--transition), transform var(--transition);
}

.feature-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
}

.feature-icon {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 0.85rem;
    line-height: 1;
}

.feature-card h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: var(--text-primary);
}

.feature-card p {
    font-size: 0.87rem;
    color: var(--text-muted);
    line-height: 1.6;
    max-width: none;
    margin: 0;
}

@media (max-width: 500px) {
    .hero {
        padding: 2rem 0 2rem;
    }

    .features {
        grid-template-columns: 1fr;
    }
}
</style>