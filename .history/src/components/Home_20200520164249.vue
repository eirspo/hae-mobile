<template>
  <div class="container">
    <router-view />
    
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vux";

export default {
    data() {
        return {

        }
    },
    components:{
        Tabbar,
        TabbarItem
    }
};
</script>