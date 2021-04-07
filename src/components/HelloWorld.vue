<template>
  <section>
    <el-button type="primary" @click="toEmit">子向父传参</el-button>
  </section>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
export default {
  setup(props, { emit }) {
    const toEmit = () => {
      emit('to-emit', '子向父传参！')
    }
    return {
      toEmit
    }
  }
}
</script>

<style scoped lang="scss">
</style>
