<template>
  <div id="myPage">
    <div id="page_back">
      <about-supplier :company="company" :mTable="false"></about-supplier>
    </div>
    <div id="page_on">
      <div class="w-100">
        <a
          class="add_name c_pointer"
          v-on:click.stop.prevent="show_popup('name')"
        >
          <div><i class="fas fa-plus fa-2x colG"></i></div>
          <div><p>افزودن نام شرکت</p></div>
        </a>
      </div>
      <div class="mr-5 pb-1">
        <a
          class="add_name c_pointer"
          v-on:click.stop.prevent="show_popup('logo')"
        >
          <div><i class="fas fa-plus fa-2x colG"></i></div>
          <div><p>افزودن لوگوی شرکت</p></div>
        </a>
      </div>
      <div id="add_de">
        <a
          v-on:click.stop.prevent="show_popup('description')"
          class="add_de c_pointer"
        >
          <div><i class="fas fa-plus fa-2x colG"></i></div>
          <div><p>افزودن توضیحات شرکت</p></div>
        </a>
      </div>
      <div id="add_info">
        <a
          v-on:click.stop.prevent="show_popup('info_cantact')"
          class="add_de c_pointer"
        >
          <div><i class="fas fa-plus fa-2x colG"></i></div>
          <div><p>افزودن اطلاعات تماس شرکت</p></div>
        </a>
      </div>
      <div id="add_pro" class="w-100">
        <a href="/userpanel/products/create/" class="add_de">
          <div><i class="fas fa-plus fa-2x colG"></i></div>
          <div><p>اضافه کردن محصول</p></div>
        </a>
      </div>
    </div>
    <template>
      <popup-form :dif_form="dif_form" />
    </template>
  </div>
</template>

<script>
import AboutSupplier from "../../user/about_supplier/Index.vue";
// import Comment from "../../user/product/comments/Comment.vue";
import PopupForm from "./PopupForm.vue";
export default {
  props: {
    company: {
      type: String,
    },
  },
  data() {
    return {
      comment: {
        content: "بهترین شرکت رهپویان صنعته",
        id: 9,
        is_buyers: false,
        subs: "None",
        timestamp: "1400/3/24",
        username: "شمسی دو",
      },
      dif_form: "",
      // products: [{
      //     id:1,
      //     title:'',
      //     image:''
      // }
      // ],
    };
  },
  components: {
    PopupForm,
    // Comment,
    AboutSupplier,
  },
  methods: {
    show_popup(name) {
      this.dif_form = name;
      document.getElementById("popup_form").style.display = "block";
      console.log("popup");
    },
  },
  created() {
    // console.log("company", JSON.parse(this.company));
  },
};
</script>

<style scoped>
#myPage {
  width: 100%;
  height: 1000px;
  /* position: absolute; */
}
#page_back {
  width: 80%;
  height: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0.4;
  /* left: 0;
    top: 0; */
}

#page_on {
  width: calc(100%-230px);
  height: 100%;
  left: 0;
  right: 230px;
  /* background-color: blue; */
  position: absolute;
  z-index: 2;
  opacity: 0.98;
}
@media screen and (max-width: 1000px) {
  #page_on {
    width: 100%;
  }
}
.add_name {
  width: max-content;
  display: flex;
  align-items: center;
  /* background-color: burlywood; */
  text-decoration: none;
  color: black;
  margin: 7px 140px 0 0;
}
.add_name div p {
  font-size: 17px;
  font-weight: bold;
  padding: 10px 10px 0 0;
  box-sizing: border-box;
}
.add_de {
  width: max-content;
  text-decoration: none;
  color: black;
  text-align: center;
  margin-top: 40px;
}
.add_de > div > p {
  font-size: 17px;
  font-weight: bold;
}
#add_de {
  /* background-color: burlywood; */
  width: max-content;
  margin: 80px auto;
  margin-top: 80px;
}
#add_info {
  width: max-content;
  margin: 130px auto;
  /* background-color: hotpink; */
}
#add_pro {
  margin-top: 250px;
}
.add_pro > div > p {
  font-size: 17px;
  font-weight: bold;
}
.colG {
  color: rgba(4, 158, 4, 0.945);
}
.c_pointer:hover {
  cursor: pointer;
}
#title_desc {
  margin-top: 40px !important;
}
#title_desc h2 {
  color: red !important;
}
@media screen and (max-width: 1000px) {
  #page_back {
    width: 100%;
  }
}
.table {
  margin-top: 0 !important;
}
</style>
