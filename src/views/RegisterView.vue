<script setup>
import { ref } from 'vue';
import api from '@/axios.js';

const username = ref('');
const password = ref('');
const password_confirm = ref('');

const error = ref(null);

const registerUser = async () => {
    try {
        const response = await api.post(`/auth/register/`, {
            username: username.value,
            password: password.value,
            password_confirm: password_confirm.value
        })
        console.log(response.data);
    } catch (err) {
        error.value = err;
        console.log(error.value);
    }
}

</script>

<template>
    <div>
        <form @submit.prevent="registerUser">
            <div>
                <label for="username">Username: </label>
                <input type="text" v-model="username">
            </div>
            <div>
                <label for="password">Password: </label>
                <input type="password" v-model="password">
            </div>
            <div>
                <label for="password_confirm">Confirm Password: </label>
                <input type="password" v-model="password_confirm">
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>