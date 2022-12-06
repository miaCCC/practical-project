<template>
  <nav>
    <div class="nav-container">
      <div class="nav-title">
        <font-awesome-icon icon="fa-solid fa-headphones-simple" />
        <h2>資訊支援服務台</h2>

      </div>
      <div class="nav-user">
        <img src="" alt="" class="avatar">
        <div class="user-info">
          <span class="name"></span>
          <span class="number"></span>
          <span class="admin"></span>
        </div>

      </div>
      <div class="nav-list">
        <ul>
          <li class="home">
            <router-link to="/home" class="">
            Home
            </router-link>
          </li>
          <li class="add">
            <router-link to="/add" class="">
            建立案件
            </router-link>
          </li>
          <li class="list">
            <router-link to="/list" class="">
            案件列表
            </router-link>
          </li>
          <li class="setting">
            <router-link to="/setting" class="">
            管理設定
            </router-link>
          </li>
          <li class="forms">
            <router-link to="/forms" class="">
            報表
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="cursor-pointer" style="position: absolute; bottom: 0" @click="logout">
        登出
    </div>    
  </nav>
</template>