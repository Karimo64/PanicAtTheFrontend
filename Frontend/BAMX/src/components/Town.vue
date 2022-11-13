<script>
import towns_data from '../assets/estados_municipios.json'

export default {
  name: 'Town',
  data() {
    return {
      states: towns_data,
      municipios: {},
      estado: '',
      municipio: ''

    }
  },
  methods: {
    getTowns(i) {
      this.estado = this.states[i].Estado
      this.municipios = this.states[i].Municipios
    }
  }
}
</script>

<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="statesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Estado: {{estado}}
    </button>
    <ul class="dropdown-menu" aria-labelledby="statesDropdown">
      <li v-for="(estado, i) in states" :key="i" @click="getTowns(i)">
        {{estado.Estado}}
      </li>
    </ul>
    <div class="dropdown">
    <button v-if="this.estado !== ''" class="btn btn-secondary dropdown-toggle" type="button" id="townsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Municipio: {{municipio}}
    </button>

    <ul v-if="this.estado !== ''" class="dropdown-menu" aria-labelledby="townsDropdown">
      <div v-for="(municipio, i) in municipios" :key="i" @click="this.municipio = municipios[i]">
        {{municipio}}
      </div>
    </ul>
    </div>  
  </div>
</template>

<style>
li {
  padding: 0 10px;
  cursor: pointer;
}
li:hover {
  background-color: #ccc;
}
</style>