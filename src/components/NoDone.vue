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
              data-toggle="modal"
              data-target="#progressmodal"
              @click="edit(userList)"
            />
            <input 
              type="button" 
              value="完工" 
              class="btn btn-outline-primary btn-sm" />
            <input
              type="button"
              value="編輯"
              class="btn btn-outline-info btn-sm"
              data-toggle="modal"
              data-target="#editmodal"
              @click="edit(userList)"
            />
            <input 
              type="button"
              value="取消" 
              class="btn btn-outline-secondary btn-sm" />
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
                  <h5 class="modal-title" id="exampleModalLabel">案件編號:{{editList.id}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">案件進度編輯:</label>
                    <textarea
                      v-model="editSchedule"
                      id="ProgressTextarea"
                      style="height:100%; width:100%"
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary"
                  @click="scheduleSave">確認變更</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 編輯Modal -->
          <div
            class="modal fade"
            id="editmodal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">案件編號:{{editList.id}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <input id="editmodalLabel" type="hidden" value="2021050300004" />
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">變更回報系統</label>
                      <select id="EditProjectSelect" class="form-control form-control-sm">
                        <option value="48C81124-E0D4-4DD4-86B4-8DCE792E89A2">BDMS</option>
                        <option value="df1ff456-cb87-4163-9a7d-e629bd660b99">EM</option>
                        <option value="E12E6FE3-3D5F-48F8-B374-6112D76CF377">ERP平台</option>
                        <option value="5773FCCF-8995-4192-91B4-E388DB3A6A78">HPBS</option>
                        <option value="aa1e38df-71eb-46d1-bd52-1c2016f4b787">HR平台</option>
                        <option value="c3966ccf-3597-4d66-bcbc-171e51972eeb">HSSE</option>
                        <option value="0048e11c-a9d6-4ce5-bcbe-c7f4c34ac2a8">Office 365</option>
                        <option
                          value="EE6EAC15-BF23-4841-B073-FB3FB1ED826D"
                          selected="selected"
                        >{{editList.system}}</option>
                        <option value="E2EA98E6-1158-4DFF-AB66-9C452A65CD93">TDIS</option>
                        <option value="923459db-7918-402a-af6d-38e885a52dca">UCS</option>
                        <option value="FFB3876F-B4CF-423A-BC79-0CAE4E9D623C">U-Office</option>
                        <option value="6bc00869-4c4c-4657-a69e-b63a1568266c">工務機電</option>
                        <option value="8be5e547-4a70-478c-b7a5-e481f7673c58">差勤卡機</option>
                        <option value="8942c8c8-992f-4f67-8268-b373ffca6df3">資訊支援服務台</option>
                        <option value="e003cd4d-e0dd-4fb2-9827-b5da48982221">資訊設備</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">變更問題類型</label>
                      <select id="EditIssueSelect" class="form-control form-control-sm">
                        <option value="26deb319-3053-43f0-bba7-f360989ab120">手機 App - Bug</option>
                        <option value="9ab52029-5377-48f0-80ab-3fefa0b3b6a3">手機推播</option>
                        <option value="1E6B1CD0-0222-4FAE-BA37-079A4873DAE8">其他</option>
                        <option value="936ba494-093e-4396-8004-d0191fdd849b">連線問題</option>
                        <option value="77F98C57-9ACA-4DD6-A2E5-9A242D5E4E83">資料變更</option>
                        <option value="44840C3B-2577-44E4-BF81-9E5E07FC8C82">網站 - Bug</option>
                        <option value="aca78e80-13af-4c76-8d34-1af583a6b562">網站建立/資料匯入</option>
                        <option
                          value="4583019A-3B15-4906-B202-F6C31DAB9B54"
                          selected="selected"
                        >{{editList.type}}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">變更接單人</label>
                      <select id="AssigneeSelect" class="form-control form-control-sm">
                        <option value="1F1DBF98-AABE-4521-991D-DD197AB53D7C" selected="selected">{{editList.name}}</option>
                        <option value="A279B94D-4DD0-4204-B9CF-48FF8857E4B7">王二</option>
                        <option value="FBAB4AD1-8851-406F-B213-310FD3C75373">王三</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button
                    type="button"
                    id="editconfirm"
                    name="editconfirm"
                    class="btn btn-primary"
                    @click="editSave"
                  >確認變更</button>
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
      description: "iOS系統無法顯示",
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
      description: "iOS系統無法顯示",
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
      description: "iOS系統無法顯示",
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
      searchList: [],
      editSchedule: "",
      editList: {},
    };
  },
  methods: {
    //搜尋案件編號
    filterLists() {
      console.log(this.userLists);
      this.searchList = this.userLists.filter(searchResult =>
        searchResult.id.toString().match(this.keyWord)
      );
    },
   //點擊帶入正在編輯資料
    edit(list) {
      console.log(list)
      this.editList = list
      this.editSchedule = this.editList.schedule
    },
    //儲存進度
    scheduleSave() {
      this.editList.schedule = this.editSchedule
    },
    //儲存編輯
    editSave() {
      console.log(this.editList)
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