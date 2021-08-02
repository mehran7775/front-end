<template>
  <div ref="singleProduct" class="singleProduct">
    <div id="allDescs">
      <div class="status">
        <div v-if="status == 'true'" class="accept">
          <p class="accept">تایید شده</p>
        </div>
        <div v-else class="pending">
          <p class="pending">در انتظار تایید</p>
        </div>
        <!--        <p>دو روز پیش</p>-->
        <!-- <div class="dots" @click="openToolTip($event)">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="tooltip">
              <ul>
                <li>
                  <a :href="'/users/profile/my_products/' + id + '/edit'"
                    >ویرایش</a
                  >
                </li>
                <li @click="openNotf($event)">حذف</li>
              </ul>
            </div>
          </div> -->
      </div>
      <div class="descs">
        <a :href="'/products/product-detial/' + slug"
          ><p>
            {{ descs }}
          </p></a
        >
      </div>
      <div class="sees">
        <p>بازدید:{{ sees }}</p>
      </div>
      <div class="cat">
        <p>
          دسته بندی:<a :href="'/categories/' + cat">{{ cat }}</a>
        </p>
      </div>
    </div>
    <div id="productImage">
      <img :src="product_image" :alt="image_alt" />
    </div>
    <notf
      @deleteProduct="deleteProduct"
      @closeNotf="showNotf = false"
      v-if="showNotf"
    ></notf>
    <div class="crud">
      <div>
        <span @click="delete_item">
          <i
            class="fa fa-trash hover-active"
            style="font-size: 24px"
            title="حذف"
          ></i>
        </span>
      </div>
      <div>
        <a :href="'/userpanel/products/edit/' + id">
          <i
            class="fas fa-edit hover-active"
            style="font-size: 24px"
            title="ویرایش"
          >
          </i
        ></a>
      </div>
    </div>
    <div class="modal_delete">
      <div id="modal_delete">
        <p><strong>آیا میخواهید این مورد را حذف کنید؟</strong></p>
        <div class="btns">
          <button @click="verify_delete()" class="btn btn-primary ml-1">
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
import notf from "./notf.vue";
import axios from "axios";
export default {
  props: [
    "status",
    "ago",
    "descs",
    "sees",
    "cat",
    "id",
    "slug",
    "product_image",
    "image_alt",
  ],
  name: "singleProduct",
  components: {
    notf,
  },
  data() {
    return {
      showNotf: false,
    };
  },
  created() {
    console.log(this.id)
    window.addEventListener("click", (e) => {
      const el = e.target;
      if (!el.classList.contains("dots") && !el.classList.contains("dot")) {
        const tools = document.querySelectorAll(".tooltip");
        tools.forEach((tool) => {
          tool.style.display = "none";
        });
      }
    });
  },
  methods: {
    deleteProduct() {
      const single = this.$refs.singleProduct;
      const notif = single.querySelector(".notif");
      const buttons = notif.querySelector(".buttons");
      buttons.style.display = "none";
      const loading = notif.querySelector(".loadingWrapper");
      loading.style.display = "block";
      axios
        .get(
          `/products-api/product/${this.id}/delete?csrfmiddlewaretoken=${csrf}`
        )
        .then((res) => {
          const message = res.data.message;
          if (message == "محصول شما با موفقیت حذف شد") {
            this.showNotf = false;
            this.$emit("removeProduct", this.id);
          }
        });
    },
    openNotf(e) {
      this.showNotf = true;
    },
    openToolTip(e) {
      // this.closeTools();
      const parent = e.target.closest(".status");
      const tool = parent.querySelector(".tooltip");
      tool.style.display = "block";
    },
    closeTools() {
      const tools = document.querySelectorAll(".tooltip");
      tools.forEach((tool) => {
        tool.style.display = "none";
      });
    },
    close_modal() {
      let el = document.querySelector(".modal_delete");
      el.style.visibility = "hidden";
      el.style.opacity = 0;
    },
    delete_item() {
      console.log("g");
      let el = document.querySelector(".modal_delete");
      el.style.transition = "all 0.3s";
      el.style.visibility = "visible";
      el.style.opacity = 1;
    },
    verify_delete() {
      this.$emit('verify_delete',this.id)
      // console.log(this.slug)
      // let form = document.createElement("form")
      // form.setAttribute("method", "post")
      // let action='/userpanel/products/remove/' + id
      // form.setAttribute("action",action )
      // let inp = document.createElement("input")
      // inp.setAttribute("type", "text")
      // inp.setAttribute("name", "_method")
      // inp.setAttribute("value", "DELETE")
      // form.appendChild(inp)
      // document.body.appendChild(form)
      // form.submit()
    },
  },
};
</script>

<style scoped>
.singleProduct {
  width: 250px;
  background: #fff;
  border-radius: 15px;
  /*position: relative;*/
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
}
/* .singleProductWrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
} */
.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: rgb(55, 86, 153);
}
p {
  text-align: right;
}
.accept {
  border-radius: 10px;
  background: rgb(19, 204, 87);
}
.pending {
  border-radius: 10px;
  background: rgb(221, 178, 83);
}
.accept p,
.pending p {
  padding: 5px;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
.dots {
  display: flex;
  cursor: pointer;
  padding: 5px;
  position: relative;
}
.dots .dot {
  width: 5px;
  border-radius: 50%;
  margin: 2px;
  height: 5px;
  background: gray;
}
.tooltip {
  position: absolute;
  border: 1px solid #b4b4b4;
  background: white;
  top: 12px;
  right: 26px;
  border-radius: 10px;
  display: none;
}
.tooltip ul {
  padding: 10px;
  cursor: default;
}
ul li {
  text-align: right;
  line-height: 2rem;
}
li a,
li {
  color: rgb(79, 80, 84);
  cursor: pointer;
}
#productImage {
  width: 230px;
  height: 150px;
}
#productImage img {
  width: 100%;
  height: 100%;
}
.descs {
  height: 85px;
  padding: 5px;
  /* background-color: aquamarine; */
  overflow: hidden;
  text-overflow: clip;
  /* white-space: nowrap; */
}
.descs p {
  direction: rtl;
}
.crud {
  width: 60px;
  margin-left: 5%;
  margin-bottom: 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.crud a {
  color: var(--blue);
}
.hover-active {
  color: var(--blue) !important;
}
.hover-active:hover {
  color: red !important;
  cursor: pointer;
}
.cat {
  height: 45px;
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