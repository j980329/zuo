<template>
    <div>
 <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane  >
        <span slot="label"><i class="el-icon-s-help"></i> 订单管理</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>订单列表</el-breadcrumb-item>
</el-breadcrumb>

1
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 发票管理</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>发票列表</el-breadcrumb-item>
  </el-breadcrumb>
  2
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 售后服务</span>
         <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>售后服务</el-breadcrumb-item>
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
