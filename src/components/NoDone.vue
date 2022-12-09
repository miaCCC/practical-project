<template>
  <div class="tab-container">
    <div class="tab-container__top my-5">
      <div class="tab-container__top__search d-flex align-items-center justify-content-end">
        <input
          v-model.trim="keyWord"
          type="text"
          class="form-control"
          id="search-input"
          placeholder="請輸入案件編號"
        />
        <button
          @click="filterLists"
          type="submit"
          class="btn btn-outline-primary"
          id="search-submit-button"
        >搜尋</button>
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
        <tr v-for=" userList  in (searchList.length ? searchList : userLists)" :key="userList.id">
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
            <input
              type="button"
              value="進度"
              class="btn btn-outline-info btn-sm"
              data-orderno="2021050300004"
              data-toggle="modal"
              data-target="#progressmodal"
            />
            <input type="button" value="完工" class="btn btn-outline-primary btn-sm" />
            <input
              type="button"
              value="編輯"
              class="btn btn-outline-info btn-sm"
              data-orderno="2021050300004"
              data-toggle="modal"
              data-target="#editmodal"
            />
            <input type="button" value="取消" class="btn btn-outline-secondary btn-sm" />
          </td>
          <!-- 進度Modal -->
          <div
            class="modal fade"
            id="progressmodal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">案件編號:{{userList.id}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">案件進度編輯:</label>
                    <textarea id="ProgressTextarea" style="height:100%; width:100%"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary">確認變更</button>
                </div>
              </div>
            </div>
          </div>
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
      name: "王一",
      area: "BO",
      type: "需求開發",
      system: "Portering",
      file: "無檔案",
      time: "2021-05-03 16:13",
      description: "iOS系統無法顯示出案件稽核",
      order: "王大明",
      entrust: "王一",
      state: "已指派",
      schedule: ""
    },
    {
      id: 202105030005,
      name: "王二",
      area: "BO",
      type: "需求開發",
      system: "Portering",
      file: "無檔案",
      time: "2021-05-03 16:13",
      description: "iOS系統無法顯示出案件稽核",
      order: "王大明",
      entrust: "王二",
      state: "已指派",
      schedule: ""
    },
    {
      id: 202105030006,
      name: "王三",
      area: "BO",
      type: "需求開發",
      system: "Portering",
      file: "無檔案",
      time: "2021-05-03 16:13",
      description: "iOS系統無法顯示出案件稽核",
      order: "王大明",
      entrust: "王三",
      state: "已指派",
      schedule: ""
    }
  ]
};

export default {
  data() {
    return {
      userLists: dummyData.userLists,
      keyWord: "",
      searchList: []
    };
  },
  methods: {
    //搜尋案件編號
    filterLists() {
      console.log(this.userLists);
      this.searchList = this.userLists.filter(searchResult =>
        searchResult.id.toString().match(this.keyWord)
      );
    }
  }
};
</script>


<style lang="scss" scoped>
th {
  min-width: 64px;
}
.form-control {
  display: inline-block;
  width: 30%;
}
#search-submit-button {
  margin: 6px;
  padding: 5.5px;
}
</style>