<script setup>
</script>

<template>
    <div class="departments-view">
        <div class="page-header">
            <h3>Find your department</h3>
            <p>Select a department to browse its uploaded files.</p>
        </div>

        <ul class="dept-grid">
            <li><RouterLink to="/files/SEST">SEST</RouterLink></li>
            <li><RouterLink to="/files/SAHSR">SAHSR</RouterLink></li>
            <li><RouterLink to="/files/LAW">LAW</RouterLink></li>
            <li><RouterLink to="/files/SMBS">SMBS</RouterLink></li>
            <li><RouterLink to="/files/SUMER">SUMER</RouterLink></li>
            <li><RouterLink to="/files/SCLS">SCLS</RouterLink></li>
            <li><RouterLink to="/files/SPER">SPER</RouterLink></li>
            <li><RouterLink to="/files/SNSAH">SNSAH</RouterLink></li>
            <li><RouterLink to="/files/SIST">SIST</RouterLink></li>
            <li><RouterLink to="/files/SHSS">SHSS</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.departments-view {
    padding: 2.5rem 1.5rem;
    max-width: 1060px;
    margin: 0 auto;
    width: 100%;
}

.page-header {
    margin-bottom: 2rem;
}

.page-header h3 {
    margin-bottom: 0.4rem;
}

.page-header p {
    font-size: 0.93rem;
    color: var(--text-muted);
}

.dept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    list-style: none;
}

.dept-grid li a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background: var(--surface);
    border: 1.5px solid var(--surface-border);
    border-radius: var(--radius-md);
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--green-700);
    letter-spacing: 0.05em;
    text-decoration: none;
    box-shadow: var(--shadow-sm);
    transition:
        background var(--transition),
        color var(--transition),
        border-color var(--transition),
        box-shadow var(--transition),
        transform var(--transition);
}

.dept-grid li a:hover {
    background: var(--green-900);
    color: #fff;
    border-color: var(--green-900);
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
}

@media (max-width: 480px) {
    .dept-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .dept-grid li a {
        height: 68px;
        font-size: 0.88rem;
    }
}
</style>