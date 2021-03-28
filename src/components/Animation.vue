<template>
  <div>
    <!-- 标题 -->
    <div>内置过渡动画</div>
    <!-- 淡入淡出动画 -->
    <div>
      <h3>淡入淡出</h3>
      <el-button @click="show = !show">Click Me</el-button>
      <div class="style">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">el-fade-in</div>
        </transition>
      </div>
    </div>
    <!-- zoom 缩放 -->
    <div style="margin-top: 20px">
      <el-button @click="show2 = !show2"> Click Me </el-button>
      <!-- 向中心缩放 -->
      <div class="style">
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
        </transition>
        <!-- 向上缩放 -->
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
        </transition>
        <!-- 向下缩放 -->
        <transition name="el-zoom-in-bottom">
          <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
        </transition>
      </div>
    </div>
    <!-- collapse展开折叠 -->
    <div style="margin-top: 20px">
      <el-button @click="show3 = !show3"> Click Me </el-button>
      <div class="style" >
        <el-collapse-transition>
           <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
        </el-collapse-transition>
      </div>
    </div>
    <el-button style="margin-top: 100px" type="primary" @click="returnUp()"
      >返回</el-button
    >
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/base.css";
export default {
  name: "Animation",
  data: () => {
    return {
      show: true,
      show2: true,
      show3: true,
    };
  },
  methods: {
    // 返回方法
    returnUp() {
      this.$router.replace("./");
    },
  },
};
</script>

<style scoped>
.style {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 100px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>