<template>
  <el-container>
    <el-header>
      <!-- <div> -->
        <el-button type="primary" size="small">返回</el-button>
      <!-- </div> -->
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="upload-img">
              <VueImgInputer v-model="picValue" :imgSrc="imgSrc" theme="light" size="ok"></VueImgInputer>
              <el-button type="primary" size="small" style="display: block;margin: 5px auto;">上传图片</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="菜品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="菜品类别" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择活动区域">
                  <el-option label="火锅" value="1"></el-option>
                  <el-option label="面食" value="2"></el-option>
                  <el-option label="西餐" value="3"></el-option>
                  <el-option label="零食" value="4"></el-option>
                  <el-option label="热菜" value="5"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="红绿灯" prop="trafficLight">
                <el-select v-model="ruleForm.trafficLight" placeholder="">
                  <el-option label="黄" value="1"></el-option>
                  <el-option label="绿" value="2"></el-option>
                  <el-option label="红" value="3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="菜品建议" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <div>
        <table class="table">
            <tbody>
                <tr>
                  <th>热量(KCal)</th>
                  <td><input type="number" :disabled="isable" v-model="heatQuantify" /></td>
                  <th>锰(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="manganese" /></td>
                  <th>硒(μg)</th>
                  <td><input type="number" :disabled="isable" v-model="selenium" /></td>
                </tr>
                <tr>
                  <th>碳水化合物(g)</th>
                  <td><input type="number" :disabled="isable" v-model="carbohydrate" /></td>
                  <th>铁(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="iron" /></td>
                  <th>维生素A(μg)</th>
                  <td><input type="number" :disabled="isable" v-model="vitaminA" /></td>
                </tr>
                <tr>
                  <th>脂肪(g)</th>
                  <td><input type="number" :disabled="isable" v-model="fat" /></td>
                  <th>钠(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="sodium" /></td>
                  <th>维生素C(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="vitaminC" /></td>
                </tr>
                <tr>
                  <th>蛋白质(g)</th>
                  <td><input type="number" :disabled="isable" v-model="protein" /></td>
                  <th>钾(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="potassium" /></td>
                  <th>维生素E(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="vitaminE" /></td>
                </tr>
                <tr>
                  <th>胆固醇(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="cholesterol" /></td>
                  <th>镁(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="magnesium" /></td>
                  <th>维生素B1(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="vitaminB1" /></td>
                </tr>
                <tr>
                  <th>膳食纤维(g)</th>
                  <td><input type="number" :disabled="isable" v-model="dietaryFiber" /></td>
                  <th>锌(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="zinc" /></td>
                  <th>维生素B2(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="vitaminB2" /></td>
                </tr>
                <tr>
                  <th>钙(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="calcium" /></td>
                  <th>铜(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="copper" /></td>
                  <th>胡萝卜素(μg)</th>
                  <td><input type="number" :disabled="isable" v-model="carotene" /></td>
                </tr>
                <tr>
                  <th>磷(mg)</th>
                  <td><input type="number" :disabled="isable" v-model="phosphorus" /></td>
                  <th></th>
                  <td></td>
                  <th></th>
                  <td></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div style="width: 67%;">
        <el-button type="primary" size="small" style="display: block;margin: 15px auto;">保存提交</el-button>
      </div>
      
    </el-main>
  </el-container>
</template>

<script>
import VueImgInputer from 'vue-img-inputer';

export default {
  name: 'backConfig',
  components: { VueImgInputer },
  data() {
    return {
      imgSrc: '',
      picValue: '',
      imageUrl: '',
      isable: false,
      // 微量元素
      heatQuantify: 2323,
      carbohydrate: '',
      fat: '',
      protein: '',
      cholesterol: '',
      dietaryFiber: '',
      calcium: '',
      phosphorus: '',
      manganese: '',
      iron: '',
      sodium: '',
      potassium: '',
      magnesium: '',
      zinc: '',
      copper: '',
      selenium: '',
      vitaminA: '',
      vitaminC: '',
      vitaminE: '',
      vitaminB1: '',
      vitaminB2: '',
      carotene: '',
      // 
      ruleForm: {
        name: '',
        type: '',
        trafficLight: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        color: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },
    };
  },
  beforeMount() {
  },
  methods: {
    btn() {
      console.log(this.picValue);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
};
</script>

<style scoped>
  .el-header {
    background-color: #fff;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
  }
  .el-main {
    background-color: #fff;
    padding: 0 20px;
  }
  .el-row {
    margin-bottom: 0px;
  }
  .el-row:last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
    padding: 0 !important;
  }
  .bg-purple-dark {
    /* background: #99a9bf; */
  }
  .bg-purple {
    /* background: #d3dce6; */
  }
  .bg-purple-light {
    /* background: #e5e9f2; */
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .upload-img {
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .img-inputer--ok {
    width: 280px;
    height: 180px;
  }
  .table {
    width: 67%;
    border-collapse:collapse;
  }
  .table td {
    border:1px solid #ccc;
    text-align: center;
  }
  .table td input {
    width: 90%;
  }
  .table th {
    border:1px solid #eee;
    padding: 3px 10px;
    background: #ccc;
    font-weight: normal;
  }
</style>