// 导入axios实例
import httpRequest from '@/request/index'

// 定义接口的传参
interface PPTParam {
	topic: string
}

// 获取主题信息
export function fetchPPTInfo(param: PPTParam) {
  return httpRequest({
    url: `/topic/${param.topic}`,
    method: 'get'
  })
}
