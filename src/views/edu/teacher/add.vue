<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name" />
      </el-form-item>

      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" />
      </el-form-item>

      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--

			  数据类型一定要和取出的json中的一致，否则没法回填

			  因此，这里value使用动态绑定的值，保证其数据类型是number

          -->

          <el-option :value="1" label="高级讲师" />

          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>

      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career" />
      </el-form-item>

      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea" />
      </el-form-item>

      <!-- 讲师头像：TODO -->

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import addTeacher from "@/api/edu/teacher/teacher";
export default {
  data() {
    return {
      teacher: {},
      saveBtnDisabled: false
    };
  },

  created() {
    this.init()
  },
  watch: {
    $route(to, from) {
      this.init();
    }
  },

  methods: {
    //根据id查询
    getTeacherInfoById(id) {
      addTeacher.getTeacherById(id).then(res => {
        this.teacher = res.data.item;
      });
    },

    saveOrUpdate() {
      this.saveBtnDisabled = true;
      if (this.teacher.id) {
        this.editEduTeacher();
      } else {
        this.saveData();
      }
    },

    //修改
    editEduTeacher() {
      addTeacher.editEduTeacher(this.teacher).then(res => {
        this.$message({
          type: "success",
          message: "修改成功"
        });
        this.$router.push({ path: "/eduTeacher/table" });
      });
    },

    // 保存

    saveData() {
      addTeacher
        .add(this.teacher)
        .then(res => {
          this.$message({
            type: "success",

            message: "保存成功"
          });
          this.$router.push({ path: "/eduTeacher/table" });
        })
        .catch(err => {
          this.$message({
            type: "error",

            message: "保存失败"
          });
        });
    },

    //初始化
    init() {
      //判断路径中是否有id值
      if (this.$route.params && this.$route.params.id) {
        const id = this.$route.params.id;
        this.getTeacherInfoById(id);
      }else{
        this.teacher = {}
      }
    }
  }
};
</script>