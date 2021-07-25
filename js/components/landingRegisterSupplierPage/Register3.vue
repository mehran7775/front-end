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
                    <small class="pr-2">شماره کاری خودرا وارد کنید</small><br />
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
                ></div>
                <div class="w-100 mt-4">
                  <input
                    id="continue"
                    :class="[
                      !btnStatus1 ? 'active-btn' : null,
                      'w-100 text-center form-control font-weight-bold',
                    ]"
                    type="button"
                    value="ادامه"
                    :disabled="btnStatus1"
                    @click="continue_register()"
                  />
                </div>
                <div id="verify">
                  <div class="title_code">
                    <strong
                      >کد ارسال شده به شماره <span>({{ phone_nu }})</span> را
                      وارکنید</strong
                    >
                  </div>
                  <section>
                    <input
                      type="text"
                      size="1"
                      v-for="(key, i) in activationKeyFields"
                      :key="i"
                      :maxlength="key.length"
                      :data-length="key.length"
                      :data-index="i"
                      :ref="`input-${i}`"
                      v-model="key.value"
                      @input="handleActivationInput($event)"
                    />
                  </section>
                  <section id="send_again">
                    <span id="counter_time"></span>
                    <button
                      class="btn_again_code"
                      type="button"
                      :disabled="again_send_code"
                      @click="continue_register()"
                    >
                      دریافت دوباره کد -
                    </button>
                  </section>
                </div>
                <div class="w-100 mt-4 end_register">
                  <input type="hidden" name="code_email" :value="activationKey">
                  <input
                    :class="[
                      activationKey.length === 5 ? 'active-btn' : null,
                      'w-100 text-center form-control font-weight-bold',
                    ]"
                    type="submit"
                    value="ثبت"
                    :disabled="activationKey.length === 5 ? false : true"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
      <div id="left" class="h-100">
        <section id="bg">
          <img src="../../assets/images/machinery transport.jpg" alt="" />
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
// import EventService from "../../services/EventService";
export default {
  data() {
    return {
      btnStatus1: true,
      valid_phoneNumber: false,
      activationKeyFields: [
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
      ],
      phone_nu: "",
      again_send_code: true,
    };
  },
  computed: {
    regEx() {
      return this.$store.state.regularExpression;
    },
    messages_response() {
      return this.$store.getters.messages_response;
    },
    activationKey() {
      let value = "";
      for (let field of this.activationKeyFields) {
        value += field.value;
      }
      return value;
    },
    // btnStatus2(){
    //     if(this.activationKey){
    //         return this.activationKey.length
    //     }
    // }
  },
  created() {},
  methods: {
    validate(e) {
      let value = e.target.value;
      if (value === "") {
        e.target.classList.remove("is-invalid", "is-valid");
      } else {
        this.$store.commit("RESET_EXIST_USER", "phoneNumber");
        var res = value.match(this.regEx.reg_phoneNumber);
        if (res) {
          e.target.classList.remove("is-invalid");
          e.target.classList.add("is-valid");
          this.valid_phoneNumber = true;
        } else {
          e.target.classList.remove("is-valid");
          e.target.classList.add("is-invalid");
          this.valid_phoneNumber = false;
        }
      }
      this.btnStatus1 = !e.target.classList.contains("is-valid");
    },
    check_user_exist() {
      // let form=new FormData;
      if (this.$refs.phone_number.classList.contains("is-valid")) {
        let phoneNumber = this.$refs.phone_number.value;
        this.$store.dispatch("check_user_exist", phoneNumber);
      }
    },
    async continue_register() {
      try {
        const re = await this.$store.dispatch(
          "send_email_to_number",
          this.$refs.phone_number.value
        );
        if (re) {
          this.again_send_code = true;
          this.phone_nu = this.$refs.phone_number.value;
          document.getElementById("verify").style.display = "block";
          document.getElementById("continue").style.display = "none";
          var fiveMinutes = 90,
            display = document.getElementById("counter_time");
          this.startTimer(fiveMinutes, display);
          document.querySelector(".end_register").style.display = "block";
        }
      } catch (e) {
        console.log("e", e);
      }

      // res.then(response =>{
      //   console.log(response)
      // }).catch(error =>{
      //   console.log(error)
      // })
    },
    handleActivationInput(e) {
      // Grab input's value
      let value = e.target.value;
      // Grab data-index value
      let index = parseInt(e.target.dataset.index);
      // Grab data-length value
      let maxlength = e.target.dataset.length;

      if (this.activationKeyFields[index].value.length > maxlength) {
        e.preventDefault();
        this.activationKeyFields[index].value = value.slice(0, 6);
        try {
          this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        } catch (e) {}
        return;
      }

      // Shift focus to next input field if max length reached
      if (value.length >= maxlength) {
        if (typeof this.activationKeyFields[index + 1] == "undefined") {
          e.preventDefault();
          return;
        }
        this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        e.preventDefault();
      }
    },
    startTimer(duration, display) {
      var vm = this;
      var timer = duration,
        minutes,
        seconds;
      var start = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(start);
          vm.again_send_code = false;
          //   timer = duration;
        }
      }, 1000);
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
  bottom: 50px;
  left: 22%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #e5f8fd;
  /* color: var(--blue); */
  font-weight: bold;
  font-size: 19px;
  /* font-style: italic; */
}
.disable {
  pointer-events: none;
  opacity: 0.94;
  /* padding-right: 10px; */
}
#verify {
  width: 100%;
  margin-top: 5px;
  background-color: #fff;
  /* background-color: #2d9c47; */
  display: none;
}
.title_code {
  text-align: right;
}
.title_code strong {
  color: rgba(0, 0, 0, 0.664);
  padding: 5px;
}
#verify section {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}
#verify section input {
  padding: 10px;
  margin-right: 7px;
  max-width: 120px;
  text-align: center;
  font-size: 19px;
  color: var(--blue);
}
#send_again {
  text-align: right;
}
.btn_again_code {
  background-color: white;
  width: max-content;
  padding: 1px 5px 1px 5px;
  color: var(--blue) !important;
  border: none;
}
.end_register {
  display: none;
}
</style>
