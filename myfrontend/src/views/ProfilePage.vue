<template>
    <div class="level">
            <div class="hero level-item is-fullheight p-6" style="background-color: #61A4BC;">
                <p class="title has-text-centered mb-5 has-text-white mt-6">
                    User Profile
                </p>
                <div class="columns is-centered">
                    <figure class="image">
                        <img class="profile-pic" :src="require('../assets/01.jpg')">
                        <!-- :src=apiURL+user.picture  -->
                      </figure>
                </div>
                <p class="is-size-3 has-text-centered mb-6 has-text-white">
                   {{user.username}}
                </p>
                
            </div>
            <div class="hero level-item is-fullheight column is-5" style="background-color: #61A4BC;">
                <div class="pt-6 pb-6 ml-6 mr-6" style="margin-top: 6rem;background-color: #85B8CB;">
                   <!-- <p class="has-text-right mr-6 mt-3"><button>33</button></p> -->
                    <div class="field">
                        <div class="control level">
                            <div>
                                <label class="label has-text-white ml-6">ชื่อ</label>
                                <input class="input ml-6 level-item" type="text" :value="user.first_name" readonly style="width:13rem;">
                            </div>
                            <div>
                                <label class="label has-text-white mr-6">นามสกุล</label>
                                <input class="input mr-6 level-item" type="text" :value="user.last_name" readonly style="width:13rem;">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control level">
                            <div>
                                <label class="label has-text-white ml-6">เบอร์โทร</label>
                                <input class="input ml-6 level-item" type="text" :value="user.mobile" readonly style="width:13rem;">
                            </div>
                            <div>
                                <label class="label has-text-white mr-6">อีเมล</label>
                                <input class="input mr-6 level-item" type="text" :value="user.email" readonly style="width:13rem;">
                            </div>
                        </div>
                    </div>
                    <p class="mt-3 ml-6 has-text-link" style="cursor: pointer;" @click="showChangepw">เปลี่ยนรหัสผ่าน?</p>                
                </div>

                <div class="p-2 ml-6 mr-6 mb-6" style="background-color: #85B8CB;" v-show="show">

                    <div class="field">
                        <div class="control level">
                            <div>
                                <label class="label has-text-white ml-5">รหัสเก่า</label>
                                <input class="input level-item mb-4 ml-5" type="password" style="width:12rem;" v-model="oldPW">
                            </div>
                            <div>
                                <label class="label has-text-white">รหัสใหม่</label>
                                <input v-model="$v.password.$model" :class="{ 'is-danger': $v.password.$error }" class="input level-item mb-4" type="password" style="width:12rem;">
                                <template v-if="$v.password.$error">
                                    <p class="help is-danger" v-if="!$v.password.required">This field is required</p>
                                    <p class="help is-danger" v-if="!$v.password.minLength">Must be at least 8 character</p>
                                </template>
                            </div>
                            <p class="has-text-right mt-3 mr-5"><button class="button is-link" @click="changePw(user.user_id)">ยืนยัน</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios'
import {
  required,
  minLength
} from "vuelidate/lib/validators";
export default {
    data() {
      return {
        user: [],
        apiURL:"http://localhost:3000",
        show: false,
        oldPW: '',
        password: ''
        };
    },
    mounted() {
        this.getprofileDetail(this.$route.params.id);
    },
    methods: {
    getprofileDetail(ProfileId) {
        console.log(ProfileId+"gggg")
        axios.get('http://localhost:3000/user/profileMe/'+ProfileId)
        .then((response) => {
            // console.log(response)
          this.user = response.data.user[0];
          
          console.log(this.user)
        //   this.images = response.data.images;
        //   this.comments = response.data.comments;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });    
    },
    showChangepw(){
        if(this.show == false){
            this.show = true
        }
        else{
            this.show = false
        }
    },
    changePw(pw_id) {
        this.$v.$touch();

        if (!this.$v.$invalid) {
        
            axios.post('http://localhost:3000/user/change/'+pw_id, {
                oldpw: this.oldPW,
                newpw: this.password
            })
            .then((response) => {  
                console.log(response)
            alert("Change password success")
            this.show = false
            })
            .catch((error) => {
                this.error = error.response.data.message;
            });    
        }
    }
   },
   validations:{
       password: {
            required: required,
            minLength: minLength(8)
    }
   }
  }
</script>

<style>
img.profile-pic {
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    object-fit: cover;
}
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Sarabun:wght@300&display=swap');
    *{
        font-family: 'Prompt', sans-serif;
        font-family: 'Sarabun', sans-serif;  
    }
</style>