<template>
    <div>
    <div>内置过渡动画</div>
    <el-button type="primary" @click="return1()">返回</el-button>
    <br>
    <h3>淡入淡出</h3>
    <el-button @click="show =!show">Click Me</el-button>
    <!-- <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div> -->
    <div style="display:flex; justify-content: center;margin-top:20px;height:100px;">
        <transition name="el-fade-in-linear">
            <div v-show="show" class="transition-box">el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
            <div v-show="show" class="transition-box">el-fade-in</div>
        </transition>
    </div>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/base.css';
export default {
    
  name: "Animation",
   data:()=>{
       return {
       show:true
       }
   },
  methods: {
    return1() {
      this.$router.replace("./");
    },
  },
};
</script>

<style scoped>
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
    
  }
</style>