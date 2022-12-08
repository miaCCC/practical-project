<template>
  <div class="main d-flex">
    <Navbar />
    <div class="list-container">
      <div class="list-container__title border-light-2 border-bottom py-2 pl-5">
        <h2>儀錶板</h2>
      </div>
      <div class="list-container__content py-4 px-5">

      </div>
      
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
  }
};
</script>

<style scoped>
.list-container {
  flex-grow: 1;
}
.list-container__content {
  background-color: lightgray;
}
</style>