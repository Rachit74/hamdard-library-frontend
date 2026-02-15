<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import FileComponent from '@/components/FileComponent.vue';
import api from '@/axios.js';

const files = ref([]);
const loading = ref(true);
const error = ref(null);

const props = defineProps({
    department: String
});

const getFiles = async () => {
    try {
        const response = await api.get(`/files/?department=${props.department}`);
        files.value = response.data;
        loading.value = false;
    } catch (err) {
        error.value = err.response ?? { status: 'Network Error', data: { error: 'Could not reach server' } };
        loading.value = false;
    }
};

onMounted(getFiles);
</script>

<template>
    <div class="files-view">

        <div class="page-header">
            <span class="dept-badge">{{ props.department }}</span>
            <h3>Department Files</h3>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="status-block loading">
            <span class="spinner"></span>
            <p>Loading files...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="status-block error">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
                <p class="error-msg">{{ error.data?.detail ?? error.data?.error }}</p>
                <span class="error-code">{{ error.status }}</span>
            </div>
        </div>

        <!-- Empty -->
        <div v-else-if="files.length === 0" class="status-block empty">
            <p>No files uploaded for this department yet.</p>
        </div>

        <!-- Files grid -->
        <div v-else class="files-grid">
            <FileComponent v-for="file in files" :key="file.id" :file="file" />
        </div>

    </div>
</template>

<style scoped>
.files-view {
    padding: 2.5rem 1.5rem;
    max-width: 1060px;
    margin: 0 auto;
    width: 100%;
}

/* Header */
.page-header {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 2rem;
}

.page-header h3 {
    margin: 0;
}

.dept-badge {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--green-600);
    background: var(--accent-subtle);
    border: 1px solid var(--green-300);
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    flex-shrink: 0;
}

/* Files grid */
.files-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
}

/* Shared status block */
.status-block {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 1.25rem 1.5rem;
    border-radius: var(--radius-md);
    font-size: 0.93rem;
    margin-top: 0.5rem;
}

.status-block p {
    margin: 0;
    max-width: none;
}

/* Loading */
.loading {
    background: var(--accent-subtle);
    border: 1px solid var(--green-300);
    color: var(--green-700);
}

.spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2.5px solid var(--green-300);
    border-top-color: var(--green-600);
    border-radius: 50%;
    flex-shrink: 0;
    animation: spin 0.7s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Error */
.error {
    background: #fff4f4;
    border: 1px solid #fcc;
    color: #7f1d1d;
}

.error svg {
    flex-shrink: 0;
    color: #ef4444;
}

.error-msg {
    font-weight: 500;
    color: #b91c1c;
}

.error-code {
    font-size: 0.78rem;
    color: #b91c1c;
    opacity: 0.65;
}

/* Empty */
.empty {
    background: var(--surface);
    border: 1.5px dashed var(--surface-border);
    color: var(--text-muted);
    font-style: italic;
}

@media (max-width: 480px) {
    .files-grid {
        grid-template-columns: 1fr;
    }
}
</style>