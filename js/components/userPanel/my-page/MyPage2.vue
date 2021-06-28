<template>
    <div id="myPage">
         <about-supplier :company="company" :mTable="false"></about-supplier>
    </div>
</template>

<script>
import AboutSupplier from "../../user/about_supplier/Index.vue";
    export default {
        components:{
            AboutSupplier
        }
        
    }
</script>

<style scoped>

</style>