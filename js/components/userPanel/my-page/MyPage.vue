<template>
    <div id="myPage">
        <div id="page_back">
            <div id="about_supplier">
            <div id="main_top">
            <div class="title">
                <h1>شرکت دمیرکو</h1>
            </div>
                       <div id="logo">
                <img src="../../../assets/images/logo2.webp" alt="لوگو">
                </div>
            <div id="description">
                <div id="desc">
                <p class="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi ex eius? Laboriosam dolore culpa, eligendi deserunt ipsa similique, repellat excepturi, pariatur ratione veniam 
                  doloremque. Quo nulla fugit iusto reiciendis?
                </p>
                </div>
                <div id="information">
                <div id="title_desc">
                    <h2>اطلاعات شرکت</h2>
                </div>
                <div>
                    <table class="table">
                    <tr>
                        <th>آدرس</th>
                        <th>شماره تلفن</th>
                    </tr>
                    <tr>
                        <td>تهران-شهرقدس-خیابان-کوچه-پلاک 12</td>
                        <td>02100005478</td>
                    </tr>
                    </table>
                </div>
                </div>
            </div>
            </div>
            <div id="main">
            <div class="title">
                <h1>محصولات این شرکت</h1>
            </div>
            <div id="product_company">
                <div class="products">
                <div>
                    <div class="item">
                    <a href="" class="link-item">
                        <div class="item-origin">
                        <div class="pic">
                            <!-- <img src="/static/public/images/shrink2.png" alt="تصویر ناقص است"> -->
                            <img src="../../../../js/assets/images/31.webp" alt="تصویر ناقص است" />
                        </div>
                        <div class="text">
                            <h1 class="name">
                            دستگاه درب بند DDX-450
                            </h1>
                            <p class="info mt-1">
                              ین دستگاه عمدتاً برای انواع بطری های گرد ، دارو ، محصولات مراقبت های بهداشتی ، مواد شیمیایی ، آرایشی و سایر ویال های مخصوص تجهیزات بسته بندی ایده آل است
                            </p>
                        </div>
                        <div class="cost2">
                            <p>
                            <span class="font-weight-bold">قیمت: </span>
                            وارد نشده است
                            </p>
                        </div>
                        </div>
                        <div class="cost">
                        <p>
                            <span class="font-weight-bold">قیمت: </span>
                            وارد نشده است
                        </p>
                        </div>
                    </a>
                    </div>
                    <hr class="line" />
                </div>
                </div>
            </div>
            <!-- <div class="text-center">
            </div> -->
            </div>
    <div id="main_bottom">
      <div class="title">
        <h1>نظریات مشتریان</h1>
      </div>
      <div
        class="comments"
      >
        <comment
        :comment="comment"
        />
      </div>
    </div>
  </div>
        </div>
      <div id="page_on"> 
            <div class="w-100">
              <a  class="add_name c_pointer" v-on:click.stop.prevent="show_popup('name')">
                <div> <i class="fas fa-plus fa-2x colG"></i></div>
                <div> <p>افزودن نام شرکت</p></div>
              </a>
            </div>
            <div class="mr-5 pb-1">
                <a  class="add_name c_pointer" v-on:click.stop.prevent="show_popup('logo')">
                  <div> <i class="fas fa-plus fa-2x colG"></i></div>
                  <div> <p>افزودن لوگوی شرکت</p></div>
              </a>
            </div>
            <div id="add_de" class="w-100">
               <a v-on:click.stop.prevent="show_popup('description')" class="add_de c_pointer">
                  <div> <i class="fas fa-plus fa-2x colG"></i></div>
                  <div> <p>افزودن توضیحات شرکت</p></div>
              </a>
            </div>
            <div id="add_info" class="w-100">
               <a v-on:click.stop.prevent="show_popup('info_cantact')" class="add_de c_pointer">
                  <div> <i class="fas fa-plus fa-2x colG"></i></div>
                  <div> <p>افزودن اطلاعات تماس شرکت</p></div>
              </a>
            </div>
            <div id="add_pro" class="w-100">
               <a href="/userpanel/products/create/" class="add_de">
                  <div> <i class="fas fa-plus fa-2x colG"></i></div>
                  <div> <p>اضافه کردن محصول</p></div>
              </a>
            </div>
        </div> 
        <template>
          <popup-form 
          :dif_form="dif_form"
          />
        </template>
        
    </div>
</template>

<script>
// import AboutSupplier from "../../user/about_supplier/Index.vue";
import Comment from "../../user/product/comments/Comment.vue";
import PopupForm from './PopupForm.vue'
export default {
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
      dif_form:''
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
    Comment,
    // AboutSupplier,
  },
  methods:{
    show_popup(name){
      this.dif_form=name
      document.getElementById("popup_form").style.display="block"
      console.log("popup")
    }
  }
};
</script>

<style  scoped>
#myPage {
  width: 100%;
  height: 1000px;
  /* position: absolute; */
}
#page_back {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0.4;
  /* left: 0;
    top: 0; */
}
#about_supplier {
  width: 100%;
  text-align: right;
  direction: rtl;
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
  width: 90%;
  margin: auto;
  padding: 20px 10px;
  box-sizing: border-box;

  /* background-color: coral; */
}
#desc{
  width: 80%;

}
#information {
  width: 100%;
  margin: 70px 0 10px 0;
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
  width: max-content;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: darkgoldenrod; */
  margin-right: 5px;
}
.table{
  margin-top: 0;
}
#product_company {
  width: 100%;
  margin-top: 30px;
}
.products {
  width: 70%;
  background-color: white;
  /* float: right; */
  margin-right: 70px;

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
  margin-top: 30px;
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
  width: 140px;
  height: 40px;
  /* background-color: black; */
  /* border-radius: 50%; */
  margin-top: 8px;
  margin-right: 18px;
}
#logo img {
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
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
  margin: 7px 130px 0 0;
}
.add_name div p {
  font-size: 17px;
  font-weight: bold;
  padding: 10px 10px 0 0;
  box-sizing: border-box;
}
.add_de{
  width: max-content;
  text-decoration: none;
  color: black;
  /* background-color: burlywood; */
  text-align: center;
  margin-top: 40px;
}
.add_de  > div >p{
   font-size: 17px;
  font-weight: bold;
}
#add_de{
  margin-top: 80px;
}
#add_info{
  margin-top: 130px;
  /* background-color: hotpink; */
}
#add_pro{
  margin-top: 250px;
}
.add_pro > div > p{
   font-size: 17px;
  font-weight: bold;
}
.colG{
  color: rgba(4, 158, 4, 0.945);

}
.c_pointer:hover{
cursor: pointer;
}

</style>