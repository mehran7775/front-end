<template>
  <div id="myPage">
      <about-supplier :company="company" :mTable="false"
      :userpanel="true"
      ></about-supplier>
     <div class="url_my">
       <p><strong>مشاهده این صفحه:</strong></p>
       <a :href="'/c/' + JSON.parse(company).slug">https://www.damirco.com/c/{{JSON.parse(company).slug}}</a>
     </div>
  </div>
</template>

<script>
import AboutSupplier from "../../user/about_supplier/Index.vue";
// import Comment from "../../user/product/comments/Comment.vue";
// import PopupForm from "./PopupForm.vue";
export default {
  props: {
    company: {
      type: String,
    },
  },
  data() {
    return {
      // comment: {
      //   content: "بهترین شرکت رهپویان صنعته",
      //   id: 9,
      //   is_buyers: false,
      //   subs: "None",
      //   timestamp: "1400/3/24",
      //   username: "شمسی دو",
      // },
      // dif_form: "",
      // products: [{
      //     id:1,
      //     title:'',
      //     image:''
      // }
      // ],
    };
  },
  components: {
    AboutSupplier,
    // PopupForm,
    // Comment,
  },
  methods: {
    // show_popup(name) {
    //   this.dif_form = name;
    //   document.getElementById("popup_form").style.display = "block";
    //   console.log("popup");
    // },
  },
  created() {
    console.log("company", JSON.parse(this.company));
  },
};
</script>

<style scoped>
#myPage {
  width: 100%;
  /* position: absolute; */
}
.url_my{
  width: 100%;
  position: absolute;
  bottom: -100px;
  left: 0;
  /* background-color: burlywood; */
  text-align: center;
  margin-top:40px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
