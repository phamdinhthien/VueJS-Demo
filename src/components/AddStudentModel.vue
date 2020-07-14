<template>
  <div>
    <b-button
      variant="primary"
      id="show-btn"
      @click="$bvModal.show('bv-modal-example')"
      class="my-2"
    >Thêm SV</b-button>
    <b-modal id="bv-modal-example" hide-footer ref="add-student-modal">
      <template v-slot:modal-title>Thêm SV</template>
      <b-form-group>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">MSSV:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="id" placeholder="Nhập MSSV" id="id"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="name">Tên:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="name" placeholder="Nhập tên" id="name"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="email">Email:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="email" placeholder="Nhập email" id="email"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-button class="mt-2" variant="outline-danger" @click="handeCloseModal">Đóng</b-button>
      <b-button class="mt-2" variant="outline-success" @click="handleAddStudent">Thêm</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "add-student-modal",
  data() {
    return {
      id: "",
      name: "",
      email: ""
    };
  },
  methods: {
    handeCloseModal() {
      this.$refs["add-student-modal"].hide();
    },
    handleAddStudent() {
      if (this.validateValues()) {
        this.$emit("addStudent", {
          id: this.id,
          name: this.name,
          email: this.email,
          removeBtn: { id: this.id }
        });
        this.handeCloseModal();
      } else {
          alert("Các trường không được để trống");
      }
    },
    validateValues() {
      return (
        this.id.length > 0 && this.name.length > 0 && this.email.length > 0
      );
    }
  }
};
</script>

<style>
</style>