<template>
  <div id="myProducts">
    <div v-if="shoeMessage" class="message">
      <p>محصول با موفقیت حذف شد</p>
    </div>
    <div id="head">
      <div class="add_pro">
        <div id="add_pro">
          <strong
            >برای اضافه کردن محصول جدید
            <a href="/userpanel/products/create"
              ><input type="button" value="کلیک" id="btn_create"
            /></a>
            کنید</strong
          >
        </div>
      </div>
    </div>
    <div
      id="myProductsWrapper"
      class="vue"
      v-if="JSON.parse(products).length > 0"
    >
      <template v-for="i in JSON.parse(products)">
        <single-product
          :status="i.is_confirmed"
          :descs="i.title"
          :sees="i.hit_count"
          :cat="i.category[0].title"
          :key="i.id"
          :id="i.id"
          :slug="i.slug"
          :product_image="i.product_image"
          :image_alt="i.image_alt"
          @delete_item="deleteItem($event)"
        ></single-product>
      </template>
    </div>
    <div v-else class="text-center display-5 mt-5">
      <strong>شما هنوز محصولی ایجاد نکرده اید</strong>
    </div>
    <div class="modal_delete">
      <div id="modal_delete">
        <p><strong>آیا میخواهید این مورد را حذف کنید؟</strong></p>
        <div class="btns">
          <button @click="verify_delete" class="btn btn-primary ml-1">
            تایید
          </button>
          <button @click="close_modal" class="btn btn-secondary mr-1">
            انصراف
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import singleProduct from "./signleProduct/singleProduct.vue";
export default {
  name: "myProducts",
  components: { singleProduct },
  data() {
    return {
      shoeMessage: false,
      id_product:null
    };
  },
  methods: {
      close_modal() {
      let el = document.querySelector(".modal_delete");
      el.style.visibility = "hidden";
      el.style.opacity = 0;
    },
    deleteItem(e) {
      this.id_product=e
      let el = document.querySelector(".modal_delete");
      el.style.transition = "all 0.3s";
      el.style.visibility = "visible";
      el.style.opacity = 1;
    },
    verify_delete(){
       let form = document.createElement("form")
      form.setAttribute("method", "post")
      let action='/userpanel/products/remove/' + this.id_product
      form.setAttribute("action",action )
      let inp = document.createElement("input")
      inp.setAttribute("type", "text")
      inp.setAttribute("name", "_method")
      inp.setAttribute("value", "DELETE")
      form.appendChild(inp)
      document.body.appendChild(form)
      form.submit()
    }
    
  },
  props: ["products"],
};
</script>

<style scoped>
.message {
  width: 100%;
}
#myProductsWrapper {
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.message {
  margin-top: 10px;
  background: #0061af;
}
.message p {
  color: white;
  /* font-weight: bold; */
  text-align: center;
  padding: 10px;
}
.add_pro {
  text-align: right;
  padding: 10px;
}
#add_pro {
  width: max-content;
  border: 2px solid var(--blue);
  padding: 5px;
  animation: blinker 3s infinite;
}
@keyframes blinker {
  0%,
  100% {
    border: 2px solid #fff;
  }
  50% {
    border: 2px solid var(--blue);
  }
}
#btn_create {
  width: 35px;
  height: 30px;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: none;
  color: var(--blue);
  font-weight: bold;
}
.modal_delete {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.11);
  /* display: none; */
  visibility: hidden;
  opacity: 0;
  text-align: right;
}
#modal_delete {
  width: 50%;
  height: 140px;
  background-color: whitesmoke;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -50%);
  padding: 20px;
  border-radius: 3px;
}
#modal_delete .btns {
  text-align: center;
}
#icon_close {
  transition: all 0.2s;
}
#icon_close:hover {
  cursor: pointer;
  color: red;
}
</style>