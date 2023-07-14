<template>
  <ul class="nav nav-tabs mb-3" id="grp">
      <li class="nav-item" v-for="n in props.tabItems">
        <nuxt-link class="nav-link" :to="n.href">{{n.navName}}</nuxt-link>
      </li>
  </ul>
</template>
<script setup>
    const props = defineProps(['tabItems']);
    console.log("test : " + props)
</script>