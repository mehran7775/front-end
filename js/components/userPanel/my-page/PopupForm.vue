<template>
    <div id="popup_form">
        <div class="form">
           <div class="close_form" @click="hide_form()">
                <i class="fa fa-times fa-2x icon_close" aria-hidden="true"></i>
            </div>
            <form action="" method="get">
                <div v-if="dif_form==='name'" class="form-group">
                    <label for="name"></label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div v-if="dif_form==='logo'" class="form-group">
                    <label for="name"></label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div v-if="dif_form==='description'" class="form-group">
                    <label for="name"></label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div v-if="dif_form==='info_cantact'" class="form-group">
                    <label for="name"></label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <input type="submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        dif_form:{
            type:String
        }
    },
    methods:{
        hide_form(){
            document.getElementById("popup_form").style.display='none';
        }
    }
};
</script>

<style lang="scss" scoped>
#popup_form {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: brown;
  z-index: 999;
  display: none;
}
.form {
  width: 50%;
  height: 300px;
  background-color: burlywood;
  margin: 100px auto;
}
.form form {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.icon_close {
  margin-left: 15px;
  margin-top: 10px;
  float: left;
  transition: all 0.2s;
}
.icon_close:hover {
  color: rgb(184, 0, 0);
  cursor: pointer;
}
</style>