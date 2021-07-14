<template>
  <div id="createProduct">
    <div id="createProductWrapper">
      <form
        action=""
        method="post"
        id="createProductForm"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="csrfmiddlewaretoken" :value="csrf" />
        <form-wizard
          back-button-text="مرحله قبل"
          next-button-text="مرحله بعد"
          finish-button-text="ثبت محصول"
          @on-change="getNext"
          @on-complete="submit"
        >
          <tab-content title="دسته بندی و نام">
            <select-category
              :redi="redirect"
              :cats="JSON.parse(cats)"
            ></select-category>
            <div id="name" class="productSection">
              <div id="nameWrapper">
                <label for="">نام محصول:</label>
                <template v-if="redirect !== 'None'">
                  <input
                    type="text"
                    placeholder="نام"
                    :value="redirect != 'None' ? JSON.parse(redirect).name : ''"
                    name="name"
                  />
                </template>
                <template v-else>
                  <input type="text" placeholder="نام" name="name" />
                </template>
                <div class="w-25 text-right m-auto" v-if="errors_u.name">
                  <small
                    class="text-danger text-right font-weight-bold"
                    v-text="errors_u.name[0]"
                  ></small>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="اطلاعات و ثبت">
            <product-img :errors="errors_u"></product-img>

            <!-- <slicer></slicer> -->
            <!-- <aditional-information
              :redi="redirect != 'None' ? JSON.parse(redirect) : ''"
            ></aditional-information> -->
            <div
              class="w-100 text-center position-relative"
              style="z-index: 5"
              dir="rtl"
            >
              <div class="form-group">
                <label class="font-weight-bold mt-1">قیمت:</label>
                <input
                  class="mr-sm-5 input_price"
                  :value="redirect != 'None' ? JSON.parse(redirect).price : ''"
                  type="text"
                  name="price"
                  placeholder="بر حسب تومان"
                  minlength="5"
                  maxlength="12"
                />
              </div>
              <div class="w-25 text-right m-auto" v-if="errors_u.price">
                <small
                  class="text-danger text-right font-weight-bold"
                  v-text="errors_u.price[0]"
                ></small>
              </div>
            </div>
            <product-descs
              :redi="redirect != 'None' ? JSON.parse(redirect) : ''"
            ></product-descs>
            <div class="w-25 text-right m-auto" v-if="errors_u.editor">
              <small
                class="text-danger text-right font-weight-bold"
                v-text="errors_u.editor[0]"
              ></small>
            </div>
            <slicer></slicer>
            <!-- <slicer></slicer> 
             <variations
              :redi="redirect != 'None' ? JSON.parse(redirect) : ''"
            ></variations>  -->
          </tab-content>
        </form-wizard>
        <!-- <button type="submit" class="submit">ثبت محصول</button> -->
      </form>
    </div>
    <!-- <div class="errors">
      <p class="text-right p-2 font-weight-bold" v-text="errors_u"></p>
    </div> -->
  </div>
</template>
<script>
import slicer from "../../user/template/slicer/slicer.vue";
import Editor from "@tinymce/tinymce-vue";
import productImg from "./productImg.vue";
import productDescs from "./productDescs.vue";
import aditionalInformation from "./aditionalInformation.vue";
import selectCategory from "./selectCategory.vue";
import variations from "./variations.vue";
import shortDescription from "./shortDescription.vue";
import mainPicture from "./mainPicture.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import error from "../../user/user/template/error/error.vue";
export default {
  components: {
    editor: Editor,
    shortDescription,
    slicer,
    selectCategory,
    productImg,
    productDescs,
    aditionalInformation,
    variations,
    mainPicture,
    FormWizard,
    TabContent,
    error,
  },
  data() {
    return {
      // redirect:'None'
    };
  },
  props: ["cats", "products", "redirect", "errors"],
  methods: {
    submit() {
      document.querySelector("#createProductForm").submit();
    },
    getNext() {
      const element = document.querySelector("#endCategory");
      window.sessionStorage.setItem("selected", element.value);
    },
  },
  created() {
    // console.log("redirect", this.redirect);
    console.log("errors", JSON.parse(this.errors));
  },
  computed: {
    errors_u() {
      if (this.errors != "None") {
        return JSON.parse(this.errors);
      } else {
        return this.errors;
      }
    },
  },
};
</script>


<style scoped>
#createProduct {
  width: 100%;
  direction: ltr;
}

form {
  width: 100%;
}

#createProductWrapper {
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}

#createProductWrapper form {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}

.productSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#nameWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#nameWrapper input {
  width: 200px;
}

#nameWrapper label {
  margin-bottom: 10px;
}

input[type="text"] {
  color: black;

  /* width: 30%; */
  padding: 10px;
}

input {
  border: 1px solid rgb(210, 214, 222);
}

.orderInput input {
  width: 100%;
}

.submit {
  margin-top: 20px;
  margin-bottom: 20px;
}

.title p,
#productDescsWrapper label {
  color: #0061af;
  font-size: 17pt;
  font-weight: lighter;
}

@media (max-width: 500px) {
  #nameWrapper {
    display: flex;
    flex-direction: column;
  }

  #createProduct {
    width: 100%;
  }

  .userPanelComp {
    border: 0;
  }

  #nameWrapper input {
    width: 90%;
  }
}

label {
  font-size: 18px;
  font-weight: bold;
}
.errors {
  width: 70%;
  height: 50px;
  /* background-color: red; */
  position: absolute;
  top: 0;
  left: 15.2%;
  background-color: rgb(253, 93, 93, 0.8);
  /* padding:10px; */
}
@media screen and(max-width:576px){
  .input_price{
    width: 45%;
  }
}
</style>

