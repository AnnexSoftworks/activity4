<template>
    <div class="app">
        <Navbar />
        <form @submit.prevent="register">
            <h2>Register</h2>
            <br>
      <label for="email">Username:</label>
      <input type="email" id="email" placeholder="Email address..." v-model="email" />
      <br><br>
      <label for="pw">Password:</label>
      <input id="pw" type="password" placeholder="password..." v-model="password" />
<br><br>
            <div class="form-group">
                <button type="submit">Register</button>
                <button @click="cancelOperation">Back to Login</button>
            </div>

        </form>
    </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
        cancelOperation() {
            this.$router.push('/')
        },
    },
};
</script>
