<template>
  <div class="col h-100">
    <div class="row h-100">
      <div id="right" class="h-100">
        <section id="header">
          <p>
            قبلا ثبت نام کرده اید؟ <span><a href="/users/entry">ورود</a></span>
          </p>
        </section>
        <section id="form">
          <div class="form">
            <form action="" method="post">
              <fieldset>
                <legend class="text-center">حساب کاربری خود را بسازید</legend>
                <div class="line"></div>
                <!-- <div class="form-group"> -->
                <div class="form-inline">
                  <div class="my" dir="">
                    <label for="fname" class="mb-1">نام</label>
                    <input
                      class="form-control"
                      type="text"
                      id="fname"
                      name="fname"
                      ref="fname"
                      @input="validate"
                      minlength="3"
                      maxlength="25"
                      placeholder="نام خودرا به فارسی وارد کنید"
                    />
                  </div>
                  <div class="my">
                    <label for="lname" class="mb-1">نام خانوادگی</label>
                    <input
                      class="form-control"
                      type="text"
                      id="lname"
                      name="lname"
                      ref="lname"
                      minlength="3"
                      maxlength="25"
                      @input="validate"
                      placeholder="نام خوانوادگی خود را به فارسی وارد"
                    />
                  </div>
                </div>
                <!-- </div> -->
                <div class="form-group mt-3">
                  <label for="phone_number">شماره موبایل</label>
                  <input
                    :class="[
                      messages_response.exist_user.phoneNumber
                        ? 'is-invalid'
                        : null,
                      'w-100 form-control',
                    ]"
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    ref="phone_number"
                    @input="validate($event), check_user_exist()"
                    maxlength="11"
                    placeholder="شماره موبایل خودرا وارد کنید"
                  />
                  <div class="de_phoneNumber">
                    <small>شماره کاری خودرا وارد کنید</small><br/>
                    <small
                      class="disable text-danger"
                      v-show="messages_response.exist_user.phoneNumber"
                      v-text="messages_response.exist_user.phoneNumber"
                    ></small>
                  </div>
                </div>
                <div
                  :class="[
                    messages_response.exist_user.phoneNumber ? 'mt-4' : null,
                    'form-group',
                  ]"
                >
                  <label for="password">رمز عبور</label>
                  <input
                    class="w-100 form-control"
                    type="password"
                    id="password"
                    name="password"
                    ref="password"
                    minlength="4"
                    maxlength="20"
                    @input="validate"
                    placeholder="رمز عبور شامل حداقل چهار و حداکثر بیست کاراکتر باشد"
                  />
                </div>
                <div class="w-100 mt-4">
                  <input
                    :class="[
                      !btnStatus ? 'active-btn' : null,
                      'w-100 text-center form-control font-weight-bold',
                    ]"
                    type="submit"
                    value="ثبت"
                    :disabled="btnStatus"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
      <div id="left" class="h-100">
        <section id="bg">
          <img src="../../assets/images/12314.webp" alt="" />
          <div class="text_centerd">
            آسان بفروشید<br />
            دمیرکو ارتبط مستقیم تولید کننده و خریدار
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnStatus: true,
      valid_phoneNumber:false
    };
  },
  computed: {
    regEx() {
      return this.$store.state.regularExpression;
    },
    messages_response() {
      return this.$store.getters.messages_response;
    },
  },
  methods: {
    validate(e) {
      let value = e.target.value;
      if (value === "") {
        e.target.classList.remove("is-invalid", "is-valid")
      } else {
        switch (e.target.id) {
          case "fname":
            var res = value.match(this.regEx.regName)
            if (res) {
              e.target.classList.remove("is-invalid")
              e.target.classList.add("is-valid")
            } else {
              e.target.classList.remove("is-valid")
              e.target.classList.add("is-invalid")
            }
            break;
          case "lname":
            var res = value.match(this.regEx.regLastName)
            if (res) {
              e.target.classList.remove("is-invalid")
              e.target.classList.add("is-valid")
            } else {
              e.target.classList.remove("is-valid")
              e.target.classList.add("is-invalid")
            }
            break;
          case "phone_number":
            this.$store.commit("RESET_EXIST_USER", "phoneNumber")
            var res = value.match(this.regEx.reg_phoneNumber)
            if (res) {
              e.target.classList.remove("is-invalid")
              e.target.classList.add("is-valid")
              this.valid_phoneNumber=true
            } else {
              e.target.classList.remove("is-valid")
              e.target.classList.add("is-invalid")
              this.valid_phoneNumber=false
            }
            break;
          case "password":
            var res = value.match(this.regEx.regPassword)
            if (res) {
              e.target.classList.remove("is-invalid")
              e.target.classList.add("is-valid");
            } else {
              e.target.classList.remove("is-valid")
              e.target.classList.add("is-invalid")
            }
            break;
        }
      }
      let i1 = this.$refs.fname;
      let i2 = this.$refs.lname;
      let i3 = this.$refs.phone_number;
      let i4 = this.$refs.password;
      this.btnStatus = !(
        i1.classList.contains("is-valid") &&
        i2.classList.contains("is-valid") &&
        i3.classList.contains("is-valid") &&
        i4.classList.contains("is-valid")
      );
    },
    check_user_exist() {
      // let form=new FormData;
      if (this.$refs.phone_number.classList.contains("is-valid")) {
        let phoneNumber = this.$refs.phone_number.value;
        this.$store.dispatch("check_user_exist", phoneNumber);
      }
    },
  },
};
</script>

<style scoped>
#register {
  width: 100%;
  height: 100%;
  /* background-color: blueviolet; */
}
#right {
  width: 58%;
  /* background-color: coral; */
}
#left {
  width: 42%;
  background-color: darkgray;
}
#header {
  width: 100%;
  text-align: right;
}
#header p {
  padding: 10px;
  font-weight: bold;
}
#form {
  width: 100%;
}
.form {
  width: 70%;
  margin: 20px auto;
  /* background-color: darksalmon; */
}
.form form {
  width: 100%;
}
.line {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.164);
  margin-bottom: 15px;
}
.form-inline {
  justify-content: space-between;
}
legend {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.664);
}
label {
  display: block;
  text-align: right !important;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.664);
}
.my {
  width: 48%;
  text-align: right;
}
.my input {
  width: 100%;
}
small {
  color: rgba(0, 0, 0, 0.486);
}
.de_phoneNumber {
  width: 100%;
  height: 20px;
  text-align: right;
}
#bg {
  width: 100%;
  height: 100%;
}
#bg img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-image: url("../../../assets/images/83iopusl.webp"); */
}
@media screen and (max-width: 800px) {
  #left {
    display: none;
  }
  #right {
    width: 100%;
  }
}
.is-invalid {
  border: 1px solid #e3356f;
}

.is-valid {
  border: 1px solid #43c761;
}
.active-btn {
  /* border-radius: 0px!important; */
  /* border-color: #34ce57; */
  /* outline: #59e45da9 solid 1px; */
  background-color: #43c761;
  color: #fff;
}
.active-btn:hover {
  background-color: #2d9c47;
}
.text_centerd {
  position: absolute;
  top: 48%;
  left: 22%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #e5f8fd;
  font-weight: bold;
  font-size: 19px;
  font-style: italic;
}
.disable {
  pointer-events: none;
  opacity: 0.94;
  /* padding-right: 10px; */
}
</style>
