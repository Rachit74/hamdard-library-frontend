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
