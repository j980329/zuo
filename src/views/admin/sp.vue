<template>
    <div>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane  >
        <span slot="label"><i class="el-icon-s-claim"></i> 商品列表</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">后台首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
</el-breadcrumb>

1
    </el-tab-pane>
    <el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 分类列表</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>分类列表</el-breadcrumb-item>
  </el-breadcrumb>
  2
    </el-tab-pane>
 
<el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 商品规格</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品规格</el-breadcrumb-item>
  </el-breadcrumb>
  3
    </el-tab-pane>

<el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 商品类型</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品类型</el-breadcrumb-item>
  </el-breadcrumb>
  4
    </el-tab-pane>

<el-tab-pane >
        <span slot="label"><i class="el-icon-s-help"></i> 商品评论</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品评论</el-breadcrumb-item>
  </el-breadcrumb>
  5
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
