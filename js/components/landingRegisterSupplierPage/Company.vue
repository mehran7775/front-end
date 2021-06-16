<template>
  <div class="col">
    <div class="w-50 m-auto p-3" id="progress">
      <progress-bar text-position="middle" size="huge" val="58" text="58%"></progress-bar>
    </div>
    <form action="" method="post">
      <fieldset>
        <legend>ثبت اطلاعات شرکت</legend>
        <div class="form-group">
          <label for="name">نام شرکت</label>
          <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              ref="name"
              maxlength="64"
              @input="validate('name')"
              placeholder="نام شرکت را وارد کنید"
              :class="[
                inValidated.name ? 'is-invalid' : null,
                validated.name ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="address">آدرس شرکت</label>
          <input
              type="text"
              class="form-control"
              id="address"
              name="address"
              ref="address"
              @input="validate('address')"
              maxlength="150"
              placeholder="آدرس شرکت را وارد کنید"
              :class="[
                inValidated.address ? 'is-invalid' : null,
                validated.address ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small id="name" class="form-text text-muted text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="province">استان</label>
          <input
              type="text"
              id="province"
              maxlength="25"
              name="province"
              ref="province"
              placeholder="نام استان را به فارسی وارد کنید"
              @input="validate('province')"
              :class="[
                inValidated.province ? 'is-invalid' : null,
                validated.province ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small
          class="form-text text-danger pr-2"

        >
        tyjkytfgjhnrfj
        </small> -->
        </div>
        <div class="form-group">
          <label for="city">شهر</label>
          <input
              type="text"
              id="city"
              maxlength="25"
              name="city"
              ref="city"
              placeholder="نام شهر را به فارسی وارد کنید"
              @input="validate('city')"
              :class="[
                inValidated.city ? 'is-invalid' : null,
                validated.city ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small
          class="form-text text-danger pr-2"

        >
        tyjkytfgjhnrfj
        </small> -->
        </div>
        <div class="form-group">
          <label for="semat">سمت در شرکت</label>
          <input
              type="text"
              id="semat"
              maxlength="25"
              name="semat"
              ref="semat"
              placeholder="به فارسی وارد کنید"
              @input="validate('semat')"
              :class="[
                inValidated.semat ? 'is-invalid' : null,
                validated.semat ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small
          class="form-text text-danger pr-2"

        >
        tyjkytfgjhnrfj
        </small> -->
        </div>
        <button type="submit" class="btn btn-primary mr-3 --blue" :disabled="btnStatus">
          ثبت
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import ProgressBar from "vue-simple-progress";

export default {
  name: "Compoany",
  components: { ProgressBar },
  data() {
    return {
      btnStatus: true,
      validated: {
        name: false,
        address: false,
        semat: false,
        province: false,
        city: false,
      },
      inValidated: {
        name: false,
        address: false,
        semat: false,
        province: false,
        city: false,
      },
    };
  },
  computed: {
    regularExpression() {
      return this.$store.getters.regularExpression;
    },
  },
  methods: {
    validate(id) {
      let el = document.getElementById(id).value;
      if (el === "") {
        let tag = document.getElementById(id);
        tag.classList.remove("is-invalid");
      } else {
        switch (id) {
          case "name": {
            // this.$store.commit("RESET_EXIST_USER",'username');
            let name = this.$refs.name.value;
            let res = name.match(
              this.$store.state.regularExpression.regNameCompany
            );
            if (res) {
              this.validated.name = true;
              this.inValidated.name = false;
            } else {
              this.validated.name = false;
              this.inValidated.name = true;
            }
            break;
          }
          case "address": {
            // this.$store.commit("RESET_EXIST_USER",'username');
            let address = this.$refs.address.value;
            let res = address.match(
              this.$store.state.regularExpression.regAddressCompany
            );
            if (res) {
              this.validated.address = true;
              this.inValidated.address = false;
            } else {
              this.validated.address = false;
              this.inValidated.address = true;
            }
            break;
          }
          case "semat": {
            // this.$store.commit("RESET_EXIST_USER",'username');
            let semat = this.$refs.semat.value;
            let res = semat.match(this.$store.state.regularExpression.regName);
            if (res) {
              this.validated.semat = true;
              this.inValidated.semat = false;
            } else {
              this.validated.semat = false;
              this.inValidated.semat = true;
            }
            break;
          }
          case "province": {
            // this.$store.commit("RESET_EXIST_USER",'username');
            let province = this.$refs.province.value;
            let res = province.match(this.$store.state.regularExpression.regName);
            if (res) {
              this.validated.province = true;
              this.inValidated.province = false;
            } else {
              this.validated.province = false;
              this.inValidated.province = true;
            }
            break;
          }
          case "city": {
            // this.$store.commit("RESET_EXIST_USER",'username');
            let city = this.$refs.city.value;
            let res = city.match(this.$store.state.regularExpression.regName);
            if (res) {
              this.validated.city = true;
              this.inValidated.city = false;
            } else {
              this.validated.city = false;
              this.inValidated.city = true;
            }
            break;
          }
        }
      }
      this.btnStatus = !(
        this.validated.name &&
        this.validated.address &&
        this.validated.semat && this.validated.province && this.validated.city 
      );
    },
  },
};
</script>

<style scoped>
* {
  font-family: iranSans !important;
}

form {
  padding: 20px;
  direction: rtl;
  text-align: right;
}
::placeholder {
  height: 100%;
}
.--blue {
  width: 60px;
  background-color: var(--blue) !important;
}
label{
  font-weight: bold;
}
@media screen and (max-width: 576px) {
  #progress {
    width: 90% !important;
  }
}
</style>
