<template>
  <div class="page">
    <aside-layout></aside-layout>
    <router-view/>
  </div>
</template>

<script>
import AsideLayout from "./AsideLayout.vue";

export default {
  name: "AppLayout",
  components: { AsideLayout },
};
</script>
