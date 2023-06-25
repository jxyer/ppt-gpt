<template>
  <div>
    <div class="topic">
      <div class="title">本页主题</div>
      <a-input v-model:value="topic" placeholder="请输入主题" />
      <a-button type="primary">生成</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const topic = ref<string>('')

</script>

<style scoped>

</style>