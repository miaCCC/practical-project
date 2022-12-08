<template>
  <nav class="d-flex flex-column">
    <div class="nav-container scrollbar">
      <div class="nav-title d-flex justify-content-center align-items-center">
        <i class="fas fa-headset"></i>
        <span>資訊支援服務台</span>
        <i class="fas fa-times"></i>
      </div>

      <div class="nav-user">
        <img src="https://tw1.uetracktw.com/SupportTicket/deskhelp/Images/line.png" class="nav-user__avatar" />
        <div class="nav-user__user-info">
          <span class="name">張雅棠</span>
          <span class="number">1989</span>
          <span class="number">Admin</span>
        </div>
      </div>

      <div class="nav-list">
        <ul>
          <li class="nav-list__home">
            <router-link to="/home" class>
              <i class="fas fa-home"></i>
                <span>Home</span>            
            </router-link>
          </li>
          <li class="nav-list__add">
            <router-link to="/add" class>
              <i class="far fa-file-alt"></i>
                <span>建立案件</span>
            </router-link>
          </li>
          <li class="nav-list__list">
            <router-link to="/list" class>
              <i class="fas fa-bug"></i>
                <span>案件列表</span> 
            </router-link>
            
          </li>
          <li class="nav-list__setting">
            
            <router-link to="" class="nav-list__setting__content" data-toggle="collapse" href="#collapseSetting"  aria-expanded="false" aria-controls="collapseSetting" >
            <i class="fas fa-cog"></i>
              <span>管理設定</span>
            </router-link>
            <div class="nav-list__menu collapse" id="collapseSetting">
              <ul>
                <li>問題類型管理</li>
                <li>專案問題管理</li>
                <li>專案類別管理</li>
                <li>專案管理</li>
                <li>地點管理</li>
                <li>系統負責人管理</li>
                <li>專員管理</li>
                <li>人員管理</li>
              </ul>
            </div>
          </li>
          <li class="nav-list__forms">
            <router-link to="" class="nav-list__forms__content" data-toggle="collapse" href="#collapseForms"  aria-expanded="false" aria-controls="collapseForms">
            <i class="far fa-chart-bar"></i>
            <span>報表</span>
            </router-link>
            <div class="nav-list__menu collapse" id="collapseForms">
              <ul>
                <li>歷史案件查詢</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div class="nav-footer d-flex justify-content-center align-items-center">
        <div class="cursor-pointer nav-footer__log-out" @click="logout"> 
          登出
        <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
  </nav>
</template>
