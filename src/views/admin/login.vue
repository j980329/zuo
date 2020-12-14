<template>
    <div class="box">
  <div class="login">
   <h1 class="ljp_p">UNI-ADMIN</h1> 
   <br>
    <hr>
    <br>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="" prop="username">
    <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
  </el-form-item>

 <el-form-item label="" prop="password">
    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </el-form-item>
</el-form>
</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
ruleForm:{
    username:"",
    password:""
},
 rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 6, message: '长度在 1 到 6 个字符', trigger: 'blur' }
          ],
         password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 6, message: '长度在 1 到 6 个字符', trigger: 'blur' }
          ],
        }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        submitForm() {
        this.$refs.ruleForm.validate(async valid => {
        if(!valid) return
if(this.ruleForm.username !=='admin'||this.ruleForm.password !=='admin'){
  alert('请检查账号密码是否正确')
}
        const {data:res} = await this.$axios.post("http://ceshi5.dishait.cn/admin/login",this.ruleForm)
        console.log(res)
        if(res.msg !=='ok') return this.$message.error('登录失败')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token',"admin")
        this.$router.push('/home')
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

computed:{},

watch:{},

};

</script>

<style scoped>

.ljp_p{
  text-align: center;
}
.box {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
min-height: 600px;

}
.login {
width: 30%;
background-color: #f8f8f8;
border: 1px solid #ddd;
padding: 5px 15px;
border-radius: 5px;
box-shadow: 1px 3px 6px rgba(80, 80, 80, 0.8);
border: 1px solid black;
}
</style>
