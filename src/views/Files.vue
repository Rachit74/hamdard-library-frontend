<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import FileComponent from '@/components/FileComponent.vue';
import api from '@/axios.js';

const files = ref([]);
const loading = ref(true)
const error = ref(null)


const props = defineProps(
    {
        department: String
    }
)

const getFiles = async () => {
    try {
        const response = await api.get(`/files/?department=${props.department}`);
        files.value = response.data
        loading.value = false;
    } catch (err) {
        error.value = err.response ?? { status: 'Network Error', data: { error: 'Could not reach server' } };;
        loading.value = false;
    }
}

onMounted(getFiles);

</script>

<template>
    {{ props.department }} files

    <h3 v-if="loading">Loading...</h3>
    <div v-else-if="error">
        <h3>{{ error.data.detail }}</h3>
        <h4>{{ error.status }}</h4>
    </div>
    <div v-else>
        <h3 v-if="files.length === 0">No files for this department yet...</h3>
        <div v-else>
            <div v-for="file in files" :key="file.id">
                <FileComponent :file="file" />
            </div>
        </div>
    </div>
</template>