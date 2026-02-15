<script setup>
defineProps({
    file: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="file-card">
        <div class="file-header">
            <h4>{{ file.file_name }}</h4>
            <span class="semester">Sem {{ file.semester }}</span>
        </div>
        <div class="file-footer">
            <span class="department">{{ file.file_department }}</span>
            <a :href="file.file_path" target="_blank" class="download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open
            </a>
        </div>
    </div>
</template>

<style scoped>
.file-card {
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-md);
    padding: 1.1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    box-shadow: var(--shadow-sm);
    transition:
        box-shadow var(--transition),
        transform var(--transition),
        border-color var(--transition);
}

.file-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--green-300);
}

.file-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
}

.file-header h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.4;
    flex: 1;
    /* clamp long names */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.semester {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--green-600);
    background: var(--accent-subtle);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: 0.03em;
}

.file-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.6rem;
    border-top: 1px solid var(--surface-border);
}

.department {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--accent);
    border: 1.5px solid var(--green-300);
    border-radius: var(--radius-sm);
    padding: 0.3rem 0.75rem;
    transition:
        background var(--transition),
        color var(--transition),
        border-color var(--transition);
    line-height: 1;
}

.download-btn:hover {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
}
</style>