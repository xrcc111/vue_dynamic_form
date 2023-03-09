import request from '@/utils/request'

export const getMenu = (data) => request({
  url: '/users',
  method: 'get',
  data
})
