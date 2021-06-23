<template>
  <div class="col">
    <div class="row">
      <div id="right">
        <section id="header">
          <p>
            قبلا ثبت نام کرده اید؟ <span><a href="/users/entry">ورود</a></span>
          </p>
        </section>
        <section id="form">
          <div class="form">
            <form action="" method="post">
              <fieldset>
                <legend class="text-center">
                  حساب کاربری خود را بسازید
                </legend>
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
                    />
                  </div>
                </div>
                <!-- </div> -->
                <div class="form-group mt-3">
                  <label for="phone_number">شماره تلفن</label>
                  <input
                    class="w-100 form-control"
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    ref="phone_number"
                  />
                  <div class="de_phoneNumber">
                    <small>شماره تلفن کاری خودرا وارد کنید</small>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password">رمز عبور</label>
                  <input
                    class="w-100 form-control"
                    type="password"
                    id="password"
                    name="password"
                    ref="password"
                  />
                </div>
                <div class="w-100">
                  <input
                    class="w-100 text-center form-control"
                    type="submit"
                    value="ثبت"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
      <div id="left">
        <section id="bg">
          <img src="../../assets/images/83iopusl.webp" alt="" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#register {
  width: 100%;
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
  height: 350px;
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
  height: 635px;
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
</style>
