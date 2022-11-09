<script>
import axios from 'axios'

export default {
  name: 'Donors',
  data() {
    return {
      donors: {}
    }
  },
  mounted() {
    this.getDonors()
  },
  methods: {
    getDonors() {
      try{
        axios.get('http://localhost:3000/')
        .then(response => {
          this.donors = response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <tr v-for="donor in donors" :key="donor.donor_id">
    <td>{{ donor.donor_id }}</td>
    <td>{{ donor.donor_name }}</td>
    <td>{{ donor.donor_city }}</td>
    <td>{{ donor.donor_colony }}</td>
    <td>{{ donor.donor_organization }}</td>
    <td>{{ donor.donor_type }}</td>
    <td>{{ donor.donor_website }}</td>
  </tr>
</template>

<style>
tr {
  text-align: center;
}
</style>