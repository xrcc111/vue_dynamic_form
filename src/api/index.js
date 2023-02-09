import request from '@/utils/request'

export const getMenu = (data) => request({
  url: '/',
  method: 'get',
  data
})
