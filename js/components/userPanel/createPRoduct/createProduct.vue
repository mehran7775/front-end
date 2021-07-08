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
              </div>
            </div>
          </tab-content>
          <tab-content title="اطلاعات و ثبت">
            <product-img></product-img>
            <!-- <slicer></slicer> -->
            <!-- <aditional-information
              :redi="redirect != 'None' ? JSON.parse(redirect) : ''"
            ></aditional-information> -->
            <div class="w-100 text-center mb-5" dir="rtl">
              <div class="form-group">
                <label class="font-weight-bold mt-1">قیمت:</label>
                <input
                class="mr-5"
                  :value="redirect != 'None' ? JSON.parse(redirect).price : ''"
                  type="number"
                  name="price"
                  placeholder="بر حسب تومان"
                  min="6"
                />
              </div>
            </div>
            <product-descs
              :redi="redirect != 'None' ? JSON.parse(redirect) : ''"
            ></product-descs>
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
  props: ["cats", "products", "redirect"],
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
    console.log("redirect", this.redirect);
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

  width: 30%;
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
</style>

