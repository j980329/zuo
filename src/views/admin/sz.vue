<template>
    <div>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane  >
        <span slot="label"><i class="el-icon-s-help"></i> 基础设置</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">后台首页</el-breadcrumb-item>
  <el-breadcrumb-item>基础设置</el-breadcrumb-item>
</el-breadcrumb>

1
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 物流设置</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>物流设置</el-breadcrumb-item>
  </el-breadcrumb>
  2
    </el-tab-pane>

 <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 管理员设置</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>管理员设置</el-breadcrumb-item>
  </el-breadcrumb>
  3
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 交易设置</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>交易设置</el-breadcrumb-item>
  </el-breadcrumb>
  4
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
