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
            <span class="semester">Semester {{ file.semester }}</span>
        </div>
        <div class="file-footer">
            <span class="department">{{ file.file_department }}</span>
            <a :href="file.file_path" target="_blank" class="download-btn">Open</a>
        </div>
    </div>
</template>

<style scoped>
.file-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: box-shadow 0.2s;
}

.file-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.file-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.file-header h4 {
    font-size: 1rem;
    color: #1a1a2e;
    margin: 0;
}

.semester {
    font-size: 0.8rem;
    background: #f0f0f0;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    color: #555;
}

.file-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.department {
    font-size: 0.85rem;
    color: #888;
}

.download-btn {
    background: #1a1a2e;
    color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    transition: background 0.2s;
}

.download-btn:hover {
    background: #e0b54a;
}
</style>