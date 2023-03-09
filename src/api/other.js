import request from '@/utils/request'

export const getUserInfo = (data) => request({
  url: '/info',
  method: 'get',
  params: data
})

export const getPermission = (data) => request({
  url: '/permission',
  method: 'post',
  data
})

export const submit = (data) => request({
  url: '/submit',
  method: 'post',
  data
})
