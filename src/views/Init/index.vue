<template>
  <div id="init_topic">
    <p>输入主题</p>

    <a-input v-model:value="topic" placeholder="输入一个主题" class="topic-input" />
    
    <a-button type="primary" @click="generatePPT">生成</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'handleInitFinished', topic: string): void
}>()

const topic = ref<string>('')

/**
 * 构建ppt
 */
function generatePPT() {
  emit('handleInitFinished', topic.value)
}
</script>

<style scoped>
    #init_topic{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .topic-input{
        width:10%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
