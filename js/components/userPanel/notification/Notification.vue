<template>
    <div id="notification">
        <p>پیام شما با موفقیت اضافه شد</p>
    </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(function () {
        // console.log('yse')
        this.hide_notification()
    }.bind(this),4000);
  },
  methods:{
      hide_notification(){
        //   console.log('yes')
          this.$store.commit('TOGGLE_NOTIFICATION_DF_MSG',false)
      }
  }
};
</script>

<style scoped>
#notification {
  width: 100%;
  height: 50px;
  /* background-color: blueviolet; */
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  margin: auto;
}
#notification p {
  width: max-content;
  background-color: mediumseagreen;
  margin: auto;
  padding: 10px 50px;
  box-sizing: border-box;
  color: white;
}
</style>