import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/api/v1.0/preferenceArea/listAll',
    method:'get',
  })
}
