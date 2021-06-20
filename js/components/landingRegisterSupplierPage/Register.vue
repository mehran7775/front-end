<template>
  <div class="w-100">
      <!-- <div class="w-50 m-auto p-3" id="progress">
        <progress-bar text-position="middle" size="huge" val="0" text="0%"></progress-bar>
      </div> -->
    <form action="" method="post">
      <fieldset>
        <legend>ثبت اطلاعات</legend>
        <div class="form-group">
          <label for="full_name">نام ونام خانوادگی</label>
          <input
              type="text"
              class="form-control"
              id="full_name"
              name="full_name"
              ref="full_name"
              minlength="3"
              maxlength="50"
              required
              @input="validate"
              placeholder="نام کامل خودرا وارد کنید"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="username">نام کاربری</label>
          <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              ref="username"
              minlength="3"
              maxlength="20"
              required
              @input="validate"
              placeholder="نام کاربری را وارد کنید"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="phone_number">شماره تلفن</label>
          <input
              type="text"
              class="form-control"
              id="phone_number"
              name="phone_number"
              ref="phone_number"
              maxlength="11"
              required
              @input="validate"
              placeholder="شماره تلفن خودرا وارد کنید"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="email">ایمیل</label>
          <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              maxlength="50"
              @input="validate"
              placeholder="ایمیل خودرا وارد کنید"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="semat">صمت در شرکت</label>
          <input
              type="text"
              class="form-control"
              id="semat"
              name="semat"
              ref="semat"
              minlength="3"
              maxlength="35"
              required
              @input="validate"
              placeholder="نام کامل خودرا وارد کنید"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="password">رمز عبور</label>
          <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              ref="password"
              minlength="4"
              maxlength="20"
              required
              @input="validate"
              placeholder="رمزعبور خودرا وارد کنید"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <button type="submit" class="btn btn-primary btn-register" :disabled="btnStatus">
          ثبت
        </button>
      </fieldset>
    </form>
  </div>
</template>


<script>
import ProgressBar from "vue-simple-progress";

export default {
  name: "Register",
  data() {
    return {
      btnStatus: true,
      validated: {
        firstname: false,
        lastname: false,
        phoneNumber: false,
      },
      inValidated: {
        firstname: false,
        lastname: false,
        phoneNumber: false,
      },
    };
  },
  components: {
    ProgressBar,
  },
  computed: {
    regEx() {
      return this.$store.getters.regularExpression;
    },
  },
  methods: {
    validate(e) {
      // console.log(e)
      let value = e.target.value;
      if (value === "") {
        e.target.classList.remove("is-invalid", "is-valid");
      } else {
        switch (e.target.id) {
          case "full_name":
            var res = value.match(this.regEx.regFullName);
            if (res) {
              e.target.classList.remove("is-invalid");
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid");
              e.target.classList.add("is-invalid");
            }
            break;
          case "username":
            var res = value.match(this.regEx.regUsername);
            if (res) {
              e.target.classList.remove("is-invalid");
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid");
              e.target.classList.add("is-invalid");
            }
            break;
          case "phone_number":
            var res = value.match(this.regEx.reg_phoneNumber);
            if (res) {
              e.target.classList.remove("is-invalid");
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid");
              e.target.classList.add("is-invalid");
            }
            break;
          case "email":
            var res = value.match(this.regEx.regEmail);
            if (res) {
              e.target.classList.remove("is-invalid");
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid");
              e.target.classList.add("is-invalid");
            }
            break;
          case "semat":
            var res = value.match(this.regEx.regLastName);
            if (res) {
              e.target.classList.remove("is-invalid");
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid");
              e.target.classList.add("is-invalid");
            }
            break;
          case "password":
            var res = value.match(this.regEx.regPassword);
            if (res) {
              e.target.classList.remove("is-invalid");
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid");
              e.target.classList.add("is-invalid");
            }
            break;
        }
      }
      let i1 = this.$refs.full_name;
      let i2 = this.$refs.username;
      let i3 = this.$refs.phone_number;
      let i4 = this.$refs.semat;
      let i5 = this.$refs.password;
      this.btnStatus = !(
        i1.classList.contains("is-valid") &&
        i2.classList.contains("is-valid") &&
        i3.classList.contains("is-valid") &&
        i4.classList.contains("is-valid") &&
        i5.classList.contains("is-valid")
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
  width: 75%;
  margin: 20px auto;
  direction: rtl;
  text-align: right;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  border-radius: 4px;
}
::placeholder {
  height: 100%;
}
@media screen and (max-width: 576px) {
  #progress {
    width: 90% !important;
  }
}
legend {
  font-size: 21px !important;
}
label {
  font-weight: bold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.726);
}
::placeholder {
  font-weight: 500;
  font-size: 14px;
}
.btn-register {
  width: 60px;
  font-weight: bold;
  font-size: 16px;
  margin-right: 7px;
}
.is-invalid {
  border: 1px solid #e3356f;
}

.is-valid {
  border: 1px solid #34ce57 !important;
}
</style>
