<script>
import axios from 'axios'

export default {
  name: 'Donors',
  props: {
    idDonor: Number,
    required: true
  },
  data() {
    return {
      donors: {}
    }
  },
  mounted() {
    this.getDonor()
  },
  methods: {
    getDonor() {
      try{
        axios.get('http://localhost:3000/donor/' + this.idDonor)
        .then(response => {
          this.donors = response.data
          console.log(this.donors)
          console.log(this.idDonor)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <h1>Edit page</h1>
  <div class="container">
    <form action="" class="form">
      <input type="text" name="name" id="name">
    </form>
  </div>
</template>
