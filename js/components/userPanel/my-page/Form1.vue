<template>
  <div id="company">
    <div class="form">
      <div class="form-group">
        <label for="name_company">نام شرکت</label>
        <input
          type="text"
          id="name_company"
          name="name_company"
          ref="name"
          minlength="3"
          maxlength="50"
          required
          v-model="name_company"
          @input="validate"
          class="form-control"
          placeholder="به فارسی وارد کنید"
        />
      </div>
      <div class="form-group">
        <label for="name_latin_company">نام لاتین شرکت</label>
        <input
          type="text"
          id="name_latin_company"
          name="name_latin_company"
          @input="validate"
          v-model="name_latin_company"
          class="form-control"
          placeholder="به لاتین وارد کنید"
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
        if (e.target.name === "name_company") {
          let v = {
            name: "name",
            value: false,
          };
          // console.log(v.name)
          this.$store.commit("VALIDATED_MULTI_FORMS", v);
        }
      } else {
        let name = e.target.name;
        if (name == "name_company") {
          let res = value.match(this.regEx.regNameCompany);
          if (res) {
            let v = {
              name: "name",
              value: true,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
          } else {
            let v = {
              name: "name",
              value: false,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
            e.target.classList.remove("is-valid");
            e.target.classList.add("is-invalid");
          }
        }
        if (name == "name_latin_company") {
        }
      }
    },
  },
  computed: {
    regEx() {
      return this.$store.state.regularExpression;
    },
    name_company: {
      get() {
        return this.$store.state.multi_forms.company.name;
      },
      set(value) {
        let p = {
          value: value,
          name: "name_company",
        };
        this.$store.commit("SET_MULTI_FORMS", p);
      },
    },
    name_latin_company: {
      get() {
        return this.$store.state.multi_forms.company.name_latin;
      },
      set(value) {
        let p = {
          value: value,
          name: "name_latin_company",
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