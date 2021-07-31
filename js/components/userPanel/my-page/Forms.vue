<template>
  <div class="multi_step">
    <div class="body">
      <div class="w-100">
        <transition name="fade" mode="out-in">
        <!-- <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
        > -->
          <component :is="name_state"></component>
        </transition>
      </div>

      <div class="w-100 text-center">
        <button
          :class="[state === 3 ? 'btn-success' : 'btn-primary', 'btn ml-1']"
          @click="next_state()"
          v-text="state === 3 ? 'ثبت' : 'بعدی'"
          :disabled="!state_next_btn"
        ></button>
        <button
          class="btn btn-secondary mr-1"
          v-if="state > 1"
          @click="previous_state()"
        >
          قبلی
        </button>
      </div>
    </div>
    <form name="multi_state_form" action="" method="post">
      <input
        v-model="data_forms.company.name"
        type="hidden"
        name="name_company"
      />
      <input
        v-if="data_forms.company.name_latin"
        v-model="data_forms.company.name_latin"
        type="hidden"
        name="name_latin_company"
      />
      <input v-model="data_forms.address.city" type="hidden" name="city" />
      <input
        v-model="data_forms.address.province"
        type="hidden"
        name="province"
      />
      <input v-model="data_forms.address.ots" type="hidden" name="address" />
      <input v-model="data_forms.cv" type="hidden" name="cv" />
    </form>
  </div>
</template>

<script>
import FormMe from "./FormMe.vue";
import Form1 from "./Form1.vue";
import Form2 from "./Form2.vue";
import Form3 from "./Form3.vue";

import { mapState } from "vuex";
export default {
  components: {
    FormMe,
    form1: Form1,
    form2: Form2,
    form3: Form3,
  },
  data() {
    return {
      state: 1,
      name_form: "form1",
    };
  },
  computed: {
    name_state() {
      switch (this.state) {
        case 1:
          return "form1";
          break;
        case 2:
          return "form2";
          break;
        case 3:
          return "form3";
          break;
      }
    },
    data_forms() {
      return this.$store.state.multi_forms;
    },
    state_next_btn() {
      if (this.state === 1) {
        if (this.data_forms.validated.name) {
          return true;
        } else {
          return false;
        }
      } else if (this.state === 2) {
        if (
          this.data_forms.validated.city &&
          this.data_forms.validated.province &&
          this.data_forms.validated.ots
        ) {
          return true;
        } else {
          return false;
        }
      } else if (this.state === 3) {
        if (this.data_forms.validated.cv) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  methods: {
    next_state() {
      if (this.state >= 3) {
        // alert("gf");
        document.forms["multi_state_form"].submit();
      } else {
        this.state++;
      }
    },
    previous_state() {
      if (this.state <= 1) {
        return null;
      } else {
        this.state--;
      }
    },
  },
  mounted() {
    // console.log(document.querySelector('.form #name_company'))
  },
};
</script>

<style lang="scss" scoped>
.multi_step {
  width: 100%;
  text-align: right;
  // background-color: aquamarine;
}
.body {
  width: 75%;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  margin: auto;
  margin-top: 50px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 2px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width:576px) {
  .body{
    width: 90%;
  }
}
</style>