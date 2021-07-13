<template>
  <div id="popup_form">
    <div class="form">
      <div class="close_form" @click="hide_form()">
        <i class="fa fa-times fa-2x icon_close" aria-hidden="true"></i>
      </div>
      <form action="" method="post" enctype="multipart/form-data">
        <div v-if="dif_form === 'name'" class="form-group">
          <label for="name">نام شرکت</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            class="form-control"
            v-model="title2"
            :placeholder="slug == 'default-slug' ? title : 'نام شرکت شما چیست'"
          />
        </div>
        <div v-if="dif_form === 'name'" class="form-group">
          <label for="name_latin">نام لاتین شرکت</label>
          <input
            type="text"
            name="name_latin"
            id="name_latin"
            class="form-control"
          />
          <small>برای بهتر دیده شدن اسم انگلیسی شرکت خود را وارد کنید</small>
        </div>
        <div v-if="dif_form === 'logo'" class="form-group">
          <label for="logo">انتخاب لوگو</label>
          <br />
          <div class="btn btn-secondary m-2" @click="select_file">
            انتخاب فایل
          </div>
          <input
            type="file"
            ref="logo"
            name="file_logo"
            id="file_logo"
            style="display: none"
            @change="get_name"
          />
          <br />
          <div class="pr-3">
            <strong v-if="name_file" v-text="name_file"></strong>
            <strong v-else
              >لوگو یا تصویری را که برای شرکت استفاده میکنید اضافه کنید</strong
            >
          </div>
          <!-- <input
            required
            type="file"s
            name="logo"
            id="logo"
            class="form-control-file"
          /> -->
        </div>
        <div v-if="dif_form === 'description'" class="form-group">
          <label for="description">توضیحات شرکت</label>
          <textarea
            required
            class="form-control"
            id="description"
            name="description"
            v-model="bio2"
             :placeholder="slug == 'default-slug' ?  bio : 'رزومه شرکت خود را وارد کنید'"
          ></textarea>
        </div>
        <div v-if="dif_form === 'info_cantact'" class="form-group">
          <label for="phone_number">شماره تلفن ثابت</label>
          <input
            required
            type="text"
            name="phone_number"
            id="phone_number"
            class="form-control"
            placeholder="شماره تلفن خودرا وارد کنید"
            v-model="phone_number"
          />
        </div>
        <div v-if="dif_form === 'info_cantact'" class="form-group">
          <label for="website">ادرس وبسایت</label>
          <input
            type="text"
            name="website"
            id="website"
            class="form-control"
            placeholder="آدرس وبسایت خودرا وارد کنید"
            v-model="website"
          />
        </div>
        <div v-if="dif_form === 'info_cantact'" class="form-group">
          <label for="province">آدرس</label>
          <input
            type="text"
            name="province"
            id="province"
            class="form-control"
            required
            placeholder="استان خود را وارد کنید"
            v-model="province"
          />
        </div>
        <div v-if="dif_form === 'info_cantact'" class="form-group">
          <!-- <label for="city">شهر</label> -->
          <input
            type="text"
            name="city"
            id="city"
            class="form-control"
            required
            placeholder="شهر خود را وارد کنید"
            v-model="city"
          />
        </div>
        <div v-if="dif_form === 'info_cantact'" class="form-group">
          <!-- <label for="extra">توضیحات بیشتر</label> -->
          <textarea
            name="extra"
            id="extra"
            class="form-control"
            placeholder="آدرس دقیق را وارد کنید"
            v-model="address"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-success mr-2" value="ثبت" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dif_form: {
      type: String,
    },
    title: {
      type: String,
    },
    bio: {
      type: String,
    },
    address: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    logo: {
      type: String,
    },
    website: {
      type: String,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  data() {
    return {
      name_file: "",
      // phone: "02158478960",
    };
  },
  computed: {
    title2() {
      return this.slug !== "default-slug" ? this.title : "";
      // if(this.slug!=='default-slug'){
      //   return this.title
      // }
    },
    bio2(){
      return this.slug !== "default-slug" ? this.bio : "";
    }
  },
  created() {
    console.log(this.slug, "slug");
  },
  mounted() {
    console.log(document.getElementById("logo"));
  },
  methods: {
    hide_form() {
      document.getElementById("popup_form").style.display = "none";
      let userpanel = document.getElementById("userPanel");
      console.log(userpanel);
      userpanel.style.height = "auto";
      userpanel.style.overflow = "visible";
    },
    select_file() {
      console.log(document.getElementById("file_logo").click());
    },
    get_name(e) {
      this.name_file = e.target.files[0].name;
    },
  },
};
</script>

<style lang="scss" scoped>
#popup_form {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.096);
  z-index: 999;
  display: none;
  direction: rtl;
  text-align: right;
}
.form {
  width: 50%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(175, 179, 180, 0.89);
  margin: 100px auto;
}
.form form {
  width: 100%;
  margin-top: 30px;
  padding: 40px;
  box-sizing: border-box;
}
.icon_close {
  margin-left: 15px;
  margin-top: 10px;
  float: left;
  transition: all 0.2s;
}
.icon_close:hover {
  color: rgb(184, 0, 0);
  cursor: pointer;
}
label {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.671);
}
@media screen and (max-width: 768px) {
  .form {
    width: 87%;
  }
}
@media screen and (max-width: 420px) {
  .form {
    width: 95%;
  }
}
</style>
