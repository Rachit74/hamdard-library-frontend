<script setup>
import { ref } from 'vue';
import api from '@/axios.js';

const fileName = ref('');
const filePath = ref(null);
const fileDepartment = ref('');
const fileSemester = ref('');

const uploading = ref(false);
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

        const formData = new FormData();
        formData.append('file_name', fileName.value);
        formData.append('file_path', filePath.value);
        formData.append('file_department', fileDepartment.value);
        formData.append('semester', fileSemester.value);

        const response = await api.post(`/files/create/`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        console.log(response);
        uploading.value = false;
    } catch (err) {
        uploading.value = false;
        error.value = err.response;
        console.log(error.value);
    }
}
</script>

<template>
  <div>
    <form @submit.prevent="uploadFile">
      <div>
        <label for="fileName">File Name</label>
        <input id="fileName" type="text" v-model="fileName" placeholder="Enter file name" />
      </div>

      <div>
        <label for="filePath">File Upload</label>
        <input id="filePath" type="file" @change="handleFileChange" />
      </div>

      <div>
        <label for="fileDepartment">Department</label>
        <select id="fileDepartment" v-model="fileDepartment">
          <option value="" disabled>Select department</option>
          <option v-for="dept in departments" :key="dept" :value="dept">
            {{ dept }}
          </option>
        </select>
      </div>

      <div>
        <label for="fileSemester">Semester</label>
        <select id="fileSemester" v-model="fileSemester">
          <option value="" disabled>Select semester</option>
          <option v-for="sem in semesters" :key="sem" :value="sem">
            {{ sem }}
          </option>
        </select>
      </div>

      <button type="submit" :disabled="uploading">
        {{ uploading ? 'Uploading...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>