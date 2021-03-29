<template>
  <div>
    <h2>Layout布局</h2>
    <!-- 基础布局 -->
    <div>
      <h3>基础布局</h3>
      <!-- :sapn="24" -->
      <el-row>
        <el-col :span="24"
          ><div class="grid-content bg-purple-dark"></div
        ></el-col>
      </el-row>
      <!-- :span="12" -->
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
      <!-- :span="8"  -->
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- :span="6" -->
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
      <!-- :span="4" -->
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </div>
    <!-- 分栏布局 -->
    <div>
      <h3>分栏布局</h3>
      <p>分栏之间存在间隔</p>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <!-- 混合布局 -->
    <div>
      <h3>混合布局</h3>
      <p>通过基础的1/24分栏扩展组合形成较为复杂的混合布局</p>
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <!-- 分栏偏移 -->
    <div>
      <h3>分栏偏移</h3>
      <p>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</p>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
      </el-row>
    </div>
    <!-- 对齐方式 -->
    <div>
      <h3>对齐方式</h3>
      <p>通过 flex 布局来对分栏进行灵活的对齐</p>
      <p>
        将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify
        属性来指定 start, center, end, space-between, space-around
        其中的值来定义子元素的排版方式。
      </p>
      <!-- 默认向左对齐 -->
      <el-row type="flex" class="row-bg">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- 居中对齐 -->
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- 向右对齐 -->
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- 子元素 space-between 空间间隔方式-->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- 子元素 space-around 空间围绕方式-->
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <!-- 响应式布局 -->
    <div>
      <h3>响应式布局</h3>
      <p>
        参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和
        xl。
      </p>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </div>

    <!-- 返回按钮 -->
    <div>
      <el-button type="primary" @click="returnUp()">返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data: () => {
    return {};
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
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>