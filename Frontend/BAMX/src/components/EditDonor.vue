<script>
import axios from 'axios'
import Phone from './Phone.vue'
import municipios_data from '../assets/estados_municipios.json'

export default {
  name: 'Donors',
  props: {
    idDonor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      donors: {},
      states: municipios_data,
      municipios: {}
    }
  },
  mounted() {
    this.getDonor()
  },
  methods: {
    getMunicipios(state){
      this.municipios = this.states[state]
    },
    getDonor() {
      try{
        axios.get('http://localhost:3000/donor/' + this.idDonor)
        .then(response => {
          this.donors = response.data
        })
      } catch (error) {
        console.log(error)
      }
    },
    getEstados(){
     
    },
    getMunicipios(estado){

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
    confirmAlert(){
      this.$swal({
        title: "¿Estas seguro(a)?",
        text: "El registro se modificara permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("¡Modificado!", "El registro ha sido modificado.", "success");
        }
      })
    }
  },
  components: {
    Phone
}
}
</script>

<template>
  <h1>Editar usuario</h1>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h2 class="text-center">Informaci&oacute;n b&aacute;sica</h2>
        
        <form>
          <div v-for="donor in donors" :key="donor.donor_id">
            <label for="name" class="form-label">Nombre</label>
            <input class="form-control mb-3" type="text" name="name" id="name" :value="donor.donor_name">
            <label for="city" class="form-label">Ubicacion</label>
            <input class="form-control mb-3" type="text" name="city" id="city" :value="donor.donor_city">
            <label for="gremio" class="form-label">Organizaci&oacute;n / Gremio</label>
            <input class="form-control mb-3" type="text" name="gremio" id="gremio" :value="donor.donor_organization">
            <label for="tipo" class="form-label">Tipo de aliado</label>
            <div class="form-check mb-3" name="tipo" id="tipo">
              <input class="form-check-input" type="checkbox" name="tipo" id="recurrente" value="recurrente" :checked="donor.donor_type == 'Recurrente'">
              <label class="form-check-label" for="recurrente">Recurrente</label>
            </div>
            <div class="form-check mb-3" name="tipo" id="tipo">
              <input class="form-check-input" type="checkbox" name="tipo" id="temporada" value="temporada" :checked="donor.donor_type == 'Temporada'">
              <label class="form-check-label" for="temporada">Por temporada</label>
            </div>
            <div class="form-check mb-3" name="tipo" id="tipo">
                <input class="form-check-input" type="checkbox" name="tipo" id="compra" value="compra" :checked="donor.donor_type == 'Compra'">
                <label class="form-check-label" for="compra">Compra</label>
            </div>
            <div class="form-check mb-3" name="tipo" id="tipo">
              <input class="form-check-input" type="checkbox" name="tipo" id="prospecto" value="prospecto" :checked="donor.donor_type == 'Prospecto'">
              <label class="form-check-label" for="prospecto">Prospecto</label>
            </div>
          </div>
        </form>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h2 class="text-center">Tel&eacute;fonos registrados</h2>
        <div v-for="donor in donors" :key="donor.donor_id">
          <Phone :idDonor=donor.donor_id />
        </div>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row d-flex">
      <div class="col-2"></div>
      <div class="col-8">
        <h2 class="text-center">Productos</h2>
        <form class="limited-form">
          <label for="product" class="form-label">Producto</label>
          <input class="form-control mb-3" type="text" name="product" id="product">
          <label for="quantity" class="form-label">Cantidad</label>
          <input class="form-control mb-3" type="text" name="quantity" id="quantity">
          <label for="unit" class="form-label">Unidad</label>
          <input class="form-control mb-3" type="text" name="unit" id="unit">
          <label for="price" class="form-label">Precio</label>
          <input class="form-control mb-3" type="text" name="price" id="price">
          <label for="description" class="form-label">Descripci&oacute;n</label>
          <input class="form-control mb-3" type="text" name="description" id="description">
        </form>
      </div>
      <div class="col-2"></div>
    </div>


    <!-- <ul>
      <li v-for="(estado, i) in states" :key="i">
        {{estado.Estado}}
        <ul>
          <li v-for="(municipio, j) in states[i].Municipios" :key="j">
            {{municipio}}
          </li>
        </ul>
      </li>
    </ul> -->

    
    <div class="row">
        <div class="text-center">
          <button class="btn btn-success m-2" @click="confirmAlert()">Guardar</button>   
          <router-link to="/">
            <button class="btn btn-danger m-2">Cancelar</button>
          </router-link>       
        </div>
      </div>
  </div>



 
</template>

<style>

</style>