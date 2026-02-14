<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import FileComponent from '@/components/FileComponent.vue';

const BASE_URL = "http://localhost:8000/api";

const files = ref([]);

const props = defineProps(
    {
        department: String
    }
)

const getFiles = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/files/?department=${props.department}`);
        files.value = response.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(getFiles);

</script>

<template>
    {{ props.department }} files


    <div v-for="file in files" :key="file.id">
        <FileComponent :file="file" />
    </div>
</template>