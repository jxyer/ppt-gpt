import { defineStore } from 'pinia'

export interface PPTState {
  topic: string // 主题

}


export const usePPTStore = defineStore('screen', {
  state: (): PPTState => ({
    topic: '', // 是否进入放映状态
  }),
  
  actions: {
    setTopic(topic: string) {
      this.topic = topic
    },
  },
})