<template>
  <div id="about_supplier">
    <div id="main_top">
      <div class="w-100 d-flex flex-column flex-sm-row">
        <div class="w-100 w-sm-50">
          <div class="title">
            <div class="d-flex align-items-center">
              <div>
                <h1 v-text="JSON.parse(company).title"></h1>
              </div>
              <a
                v-if="userpanel"
                class="d-flex align-items-center mr-2 text-dark c_pointer"
                v-on:click.stop.prevent="show_popup('name')"
              >
                <div><i class="fas fa-plus fa-2x colG"></i></div>
                <div>
                  <p class="font-weight-bold mt-2 mr-2">افزودن نام شرکت</p>
                </div>
              </a>
            </div>
          </div>
          <div class="logo">
            <div id="logo">
              <img :src="JSON.parse(company).logo" alt="لوگو" />
              <!-- <img src="/static/public/images/logo.jpg" alt="لوگو" /> -->
            </div>
            <a
              v-if="userpanel"
              class="d-flex align-items-center text-dark mr-2 c_pointer"
              v-on:click.stop.prevent="show_popup('logo')"
            >
              <div><i class="fas fa-plus fa-2x colG"></i></div>
              <div>
                <p class="font-weight-bold mt-2 mr-2">افزودن لوگوی شرکت</p>
              </div>
            </a>
          </div>
        </div>
        <div class="w-100 w-sm-50 mt-sm-2">
          <div id="rating" class="ml-sm-5 mt-sm-3 m-auto" v-if="userpanel">
            <div class="t_rate">
              <p>
                <span class="font-weight-bold" v-text="'رتبه شرکت '+ JSON.parse(company).title"></span><br />
                <small>(براساس نظر مشتریان)</small>
              </p>
            </div>
            <div class="s_rate">
              <div class="rate_number">
                <span
                  id="rate_number"
                  v-text="JSON.parse(company).rating"
                ></span
                ><span class="from_rate">/5</span>
              </div>
              <div class="rate_star">
                <star-rating
                  :rating="JSON.parse(company).rating"
                  :star-style="starStyle"
                ></star-rating>
              </div>
            </div>
            <div class="des_rate">
              <p>
                امتیاز براساس کیفیت خدمات،کیفیت دستگاه و سرعت پاسخگویی می باشد
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="description">
        <div id="desc" class="bg-white pb-1">
          <div id="title_desc">
            <h2>توضیحات شرکت</h2>
          </div>
          <p class="p-2" v-text="JSON.parse(company).bio"></p>
          <!-- <br /> -->
        </div>
        <a
          v-if="userpanel"
          class="m-auto text-center d-block text-dark c_pointer bg-white w-100"
          v-on:click.stop.prevent="show_popup('description')"
        >
          <div><i class="fas fa-plus fa-2x colG"></i></div>
          <div><p class="font-weight-bold">افزودن توضیحات شرکت</p></div>
        </a>
        <div id="information" class="bg-white pr-2 pl-2">
          <div id="title_desc" :class="[!mTable ? 'my_top' : null]">
            <h2>اطلاعات شرکت</h2>
          </div>
          <div class="my-table">
            <div class="w-100 d-flex justify-content-between pr-1">
              <div class="coll font-weight-bold">آدرس</div>
              <div class="coll font-weight-bold">شماره تلفن</div>
              <div class="coll font-weight-bold">وبسایت</div>
            </div>
            <div class="w-100 d-flex justify-content-between pr-1">
              <div class="coll content_info">
                <span v-text="JSON.parse(company).address"></span>
              </div>
              <div class="coll content_info">
                <span v-text="JSON.parse(company).phone_number"></span>
              </div>
              <div class="coll content_info">
                <span v-text="JSON.parse(company).website"></span>
              </div>
            </div>
            <!-- <table :class="[!mTable ? 'mt-0' : null, 'table']">
              <tr>
                <th>آدرس</th>
                <th>شماره تلفن</th>
                <th>وبسایت</th>
              </tr>
              <tr>
                <td v-text="JSON.parse(company).address"></td>
                <td v-text="JSON.parse(company).phone_number"></td>
                <td v-text="JSON.parse(company).website"></td>
              </tr>
            </table> -->
          </div>
          <a
            v-if="userpanel"
            class="
              m-auto
              text-center text-dark
              c_pointer
              bg-white
              d-block
              w-100
            "
            v-on:click.stop.prevent="show_popup('info_cantact')"
          >
            <div><i class="fas fa-plus fa-2x colG"></i></div>
            <div>
              <p class="font-weight-bold">افزودن اطلاعات تماس شرکت</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="main">
      <div class="title">
        <h1>محصولات شرکت {{ JSON.parse(company).title }}</h1>
      </div>
      <div id="product_company">
        <div class="products">
          <div v-for="item in pageOfItems" :key="item.id">
            <div class="item">
              <a :href="'/product/' + item.slug" class="link-item">
                <div class="item-origin">
                  <div class="pic">
                    <!-- <img src="/static/public/images/shrink2.png" alt="تصویر ناقص است"> -->
                    <img :src="item.thumbnail" alt="تصویر ناقص است" />
                  </div>
                  <div class="text">
                    <h1 class="name" v-text="item.title">
                      <!-- jdicbvmdjsikrjfhdmsjciqogldmsjcz.5pdloseuiloi526894253698710 -->
                    </h1>
                    <p class="info mt-1" v-text="item.short_description">
                      <!--                      jifhguriopamvk111forqwjfiormbkshhhhhhhhhhhhhhhhhh75698hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhcskdclfvpdjflroewhnfkvpahskehdn,lashvkociejrfvhsqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq-->
                    </p>
                  </div>
                  <div class="cost2">
                    <p v-if="item.price || item.second_price">
                      <span class="font-weight-bold">قیمت:</span>
                      <span v-if="item.price && item.second_price">
                        {{ separate(item.price) + "تومان" }} -
                        {{ separate(item.second_price) + "تومان" }}</span
                      >
                      <span v-else>{{ separate(item.price) + "تومان" }}</span>
                    </p>
                    <p v-else>
                      <span class="font-weight-bold">قیمت: </span>
                      وارد نشده است
                    </p>
                    <p v-if="item.shamsi_last_edited">
                      <strong>اخرین بروزرسانی قیمت:</strong>
                      <span v-text="item.shamsi_last_edited"></span>
                    </p>
                  </div>
                </div>
                <div class="cost">
                  <!--                  /images/products/2021/02/None_VhXLXMd.webp-->
                  <p v-if="item.price || item.second_price">
                    <span>قیمت:</span>
                    <span v-if="item.price && item.second_price">
                      {{ separate(item.price) + "تومان" }} تا
                      {{ separate(item.second_price) + "تومان" }}</span
                    >
                    <span v-else>{{ separate(item.price) + "تومان" }}</span>
                  </p>
                  <p v-else>
                    <span class="font-weight-bold">قیمت: </span>
                    وارد نشده است
                  </p>
                  <p v-if="item.shamsi_last_edited">
                      <strong>اخرین بروزرسانی قیمت:</strong>
                      <span v-text="item.shamsi_last_edited"></span>
                    </p>
                </div>
              </a>
            </div>
            <hr class="line" />
            <!--            <div class="w-75 m-auto">-->
            <!--            </div>-->
          </div>
        </div>
      </div>
      <a
        v-if="userpanel"
        href="/userpanel/products/create/"
        class="m-auto text-center text-dark c_pointer add_pro"
      >
        <div><i class="fas fa-plus fa-2x colG"></i></div>
        <div><p class="font-weight-bold">اضافه کردن محصول</p></div>
      </a>
      <div class="text-center">
        <paginate
          class="m-auto"
          :items="products"
          @changePage="onChangePage"
          :styles="myStyle"
        ></paginate>
      </div>
    </div>
    <div id="main_bottom" v-if="!userpanel">
      <div class="title">
        <h1>نظریات مشتریان</h1>
      </div>
      <div class="comments">
        <comment-my :comments="JSON.parse(company).comments" />
      </div>
    </div>
    <template>
      <popup-form
        :dif_form="dif_form"
        :title="JSON.parse(company).title"
        :logo="JSON.parse(company).logo"
        :bio="JSON.parse(company).bio"
        :address="JSON.parse(company).address"
        :phone_number="JSON.parse(company).phone_number"
        :website="JSON.parse(company).website"
        :province="JSON.parse(company).province"
        :city="JSON.parse(company).city"
        :slug="JSON.parse(company).slug"
      />
    </template>
  </div>
</template>

<script>
const exampleItems = [
  {
    id: 1,
    slug: "rherhe",
    product_image: "lihiohriob",
    title: "euogfawuilfgwp89egvb",
    short_description: "weugsdbv",
    price: 54651,
    second_price: 3546546,
  },
];
import Paginate from "../mainCategories/paginate/Paginate.vue";
import CommentMy from "../product/comments/CommentMy.vue";
import PopupForm from "./PopupForm.vue";
import StarRating from "vue-dynamic-star-rating";
export default {
  // props:['company','mTable','userpanel'],
  props: {
    company: {
      type: String,
      required: true,
    },
    mTable: {
      type: Boolean,
    },
    userpanel: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    console.log("co", JSON.parse(this.company));
    console.log("myPa", this.mTable);
  },
  computed: {
    products() {
      return JSON.parse(this.company).products;
    },
    comments() {
      return JSON.parse(this.company).comments;
    },
  },
  data() {
    return {
      starStyle: {
        fullStarColor: "#ed8a19",
        emptyStarColor: "#737373",
        starWidth: 30,
        starHeight: 30,
        isIndicatorActive: false,
      },
      // config2: {
      //   rating: 3,
      //   isIndicatorActive: false,
      //   style: {
      //     fullStarColor: "#ed8a19",
      //     emptyStarColor: "#737373",
      //     starWidth: 21,
      //     starHeight: 21,
      //   },
      // },
      exampleItems,
      pageOfItems: [],
      myStyle: {
        li: {
          margin: "3px!important",
          padding: "3px!important",
        },
        a: {
          margin: "10px!important",
          padding: "5px!important",
        },
      },
      dif_form: "",
      // comments:'None'
    };
  },
  components: {
    StarRating,
    Paginate,
    CommentMy,
    PopupForm,
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    separate(Number) {
      Number += "";
      Number = Number.replace(",", "");
      let x = Number.split(".");
      let y = x[0];
      let z = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/; //ینی چهار رقم وجودداشته باشد
      while (rgx.test(y))
        // console.log()
        // console.log(rgx)
        y = y.replace(rgx, "$1" + "," + "$2");
      return y + z;
    },
    show_popup(name) {
      this.dif_form = name;
      let popup = document.getElementById("popup_form");
      popup.style.display = "block";
      let form = document.querySelector("#popup_form form");
      let userpanel = document.getElementById("userPanel");
      console.log(userpanel);
      userpanel.style.height = "700px";
      userpanel.style.overflow = "hidden";
      // console.log(form.offsetTop)
    },
  },
  mounted() {
    document.querySelector('.s_rate .rate_star .indicator').style.display="none"
    let last = document.querySelector(".pagination .last");
    last.style.display = "none";
    let first = document.querySelector(".pagination .first");
    first.style.display = "none";
    let previous = document.querySelector(".pagination .previous a");
    let next = document.querySelector(".pagination .next a");
    previous.innerHTML = "قبلی";
    next.innerHTML = "بعدی";
    var list = document.getElementsByClassName("pagination")[0];
    for (let i = 0; i < list.childElementCount; i++) {
      list.getElementsByClassName("page-item")[i].style.borderColor = "#F5F5F5";
      list.getElementsByClassName("page-item")[i].style.paddingRight =
        "0!important";
      list.getElementsByClassName("page-item")[i].style.paddingLeft =
        "0important";
      let child = list.getElementsByClassName("page-item")[i].children[0];
      child.style.padding = "7px";
    }
    let active = document.querySelector(".pagination .active");
    active.style.background = "#F5F5F5";
    
  },
};
</script>

<style scoped>
#about_supplier {
  width: 100%;
  text-align: right;
  direction: rtl;
  background-color: whitesmoke;
}
.title {
  /* background-color: blueviolet; */
  padding: 20px 20px 10px 0;
  box-sizing: border-box;
}
.title h1 {
  font-size: 19px;
  font-weight: bold;
  color: var(--blue);
}
#description {
  width: 92.7%;
  margin: 55px auto 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
  /* background-color: coral; */
}
#information {
  width: 100%;
  margin: 20px 0 0 0;
  /* background-color: darksalmon; */
}
#title_desc {
  padding: 8px 0;
  box-sizing: border-box;
}
#title_desc h2 {
  font-size: 17px;
  font-weight: bold;
}
table {
  padding: 10px;
  box-sizing: border-box;
  /* background-color: darkgoldenrod; */
  margin-right: 5px;
}
#product_company {
  width: 100%;
  margin-top: 10px;
}
.products {
  width: 90%;
  background-color: white;
  margin: auto;
}
item {
  width: 100%;
}

.item a {
  color: black;
  text-decoration: none;

  /*transition: color 5s;*/
}

.item a:hover .name {
  color: var(--blue);
}

.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}

.name {
  font-size: 17px;
  font-weight: bold;
  display: block;
  width: 520px;
  /*height: 60px;*/
  /*background-color: blue;*/
  overflow: hidden;
  white-space: nowrap;
  /*overflow-wrap: break-word;*/
  text-overflow: ellipsis;
}

.info {
  display: block;
  width: 400px;
  height: 110px;
  /*line-break: anywhere;*/
  padding: 5px 8px;
  /*background-color: orange;*/
  overflow: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
}

.item-origin {
  width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: self-start;
  margin-right: 2%;
  padding: 25px 2px;
  box-sizing: border-box;
  /*background-color: red;*/
}

.pic {
  width: 200px;
  height: 160px;
  text-align: center;
}

.pic img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.text {
  height: 160px;
  margin-right: 5%;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.my-table {
  width: 100%;
}
.cost {
  width: auto;
  position: relative;
  right: 0;
  /*background-color: rgba(255,11,189,0.44);*/
  margin-right: 2%;
  text-align: right;
  padding-top: 7px;
}

.cost span,
.cost2 span {
  font-size: 17px;
  font-weight: bold;
}

.cost2 {
  display: none;
}

.line {
  width: 95.3%;
  /*background-color: #a7ceff;*/
}

.pagination {
  width: max-content;
  display: inline-flex !important;
  text-align: right;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
}
@media screen and (max-width: 1150px) {
  .item-origin {
    width: 640px;
  }
}
@media screen and (max-width: 954px) {
  .item-origin {
    width: 540px;
  }
}
@media screen and (max-width: 1018px) {
  .name {
    /*background-color: rgba(46,255,41,0.44);*/
    width: 350px;
    height: 60px;
    white-space: normal;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    /*white-space: pre-wrap;*/
  }
}

@media screen and (max-width: 868px) {
  .item-origin {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .pic {
    width: 90%;
    height: 240px;
  }

  .text {
    width: 90%;
    text-align: center;
    margin: 0;
  }

  .name {
    width: 100%;
    /*width: 350px;*/
    text-align: center;
    height: 85px;
    padding-top: 10px;
    margin: auto;
  }

  .cost {
    width: auto;
    display: none;
  }

  .cost2 {
    display: block;
  }

  .info {
    width: 100%;
    padding: 10px;
    margin: 0;
  }
}
#main_bottom {
  width: 100%;
}
.comments {
  width: 90%;
  margin: auto;
  padding: 10px;
  direction: ltr;
  /* display: flex;
  flex-direction: column-reverse;
  position: relative; */
}
#logo {
  width: 100px;
  height: 100px;
  /* background-color: black; */
  border-radius: 50%;
  margin-right: 18px;
}
#logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.my_top {
  margin-top: 60px;
}
.logo {
  display: flex;
  align-items: center;
}
.colG {
  color: rgba(4, 158, 4, 0.945);
}
.c_pointer:hover {
  cursor: pointer;
  text-decoration: none;
}
.add_pro {
  display: block;
  width: 90%;
  height: 150px;
  margin: auto;
  padding-top: 45px;
  background-color: #fff;
}
.coll {
  width: 30%;
}
.coll span {
  wdescriptionord-break: break-all;
}
#rating {
  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 10px;
}
.t_rate {
  width: 100%;
  height: 45px;
  text-align: center;
  /* background-color: blue; */
}
.s_rate {
  width: 100%;
  /* height: 100px; */
  text-align: center;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
}
.des_rate {
  width: 100%;
  text-align: center;
}
.rate_number {
  width: 100%;
 
}
.rate_star {
  /* width: 50px; */
  height: 50px;
  direction: ltr;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#rate_number {
  font-weight: bold;
  font-size: 24px;
}
.from_rate {
  font-size: 14px;
}
.star-rating .indicator{
  color: red;
  display: none!important;
}
/* .content_info{
  height: 100px;
} */
</style>
