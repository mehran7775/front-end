<template>
  <div id="company">
    <div class="form p-3 w-75 m-auto">
      <div class="form-group">
        <!-- <legend class="font-weight-bold">آدرس شرکت یا کارخانه را وارد کنید</legend> -->
        <label for="province">استان</label>
        <input
          type="text"
          id="province"
          name="province"
          minlength="3"
          maxlength="35"
          required
          v-model="province"
          @input="validate"
          class="form-control"
          placeholder="استان خودرا وارد کنید"
        />
      </div>
      <div class="form-group">
        <label for="city">شهر</label>
        <input
          type="text"
          id="city"
          name="city"
          minlength="3"
          maxlength="35"
          required
          v-model="city"
          @input="validate"
          class="form-control mt-2"
          placeholder="شهر خودرا وارد کنید"
        />
      </div>
      <div class="form-group">
        <label for="ots">آدرس دقیق</label>
        <input
          type="text"
          id="ots"
          name="ots"
          minlength="3"
          maxlength="35"
          required
          v-model="ots"
          @input="validate"
          class="form-control mt-2"
          placeholder="خیابان،کوچه،پلاک"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    validate(e) {
      let value = e.target.value;
      if (value === "") {
        e.target.classList.remove("is-invalid", "is-valid");
        let v = {
          name: e.target.name,
          value: false,
        };
        // console.log(v.name)
        this.$store.commit("VALIDATED_MULTI_FORMS", v);
      } else {
        let name = e.target.name;
        if (name == "city") {
          let res = value.match(this.regEx.regLastName);
          if (res) {
            let v = {
              name: "city",
              value: true,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
          } else {
            let v = {
              name: "city",
              value: false,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.remove("is-valid");
            e.target.classList.add("is-invalid");
          }
        }
        if (name == "province") {
          let res = value.match(this.regEx.regLastName);
          if (res) {
            let v = {
              name: "province",
              value: true,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
          } else {
            let v = {
              name: "province",
              value: false,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.remove("is-valid");
            e.target.classList.add("is-invalid");
          }
        }
        if (name == "ots") {
          let res = value.match(this.regEx.regNameCompany);
          if (res) {
            let v = {
              name: "ots",
              value: true,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
          } else {
            let v = {
              name: "ots",
              value: false,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.remove("is-valid");
            e.target.classList.add("is-invalid");
          }
        }
      }
    },
  },
  computed: {
    regEx() {
      return this.$store.state.regularExpression;
    },
    province: {
      get() {
        return this.$store.state.multi_forms.address.province;
      },
      set(value) {
        let p = {
          value: value,
          name: "province",
        };
        this.$store.commit("SET_MULTI_FORMS", p);
      },
    },
    city: {
      get() {
        return this.$store.state.multi_forms.address.city;
      },
      set(value) {
        let p = {
          value: value,
          name: "city",
        };
        this.$store.commit("SET_MULTI_FORMS", p);
      },
    },
    ots: {
      get() {
        return this.$store.state.multi_forms.address.ots;
      },
      set(value) {
        let p = {
          value: value,
          name: "ots",
        };
        this.$store.commit("SET_MULTI_FORMS", p);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#company {
  width: 100%;
  //   background-color: aquamarine;
  //   height: 150px;
}
label {
  font-weight: bold;
}
.is-invalid {
  border: 1px solid #e3356f;
}

.is-valid {
  border: 1px solid #43c761;
}
</style>