<script>
import axios from 'axios'

export default{
  name: 'Phone',
  props: {
    idDonor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      phones: {}
    }
  },
  mounted() {
    this.getPhones()
  },
  methods: {
    deletePhone(idPhone){
      try {
        axios.delete('http://localhost:3000/phone/' + idPhone)
        .then(response => {
          console.log(response)
        })
      } catch (error) {
        console.log(error)
      }
    },
    getPhones() {
      try{
        axios.get('http://localhost:3000/phone/' + this.idDonor)
        .then(response => {
          this.phones = response.data
          console.log(this.phones)
          // console.log(this.idDonor)
        })
      } catch (error) {
        console.log(error)
      }
    },
    deleteAlert(id){
      event.preventDefault() // prevent form submit
      this.$swal({
                title: "¿Estas seguro(a)?",
                text: "No podrás revertir esto!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si"
            }).then((result) => {
                if (result.isConfirmed) {
                  this.deletePhone(id)
                  this.$swal({
                    title: "¡Borrado!",
                    text: "El registro ha sido borrado.",
                    icon: "success"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      location.reload()
                    }
                  })
                }else
                  this.$swal("¡Cancelado!", "El registro no ha sido borrado.", "error");
            });
    },

  }
}
</script>

<template>
  <form class="limited-form" method="post">
    <div v-for= "(phone, index) in phones" :key="phone.phone_id">
      <label for="phone" class="form-label">Tel&eacute;fono {{index + 1}}</label>
      <div class="input-group">
        <input class="form-control mb-3" type="text" name="phone" id="phone" :value="phone.donor_phone">
        <button class="btn btn-outline-secondary delete-form" type="button" name="id" :id="phone.phone_id" @click="deleteAlert(phone.phone_id)"><img src="../assets/trash.png" title="deleteImage" width="16" height="16"/></button>
      </div>
    </div>
    <div class="d-grid">
      <button type="button" class="btn btn-outline-success d-inline-block" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
    </div>
  </form>
</template>

<style>
.limited-form{
  min-height: 340px;
  max-height: 340px;
  overflow-y: scroll;
  padding: 0 20px;
}
.delete-form{
  padding: 2px 10px !important;
  height: 38px;
}
button:hover.delete-form{
  background-color:rgba(239, 12, 12, 0.25) !important;
}
</style>