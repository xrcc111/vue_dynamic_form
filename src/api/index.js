import request from '@/utils/request'

export const getMenu = (data) => request({
  url: '/menu',
  method: 'get',
  data
})
