<script setup>
import EditDonor from '../components/EditDonor.vue'
</script>

<template>
  <EditDonor :idDonor= this.$route.params.id />
</template>