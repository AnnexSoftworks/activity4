<template>
  <div class="app">
    <Navbar/>
    <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">Add Subscription</h3>
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="subscription.name" required>
          </div>

          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="subscription.description" required>
          </div>
          <br>
          <div class="form-group">
            <label>Amount</label>
            <input type="text" class="form-control" v-model="subscription.amount" required>
          </div>

          <div class="form-group">
            <label>Payment Frequency</label>
            <select id='frequency' class="form-control" v-model="subscription.frequency" required>
              <option value='weekly'>Weekly</option>
              <option value='bimonthly'>Bi-monthly</option>
              <option value='monthly'>Monthly</option>
              <option value='quarterly'>Quarterly</option>
              <option value='biannually'>Bi-annually</option>
              <option value='annually'>Annually</option>
            </select>
          </div>

          <div class="form-group">
            <label>Year Started</label>
            <input type="text" class="form-control" v-model="subscription.year_started" required>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" @click="addSubscription">Add Subscription</button>
            <button class="btn btn-primary col-4" @click="cancelOperation">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebaseDb'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Create',
  components: {
    Navbar
  },
  data() {
    return {
      subscription: {},
    }
  },
  methods: {
    addSubscription() {
      if (this.subscription.name.length !== 0 && this.subscription.description.length !== 0) {
        db.collection('subscriptions').add(this.subscription).then(() => {
          //alert('Subscription successfully created!');
          this.subscription.name = ''
          this.subscription.description = ''
          this.subscription.amount = ''
          this.subscription.frequency = ''
          this.subscription.year_started = ''
          this.$router.push('/subscriptionsList')
        })
        this.error = true;
        this.errorMsg = "Please fill out the subscription name and description"
        setTimeout(() => {
          this.error = false;
        }, 5000)
      }

    },
    cancelOperation() {
      this.$router.push('/subscriptionsList')
    },
  }
}
</script>
