<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <span class="navbar-brand">Subscriptions</span>
    <ul class="nav justify-content-center">
      <li class="nav-item active" v-if="loggedIn === 'false'">
        <a class="nav-link" @click="register">Register</a>
      </li>
      <li class="nav-item" v-if="loggedIn === 'true'">
        <a class="nav-link">
          <a @click="logout">Logout</a>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: 'Navbar',
  data() {
    return {
      loggedIn: 'false',
    }
  },
  beforeCreate() {
    if (firebase.auth().currentUser) {
      this.loggedIn = 'true';
    } else {
      this.loggedIn = 'false';
    }
  },
  updated() {
    if (firebase.auth().currentUser) {
      this.loggedIn = 'true';
    } else {
      this.loggedIn = 'false';
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      this.loggedIn = 'true';
    } else {
      this.loggedIn = 'false';
    }
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.loggedIn = 'false';
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
    },
    register() {
      this.$router.push('/register')
    },
  },
}
</script>
<style lang="scss">
  @import url("styles/fira-sans.css");
  * {
    margin: 10px;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', san-serif;
  }

  // Set custom nav bar colors
  .navbar-brand,
  .navbar-text,
  .navbar {
    background-color: #44515e;
    padding: .5em;

    span {
      color: #42B883;
    }
  }

  a {
    color: black;
    padding: .5em;

    &.router-link-exact-active {
      color: #08492c;
    }
  }
</style>