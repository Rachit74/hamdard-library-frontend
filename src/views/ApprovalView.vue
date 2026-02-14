<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import FileComponent from '@/components/FileComponent.vue';

const BASE_URL = "https://hamdardlibrary.onrender.com/api";

const files = ref([])
const loading = ref(true)
const error = ref(null);

const getUnapprovedFiles = async () => {
    try {
        // get jwt token from local storage
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/files/unapproved/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        files.value = response.data;
        loading.value = false;
    } catch (err) {
        error.value = err.response ?? { status: 'Network Error', data: { error: 'Could not reach server' } };
        loading.value = false;
    }
}

onMounted(getUnapprovedFiles);

</script>

<template>
    <div>
        <p v-if="loading">Loading files...</p>
        <p v-else-if="error">{{ error.data.detail }}</p>
        <div v-else>
            <div v-for="file in files" :key="file.id">
                <FileComponent :file="file" />
            </div>
        </div>
    </div>
</template>