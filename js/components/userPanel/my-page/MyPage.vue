<template>
  <div id="myPage">
    <div class="w-100 p-4">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="
            'width: ' +
            JSON.parse(company).prog_score +
            '%;background-color:' +
            colo_back +
            '!important'
          "
          :aria-valuenow="JSON.parse(company).prog_score"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div
        class="font-weight-bold pt-1"
        v-text="JSON.parse(company).prog_score + '%'"
      ></div>
      <div class="text-Progress">
       <span class="brackets">[</span>
        <small
          class="text_propgress"
          v-text="JSON.parse(company).prog_msg"
        ></small>
       <span class="brackets">]</span>
      </div>
    </div>
    <about-supplier
      :company="company"
      :mTable="false"
      :userpanel="true"
    ></about-supplier>
    <div class="url_my">
      <p><strong>مشاهده این صفحه:</strong></p>
      <a :href="'/c/' + JSON.parse(company).slug"
        >https://www.damirco.com/c/{{ JSON.parse(company).slug }}</a
      >
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
  computed: {
    colo_back() {
      const x =parseInt(JSON.parse(this.company).prog_score)
      if (x > 0 && x <= 30) {
        return "#FB0002";
      } else if (x > 30 && x <= 45) {
        return "#FF5500";
      } else if (x > 45 && x <= 60) {
        return "#FF8B00";
      } else if (x > 60 && x <= 75) {
        return "#B68D01";
      } else if (x > 75 && x <= 90) {
        return "#618C00";
      } else if (x > 90 && x <= 100) {
        return "#018C01";
      }
    },
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
.url_my {
  width: 100%;
  /* position: absolute; */
  /* bottom: -100px; */
  /* left: 0; */
  /* background-color: burlywood; */
  text-align: center;
  margin-top: 40px;
  padding: 10px;
  box-sizing: border-box;
}
.text-Progress {
  position: relative;
  /* top: 1; */
  text-align: center;
}
.text_propgress{
  font-weight: bold;
  position: relative;
  bottom: 3px;
}
.brackets{
  font-size: 24px;
  font-weight: bold;
  color: forestgreen;
  font-family: 'Lato', sans-serif!important;
  margin-top: 5px;
  animation: blinker 2s infinite;
}
@keyframes blinker{
   0%, 100% {opacity:0;}
  50% {opacity:1;}
}
</style>
