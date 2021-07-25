<template>
  <div id="company">
    <div class="form p-3 w-75 m-auto">
      <div class="form-group">
        <label for="name_company">رزومه شرکت را وارد کنید</label>
        <textarea
          name="cv"
          id="cv"
          cols="25"
          rows="4"
          v-model="cv"
          @input="validate"
          class="form-control"
          minlength="3"
          maxlength="700"
          placeholder="چندسال است فعالیت میکنید؟ چه تجربیاتی دارید؟ 
چه دستگاه هایی تولید میکنید؟ چه چیزی باعث برتری شما نسبت به دیگران می شود؟"
        >
        </textarea>
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
        e.target.classList.remove("is-invalid", "is-valid")
         let v = {
          name: e.target.name,
          value: false,
        };
         this.$store.commit("VALIDATED_MULTI_FORMS", v);
      } else {
        let res = value.match(this.regEx.description);
        if (res) {
            let v = {
              name: "cv",
              value: true,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
          e.target.classList.add("is-valid");
          e.target.classList.remove("is-invalid");
        } else {
            let v = {
              name: "cv",
              value: false,
            };
            this.$store.commit("VALIDATED_MULTI_FORMS", v);
          e.target.classList.remove("is-valid");
          e.target.classList.add("is-invalid");
        }
      }
    },
  },
  computed: {
    regEx() {
      return this.$store.state.regularExpression;
    },
    cv: {
      get() {
        return this.$store.state.multi_forms.cv;
      },
      set(value) {
        let p = {
          value: value,
          name: "cv",
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

@media screen and(max-width:576px) {
  .form{
    padding: 0!important;
  }
  textarea{
    width: 100%;
    height: 120px;
  }
}
</style>