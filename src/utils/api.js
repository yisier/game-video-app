import requestUtils from '@/utils/requestUtils'



// 主播分类
export const getAnchorList = data => {
  return requestUtils({
    url: '/anchor/list/1/100',
    method: 'post',
    params: data
  })
}

// 获取视频信息列表
export const getVideoList = data => {
  return requestUtils({
    url: '/video/list' + data,
    method: 'get'
  })
}

// 根据编号获取主播信息
export const getAnchor = data => {
  return requestUtils({
    url: '/anchor/findById?id=' + data,
    method: 'get'
  })
}

// 查询主播近期发布的前10条视频列表
export const findVideoById = data => {
  return requestUtils({
    url: '/video/findById?id=' + data,
    method: 'post'
  })
}

// 查询主播近期发布的前10条视频列表
export const findVideoCreateTimeByAnchorId = data => {
  return requestUtils({
    url: '/video/findVideoCreateTimeByAnchorId?anchor=' + data,
    method: 'post'
  })
}

