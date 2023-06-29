const wsUrl = 'ws://localhost:8765/handler'
let websocket: WebSocket

export function initWebSocket(receiveMessage: (e: MessageEvent) => void) {
  websocket = new WebSocket(wsUrl)
  websocket.onopen = e => {
    window.console.log('连接成功', e)
  }
  websocket.onerror = e => {
    window.console.log('异常', e)
  }
  websocket.onmessage = (e: MessageEvent) => {
    window.console.log('接收消息成功')
    receiveMessage(e)
  }
  websocket.onclose = e => {
    window.console.log('连接关闭', e)
  }
}

const Sleep = (ms: number | undefined) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 数据发送
export async function send(data: string) {
  console.log(websocket)
  while (websocket.readyState !== websocket.OPEN) {
    await Sleep(1000)
  }
  console.log('发送')
  websocket.send(data)

}


