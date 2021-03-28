<template>
  <div class="hello">
    <!-- 操作页面 -->
    <el-row>
      <el-button type="primary" class="btn" @click="animation()">内置过渡动画</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    // 内置动画
    animation(){
      this.$router.replace('/animation');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
