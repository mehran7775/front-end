<template>
  <div id="userPanelWrapper">
    <user-panel-mesages></user-panel-mesages>
      <slot></slot>
  </div>
</template>

<script>
import sideMenu from "./template/sideMenu/sideMenu.vue"
import userPanelMesages from "./template/userPanelMesages.vue";
import stickMenu from "./template/stickMenu/stickMenu.vue";
// import Modal from './modal/accept.vue'
export default {
name: "userPanelWrapper",
    components:{
        sideMenu,
        stickMenu,
      userPanelMesages,
      // Modal
    },
  props:['allmessages','user'],
  mounted() {
  // console.log(this.user,'888')
  }
}
</script>

<style scoped>
*{
   font-family: iranSans!important;
}
  #userPanelWrapper{
    width: 100%;
    background: #ffffff;
    direction: rtl;
    /* background: cadetblue; */
    /* min-height: calc(100vh - 70px);
    padding-bottom: 1px; */
  }
  @media screen and (min-width: 1000px){
     #userPanelWrapper{
      width: calc(100% - 230px);
      /* width:; */
    }
  }
</style>
