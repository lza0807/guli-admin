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
    },

    //逻辑删除讲师
    removeById(teacherId){
        return request({
        url: `/eduservice/teacher/${teacherId}`,
        method:'delete'
        })
    },

    //添加讲师
    add(teacher){
        return request({
        url: `/eduservice/teacher/addEduTeacher`,
        method:'post',
        data:teacher
        })
    },
    //根据id查询讲师
    getTeacherById(id){
        return request({
        url: `/eduservice/teacher/${id}`,
        method:'get'
        })
    },
    //修改讲师
    editEduTeacher(teacher){
        return request({
        url: `/eduservice/teacher`,
        method:'put',
        data:teacher
        })
    },

}