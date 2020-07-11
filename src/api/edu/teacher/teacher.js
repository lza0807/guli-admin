import request from '@/utils/request'

export default {
    //讲师列表
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            // url: '/eduservice/teacher/pageCond',
            url: `/eduservice/teacher/pageCond/${current}/${limit}`,
            method: 'post',
            data:teacherQuery
          })
    }
}