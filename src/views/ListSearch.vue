<template>
  <div class="main d-flex">
    <Navbar />
    <div class="list-container">
      <div class="list-container__title border-light-2 border-bottom py-2 pl-5">
        <h2>案件列表</h2>
      </div>
      <div class="list-container__content py-4 px-5">
        <!-- 使用 NavTabs 元件 -->
      <NavTabs />
      </div>
      
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import NavTabs from "./../components/NavTabs";
export default {
  components: {
    Navbar,
    NavTabs
  }
};
</script>

<style scoped>
.list-container {
  flex-grow: 1;
}
</style>