<template>
  <div class="tab-container">
    <div class="tab-container__top">
      <div class="container__top__search">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="請輸入" />
          <span class="input-group-btn">
            <button class="btn btn-outline-primary btn-search">搜尋</button>
          </span>
        </div>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
      <th scope="col">案件編號</th>
      <th scope="col">申請人</th>
      <th scope="col">院區</th>
      <th scope="col">問題類型</th>
      <th scope="col">回報系統</th>
      <th scope="col">檔案</th>
      <th scope="col">建立時間</th>
      <th scope="col">問題描述</th>
      <th scope="col">接單人</th>
      <th scope="col">委託人</th>
      <th scope="col">狀態</th>
      <th scope="col">案件進度</th>

    </tr>
      </thead>
      <tbody>
        <tr v-for="userList in userLists" :key="userList.id">
          <th scope="row">{{userList.id}}</th>
          <td>{{userList.name}}</td>
          <td>{{userList.type}}</td>
          <td>{{userList.system}}</td>
          <td>{{userList.file}}</td>
          <td>{{userList.time}}</td>
          <td>{{userList.description}}</td>
          <td>{{userList.order}}</td>
          <td>{{userList.entrust}}</td>
          <td>{{userList.state}}</td>
          <td>{{userList.schedule}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const dummyData = {
  userLists: [
    {
      id: 202105030004,
      name: "王曉明",
      area: "BO",
      type: "需求開發",
      system: "Portering",
      file: "無檔案",
      time: "2021-05-03 16:13",
      description: "iOS系統無法顯示出案件稽核",
      order: "王大明",
      entrust: "王曉明",
      state: "已指派",
      schedule: ""
    }
  ]
};

export default {
  data() {
    return {
      userLists: dummyData.userLists
    };
  }
};
</script>


<style lang="scss" scoped>
</style>