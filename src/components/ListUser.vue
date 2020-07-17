<template>
  <div>
    <ComponentHeader />
    <AddStudentModal v-on:addStudent="handleAddStudent" />
    <b-table striped hover class="list-user" :items="listUser" :fields="fields" show-empty>
      <template v-slot:cell(removeBtn)="row">
        <b-button
          variant="outline-warning"
          size="sm"
          @click="handleClickOneRow(row.index)"
          class="mr-2"
        >Xóa</b-button>
      </template>
      <template v-slot:empty>
        <div style="text-align:center;">{{ emptyText }}</div>
      </template>
    </b-table>
    <ComponetFooter />
  </div>
</template>

<script>
import ComponentHeader from "./ComponentHeader.vue";
import ComponetFooter from "./ComponentFooter.vue";
import AddStudentModal from "./AddStudentModel.vue";
export default {
  name: "list-user",
  data() {
    return {
      emptyText: "Không có dữ liệu",
      fields: [
        { key: "id", label: "MSSV", sortable: true },
        { key: "name", label: "Tên", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "removeBtn", label: "Xóa sinh viên", sortable: false }
      ],
      listUser: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          email: "A@gmail.com",
          removeBtn: { id: 1 }
        },
        {
          id: 2,
          name: "Nguyễn Văn B",
          email: "B@gmail.com",
          removeBtn: { id: 2 }
        },
        {
          id: 3,
          name: "Nguyễn Văn C",
          email: "C@gmail.com",
          removeBtn: { id: 3 }
        },
        {
          id: 4,
          name: "Nguyễn Văn D",
          email: "D@gmail.com",
          removeBtn: { id: 4 }
        },
        {
          id: 5,
          name: "Nguyễn Văn E",
          email: "E@gmail.com",
          removeBtn: { id: 5 }
        },
        {
          id: 6,
          name: "Nguyễn Văn F",
          email: "F@gmail.com",
          removeBtn: { id: 6 }
        }
      ]
    };
  },
  methods: {
    handleClickOneRow(index) {
      this.listUser.splice(index, 1);
    },
    handleAddStudent(data) {
      this.listUser.push(data);
    }
  },
  components: {
    ComponentHeader,
    ComponetFooter,
    AddStudentModal
  }
};
</script>

<style lang="scss">
</style>