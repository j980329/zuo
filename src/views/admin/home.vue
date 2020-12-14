<template>
    <div>

       <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane  >
        <span slot="label"><i class="el-icon-s-help"></i> 后台管理</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>后台管理</el-breadcrumb-item>
</el-breadcrumb>

1
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 管理匹配</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>管理配置</el-breadcrumb-item>
  </el-breadcrumb>
  2
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 商品列表</span>
         <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
  </el-breadcrumb>
  3
    </el-tab-pane>
  </el-tabs>


    </div>
</template>

<script>
export default {
    data() {
        return {
tabPosition: 'left',
   activeIndex: '1',
        activeIndex2: '1'
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },

computed:{},

watch:{},

};

</script>

<style scoped>

</style>
