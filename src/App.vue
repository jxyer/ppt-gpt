<template>
  <div id="app">
    <Init v-if="!initFinished" @handleInitFinished="handleInitFinished"></Init>
    <Screen v-if="initFinished && screening" />
    <Editor v-else-if="initFinished && _isPC" />
    <Mobile v-else />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useScreenStore, useMainStore, useSnapshotStore, usePPTStore } from '@/store'
import { LOCALSTORAGE_KEY_DISCARDED_DB } from '@/configs/storage'
import { deleteDiscardedDB } from '@/utils/database'
import { isPC } from './utils/common'

import Init from './views/Init/index.vue'
import Editor from './views/Editor/index.vue'
import Screen from './views/Screen/index.vue'
import Mobile from './views/Mobile/index.vue'

// 是否初始化完成
const initFinished = ref<boolean>(false)

const _isPC = isPC()

const pptStore = usePPTStore()
const mainStore = useMainStore()
const snapshotStore = useSnapshotStore()
const { databaseId } = storeToRefs(mainStore)
const { screening } = storeToRefs(useScreenStore())

if (process.env.NODE_ENV === 'production') {
  window.onbeforeunload = () => false
}

onMounted(async () => {
  await deleteDiscardedDB()
  snapshotStore.initSnapshotDatabase()
  mainStore.setAvailableFonts()
})

// 应用注销时向 localStorage 中记录下本次 indexedDB 的数据库ID，用于之后清除数据库
window.addEventListener('unload', () => {
  const discardedDB = localStorage.getItem(LOCALSTORAGE_KEY_DISCARDED_DB)
  const discardedDBList: string[] = discardedDB ? JSON.parse(discardedDB) : []

  discardedDBList.push(databaseId.value)

  const newDiscardedDB = JSON.stringify(discardedDBList)
  localStorage.setItem(LOCALSTORAGE_KEY_DISCARDED_DB, newDiscardedDB)
})

function handleInitFinished(topic: string) {
  pptStore.setTopic(topic)
  initFinished.value = true
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
