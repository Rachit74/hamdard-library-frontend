<script setup>
import { ref, onMounted } from 'vue';
import api from '@/axios.js';
import FileComponent from '@/components/FileComponent.vue';

const BASE_URL = "https://hamdardlibrary.onrender.com/api";

const files = ref([])
const loading = ref(true)
const error = ref(null);

const getUnapprovedFiles = async () => {
    try {
        // get jwt token from local storage
        const token = localStorage.getItem('token');
        const response = await api.get(`/files/unapproved/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        files.value = response.data;
        loading.value = false;
    } catch (err) {
        error.value = err.response ?? { status: 'Network Error', data: { error: 'Could not reach server' } };
        loading.value = false;
        console.log(error.value.data);
    }
}


const approveFile = async (file) => {
    try {
        const response = await api.post(`/files/approve/${file.id}/`);
        console.log('file approved');
        getUnapprovedFiles();
    } catch (error) {
        console.log(error);
    }
}

onMounted(getUnapprovedFiles);

</script>

<template>
    <div>
        <p v-if="loading">Loading files...</p>
        <p v-else-if="error">{{ error.data.detail }} | {{ error.status }}</p>
        <div v-else>
            <div v-for="file in files" :key="file.id">
                <FileComponent :file="file" />
                <button @click="approveFile(file)">Approve File</button>
            </div>
        </div>
    </div>
</template>