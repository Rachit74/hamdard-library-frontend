<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let username = ref('');
let password = ref('');

const submitForm = () => {
    console.log(username.value);
    console.log(password.value);
}

</script>

<template>

    <div>
        <form @submit.prevent="submitForm">
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

</template>