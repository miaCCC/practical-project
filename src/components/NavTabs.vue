<template>
  <div>
    <button class="btn btn-outline-primary btn-sm">Asana</button>
    <ul class="nav nav-tabs mb-4">
      <li class="nav-item">
        <router-link to="/list" class="nav-link">未完工</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/list/search" class="nav-link">案件查詢</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.btn-sm {
  border-radius: 0.844em;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.688rem;
  line-height: 1.5;
}


</style>