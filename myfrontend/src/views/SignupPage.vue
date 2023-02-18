<template>
    <div class="all">
        <div class="container is-max-desktop headtext">
            <h1>Sign up</h1>
        </div>


  <div class="container p-3" style="padding-bottom: 5%; justify-content: center; display: flex;">
    <div class="notification block">

        <div class="flex-container" style="display: flex; flex-direction: row;">
            <div style="margin-right: 7%; width: 350px;" >
                ชื่อจริง
                <input v-model="$v.first_name.$model" :class="{ 'is-danger': $v.first_name.$error }" class="input" type="text" >
                <template v-if="$v.first_name.$error">
                  <p class="help is-danger" v-if="!$v.first_name.required">
                    This field is required
                  </p>
                </template>
            </div>
            <div style=" width: 350px;">
                นามสกุล
                <input v-model="$v.last_name.$model" :class="{ 'is-danger': $v.last_name.$error }" class="input" type="text">
                <template v-if="$v.last_name.$error">
                  <p class="help is-danger" v-if="!$v.last_name.required">
                    This field is required
                  </p>
                </template>
            </div>
        </div>

      <div class="flex-container" style="display: flex; flex-direction: row;">
        <div style="margin-right: 7%; width: 350px;" >
          เบอร์โทร
          <input v-model="$v.mobile.$model" :class="{ 'is-danger': $v.mobile.$error }" class="input" type="tel" >
          <template v-if="$v.mobile.$error">
              <p class="help is-danger" v-if="!$v.mobile.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.mobile.mobile">
                Invalid Mobile Number
              </p>
          </template>
        </div>
        <div style=" width: 350px;">
          ชื่อผู้ใช้
          <input v-model="$v.username.$model" :class="{ 'is-danger': $v.username.$error }" class="input" type="text">
          <template v-if="$v.username.$error">
              <p class="help is-danger" v-if="!$v.username.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.username.minLength">
                Must be at least 5 characters
              </p>
            </template>
        </div>
      </div>
      <div>
        อีเมล
        <input v-model="$v.email.$model" :class="{ 'is-danger': $v.email.$error }" class="input" style="width: 755px;">
        <template v-if="$v.email.$error">
          <p class="help is-danger" v-if="!$v.email.required">This field is required</p>
          <p class="help is-danger" v-if="!$v.email.email">Invalid email</p>
        </template>
      </div>
      <div>
        รหัสผ่าน
        <input v-model="$v.password.$model" :class="{ 'is-danger': $v.password.$error }" class="input" type="password" style="width: 755px;">
        <template v-if="$v.password.$error">
          <p class="help is-danger" v-if="!$v.password.required">This field is required</p>
          <p class="help is-danger" v-if="!$v.password.minLength">Must be at least 8 character</p>
        </template>
      </div>
      <div>
        ยืนยันรหัสผ่าน
        <input v-model="$v.confirm_password.$model" :class="{ 'is-danger': $v.confirm_password.$error }" class="input" type="password" style="width: 755px;">
        <template v-if="$v.confirm_password.$error">
              <p class="help is-danger" v-if="!$v.confirm_password.sameAs">
                Password not match
              </p>
        </template>
      </div>

      <div class="buttons flex-container" style="width: 755px; justify-content: flex-end; margin-top: 5%;">
        <button class="button is-link"  @click="submit()"><p>สร้างบัญชีใหม่</p></button>
      </div>

    </div>
  </div>

  </div>
</template>
<script>
import axios from "axios";
import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

function mobile(value) {
  return !helpers.req(value) || !!value.match(/0[0-9]{9}/);
}

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      email: "",
      mobile: "",
      first_name: "",
      last_name: "",
    };
  },
  methods: {
    submit() {
      // Validate all fields
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        let data = {
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
          email: this.email,
          mobile: this.mobile,
          first_name: this.first_name,
          last_name: this.last_name,
        };

        axios
          .post("http://localhost:3000/user/signup", data)
          .then((res) => {
            alert("Sign up Success");
            location.reload()
            console.log(res)
          })
          .catch((err) => {
            alert(err.response.data.details.message)
          });
      }
    },
  },
  validations: {
    email: {
      required: required,
      email: email,
    },
    mobile: {
      required: required,
      mobile: mobile,
    },
    password: {
      required: required,
      minLength: minLength(8),
    },
    confirm_password: {
      sameAs: sameAs("password"),
    },
    username: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
    first_name: {
      required: required,
    },
    last_name: {
      required: required,
    },
  },
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Sarabun:wght@300&display=swap');
    *{
        font-family: 'Prompt', sans-serif;
        font-family: 'Sarabun', sans-serif;  
    }
    .all {
    background-color: #61A4BC;
    font-size: 18px;
    font-family: 'Prompt', sans-serif;
    color: #FFF;
    line-height : 2.5 ;
    padding: 3rem;
  }

  .headtext {
    font-size: 40px;
    font-family: 'Prompt', sans-serif;
    text-align: center;
    padding-top: 2%;
  }

  .block {
    background-color: #85B8CB;
    height: auto;
    width: 870px;
    margin-top: 2%;
    padding: 5%;
  }
</style>