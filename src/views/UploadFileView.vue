<script setup>
import { ref } from 'vue';
import api from '@/axios.js';

const fileName = ref('');
const filePath = ref(null);
const fileDepartment = ref('');
const fileSemester = ref('');

const uploading = ref(false);
const success = ref(false);
const error = ref(null);

const departments = [
    'SEST', 'SAHSR', 'HIMSER', 'SUMER', 'SCLS',
    'SPER', 'SNSAH', 'SIST', 'SMBS', 'SHSS', 'LAW'
];

const semesters = Array.from({ length: 10 }, (_, i) => i + 1);

const handleFileChange = (e) => {
    filePath.value = e.target.files[0];
};

const uploadFile = async () => {
    try {
        uploading.value = true;
        error.value = null;
        success.value = false;

        const formData = new FormData();
        formData.append('file_name', fileName.value);
        formData.append('file_path', filePath.value);
        formData.append('file_department', fileDepartment.value);
        formData.append('semester', fileSemester.value);

        await api.post(`/files/create/`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        success.value = true;
        fileName.value = '';
        filePath.value = null;
        fileDepartment.value = '';
        fileSemester.value = '';
        uploading.value = false;
    } catch (err) {
        uploading.value = false;
        error.value = err.response;
    }
};
</script>

<template>
    <div class="upload-view">
        <div class="page-header">
            <h3>Upload a File</h3>
            <p>Share resources with your department.</p>
        </div>

        <!-- Success banner -->
        <div v-if="success" class="banner success-banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            File uploaded successfully!
        </div>

        <!-- Error banner -->
        <div v-if="error" class="banner error-banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {{ error.data?.detail ?? error.data?.error ?? 'Something went wrong.' }}
        </div>

        <form @submit.prevent="uploadFile">

            <div class="field">
                <label for="fileName">File Name</label>
                <input id="fileName" type="text" v-model="fileName" placeholder="e.g. Data Structures Lecture 3"
                    required />
            </div>

            <div class="field">
                <label for="filePath">File</label>
                <div class="file-input-wrapper">
                    <input id="filePath" type="file" @change="handleFileChange" required />
                    <span class="file-hint">PDF, DOCX, PPTX…</span>
                </div>
            </div>

            <div class="field-row">
                <div class="field">
                    <label for="fileDepartment">Department</label>
                    <select id="fileDepartment" v-model="fileDepartment" required>
                        <option value="" disabled>Select</option>
                        <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
                    </select>
                </div>

                <div class="field">
                    <label for="fileSemester">Semester</label>
                    <select id="fileSemester" v-model="fileSemester" required>
                        <option value="" disabled>Select</option>
                        <option v-for="sem in semesters" :key="sem" :value="sem">{{ sem }}</option>
                    </select>
                </div>
            </div>

            <button type="submit" :disabled="uploading" class="submit-btn">
                <span v-if="uploading" class="btn-spinner"></span>
                {{ uploading ? 'Uploading...' : 'Upload File' }}
            </button>

        </form>
    </div>
</template>

<style scoped>
.upload-view {
    padding: 2.5rem 1.5rem;
    max-width: 540px;
    margin: 0 auto;
    width: 100%;
}

.page-header {
    margin-bottom: 1.75rem;
}

.page-header h3 {
    margin-bottom: 0.3rem;
}

.page-header p {
    font-size: 0.92rem;
    color: var(--text-muted);
    margin: 0;
}

/* Banners */
.banner {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.85rem 1.1rem;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1.25rem;
}

.success-banner {
    background: var(--accent-subtle);
    border: 1px solid var(--green-300);
    color: var(--green-700);
}

.error-banner {
    background: #fff4f4;
    border: 1px solid #fca5a5;
    color: #b91c1c;
}

/* Form */
form {
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: var(--radius-lg);
    padding: 2rem 2rem;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

/* Fields */
.field {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

input[type="text"],
select {
    font-family: var(--font-body);
    font-size: 0.93rem;
    color: var(--text-primary);
    background: var(--surface-raised);
    border: 1.5px solid var(--surface-border);
    border-radius: var(--radius-sm);
    padding: 0.6rem 0.85rem;
    outline: none;
    width: 100%;
    transition: border-color var(--transition), box-shadow var(--transition);
}

input[type="text"]:focus,
select:focus {
    border-color: var(--green-400);
    box-shadow: 0 0 0 3px rgba(42, 153, 104, 0.12);
}

input::placeholder {
    color: var(--text-muted);
}

select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath fill='none' stroke='%233d6b56' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.9rem center;
    padding-right: 2.25rem;
    cursor: pointer;
}

/* File input */
.file-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

input[type="file"] {
    font-family: var(--font-body);
    font-size: 0.88rem;
    color: var(--text-secondary);
    background: var(--surface-raised);
    border: 1.5px dashed var(--surface-border);
    border-radius: var(--radius-sm);
    padding: 0.65rem 0.85rem;
    cursor: pointer;
    width: 100%;
    transition: border-color var(--transition);
}

input[type="file"]:hover {
    border-color: var(--green-400);
}

.file-hint {
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 0.02em;
}

/* Submit button */
.submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-family: var(--font-body);
    font-size: 0.93rem;
    font-weight: 600;
    color: #fff;
    background: var(--accent);
    border: none;
    border-radius: var(--radius-sm);
    padding: 0.75rem 1.75rem;
    cursor: pointer;
    align-self: flex-start;
    letter-spacing: 0.01em;
    transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
    margin-top: 0.25rem;
}

.submit-btn:hover:not(:disabled) {
    background: var(--accent-hover);
    box-shadow: 0 4px 14px rgba(42, 153, 104, 0.35);
    transform: translateY(-1px);
}

.submit-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
}

/* Button spinner */
.btn-spinner {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.65s linear infinite;
    flex-shrink: 0;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@media (max-width: 480px) {
    form {
        padding: 1.5rem 1.25rem;
    }

    .field-row {
        grid-template-columns: 1fr;
    }

    .submit-btn {
        width: 100%;
    }
}
</style>