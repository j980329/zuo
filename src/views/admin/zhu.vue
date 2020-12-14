<template>
    <div>

<el-container>
  <el-header>
      <!-- Header <el-button @click="tc">退出</el-button> -->
  <div class="ljp_div">UNI-ADMIN</div>

<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
 <el-menu-item index="2">商品</el-menu-item>
 <el-menu-item index="3">订单</el-menu-item>
 <el-menu-item index="4">会员</el-menu-item>
 <el-menu-item index="5">设置</el-menu-item>
 <el-menu-item index="6"> <el-button @click="tc">退出</el-button></el-menu-item>
</el-menu>

  </el-header>
  <el-main>
<router-view></router-view>

  </el-main>
</el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
activeIndex: '1',
        activeIndex2: '1'
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
    tc(){
        window.sessionStorage.clear()
        this.$router.push('/login')
    },
    handleSelect(key, keyPath) {
        console.log(key);
        if(key==1){
            this.$router.push('/home')
        }
        if(key==2){
            this.$router.push('/sp')
        }
         if(key==3){
            this.$router.push('/dl')
        }

        if(key==4){
            this.$router.push('/hy')
        }
        if(key==5){
            this.$router.push('/sz')
        }
      }
    },

computed:{},

watch:{},

};

</script>

<style scoped>
.ljp_div{
    position: absolute;
    z-index: 3;
    color: white;
}
.el-menu{
    padding-left: 50%;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
      padding:0;
          position: relative;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  /* .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  } */
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
