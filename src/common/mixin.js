// 校验账号
import {user_checkValid} from '@/api/userApi'
export const checkValidUsername = "username";
export const checkValidEmail = "email";

export const formMixin = {
  data() {
      return {
        form:{
          userEmail:'', // 邮件
          userName: '', // 用户名
          userPwd: '', // 密码
          userPwdsec:'', // 二次密码确认
          userPhone: '', // 电话号码
          userQues: '', // 问题
          userAnswer: '', // 答案
        },
        formTips:{
          nameTips: null,
          pwdTips: null,
          pwdTips: null,
          pwdSecTips: null,
          phoneTips: null,
          emailTips: null,
          answerTips: null,
        },
        checkValidUsername: checkValidEmail,
        checkValidEmail: checkValidUsername
      }
  },
  created() {
  },
  methods: {
    /**
     * 
     * @param {*类型} type 
     * @param {*是否必须} necessary  默认为必须
     */
    blurCheck(type,necessary = true){
      var self = this;
      switch(type) {
        case "email":
          self.checkEmail(type,self.form.userEmail,necessary);
          break;
        case "username":
          self.checkUsername(type,self.form.userName,necessary);
          break;
        case "password":
          self.checkPassword(type,self.form.userPwd,necessary);
          break;
        case "userPwdsec":
          self.checkPwdsec(type,self.form.userPwd,necessary);
          break;
        case "userPhone":
          self.checkPhone(type,self.form.userPhone,necessary);
          break;
        case "userQues":
          self.checkQuestion(type,self.form.userQues,necessary);
          break;
        case "userAnswer":
          self.checkAnswer(type,self.form.userAnswer,necessary);
          break;
        default:
          self.checkNormall(type,value,necessary);
          break;
      }
    },
    /**
     * 
     * 考虑一些通用的场景 以及简单的正则匹配;
     * 远程调用;
     * 考虑一下是否以 getUserinfo 作为mixin;
     * 
     */
    checkEmail(type,value){
      var self = this;
      // 非空以及格式校验
      // 远程校验
      user_checkValid({
        str: value,
        type: type
      }).then(res=>{
        // 这里存放远程校验回调;
        console.log(res.data)
      })
    },
    checkUsername(type,value){
      var self = this;
      // 非空以及格式校验
      // 远程校验
      user_checkValid({
        str: value,
        type: type
      }).then(res=>{
        // 这里存放远程校验回调;
        if (res.status == 1){
          self.formTips.nameTips = res.msg;
        }else{
          self.formTips.nameTips = null;
        }
      })
    },
    // ... 其他
    // 回调; 检测完之后的回调
    // 在组件中应该以 复写的形式存在@overwrite
    checkPassword(){
    }
  },
};