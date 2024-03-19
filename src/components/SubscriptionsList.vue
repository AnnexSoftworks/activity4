<template>
  <div class="app">
    <Navbar/>
    <div class="List">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h3 class="text-center">Subscriptions List</h3>
          <table class="table align-middle">
            <thead>
            <tr>
              <th>Subscription</th>
              <th class="d-none d-sm-table-cell">Description</th>
              <th>Amount</th>
              <th>Frequency</th>
              <th>Year Started</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="subscription in Subscriptions" :key="subscription.key">
              <td>{{ subscription.name }}</td>
              <td class="d-none d-sm-table-cell">{{ subscription.description }}</td>
              <td>${{ subscription.amount }}</td>
              <td>{{ subscription.frequency }}</td>
              <td>{{ subscription.year_started }}</td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: subscription.key } }"
                             class="btn btn-primary btn-sm px-3">
                  Edit
                </router-link>
                <button @click.prevent="deleteSubscription(subscription.key)" class="btn btn-danger btn-sm px-3">
                  Delete
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <button @click="createSubscription">Add New Subscription</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebaseDb'
import Navbar from './Navbar.vue'

export default {
  name: "List-vue",
  components: {
    Navbar
  },
  data() {
    return {
      Subscriptions: [],
    }
  },
  created() {
    db.collection('subscriptions').onSnapshot((snapshotChange) => {
      this.Subscriptions = []
      snapshotChange.forEach((doc) => {
        if (doc.data().name) {
          this.Subscriptions.push({
            key: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            amount: doc.data().amount,
            frequency: doc.data().frequency,
            year_started: doc.data().year_started
          })
        }
      })
    })
  },
  methods: {
    deleteSubscription(id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('subscriptions').doc(id).delete().then(() => {
        })
            .catch((error) => {
              console.error(error)
            })
      }
    },
    createSubscription() {
      this.$router.push('/create')
    }
  }
}
</script>

<style lang="scss">
.table thead {
  background-color: #42B883;
  color: #2C3D4E;
}

.table td,
.table th {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.btn {
  padding: 2px 5px;
  margin: 2px;
}
</style>
