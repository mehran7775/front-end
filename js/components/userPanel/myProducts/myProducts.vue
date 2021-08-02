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
    <div id="myProductsWrapper" class="vue" v-if="JSON.parse(products).length > 0">
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
          @verify_delete="verify_delete($event)"
        ></single-product>
      </template>
    </div>
    <div v-else class="text-center display-5 mt-5">
      <strong>شما هنوز محصولی ایجاد نکرده اید</strong>
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
    };
  },
  methods: {
    verify_delete(e) {
      console.log(e);
    },
    // removeProduct(id){
    //   console.log("deleteing",id)
    //   const index=this.allProds.findIndex(product=>{
    //     return product.id==id
    //   })
    //   this.allProds.splice(index,1)
    //   this.shoeMessage=true
    //   setTimeout(()=>{
    //     this.shoeMessage=false
    //   },5000)
    // }
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
</style>