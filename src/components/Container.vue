<template>
  <div>
    <div>
      <h2>Container 布局容器</h2>
      <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    </div>
    <!-- 常见页面布局 -->
    <h3>常见页面布局</h3>
    <div>
        <!-- 上下布局 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
        <hr>
        <!-- 上 中 下布局 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
        <hr>
        <!-- 左右布局 -->
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
        <hr>
        <!-- 上 左右布局 -->
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
        <hr>
        <!-- 上 左右(下)布局 -->
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
        <hr>
        <!-- 左 右(上下) 布局 -->
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
        <hr>
        <!-- 左 右（上下）布局 -->
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Container",
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
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

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