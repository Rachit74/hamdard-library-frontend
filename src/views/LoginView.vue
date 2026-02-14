<script setup>
import { ref } from 'vue';
import axios from 'axios';

import api from '@/axios.js';


const username = ref('');
const password = ref('');

const tryingLogin = ref(false);
const error = ref(null);
const loggedIn = ref(false);

const loginUser = async () => {
    try {
        tryingLogin.value = true;
        const response = await api.post(`/auth/login/`, {
            username: username.value,
            password: password.value
        });
        localStorage.setItem('token', response.data.access);
        tryingLogin.value = false;
        loggedIn.value = true;
    } catch (err) {
        tryingLogin.value = false;
        error.value = err.response ?? { status: 'Network Error', data: { error: 'Could not reach server' } };
    }
}


</script>

<template>

    <div>
        <div>
            <form @submit.prevent="loginUser">
                <div>
                    <label>Username</label>
                    <input type="text" v-model="username" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" v-model="password" />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>

        <div>
            <p v-if="tryingLogin">Logging you in...</p>
            <p v-else-if="error">{{ error }}</p>
            <div v-else-if="loggedIn">
                Logged In!
            </div>
        </div>

    </div>

</template>