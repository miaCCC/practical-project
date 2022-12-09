<template>
  <div class="tab-container">
    <div class="tab-container__top my-5">
      <div class="tab-container__top__search d-flex align-items-center justify-content-end">
        <input type="text" class="form-control" id="search-input" placeholder="請輸入" />
        <button type="submit" class="btn btn-outline-primary" id="search-submit-button">搜尋</button>
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
          <td>
            <input type="button" value="進度" class="btn btn-outline-info btn-sm" data-orderno="2021050300004" data-toggle="modal" data-target="#progressmodal">
            <input type="button" value="完工" class="btn btn-outline-primary btn-sm">
            <input type="button" value="編輯" class="btn btn-outline-info btn-sm" data-orderno="2021050300004" data-toggle="modal" data-target="#editmodal">
            <input type="button" value="取消" class="btn btn-outline-secondary btn-sm">
          </td>
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

.form-control {
  display: inline-block;
  width: 30%;
}
#search-submit-button {
  margin: 6px;
  padding: 5.5px;
}

</style>