<template>
  <div id="app">
    <!-- nav bar -->
    <nav class="navbar is-fullwidth is-transparent px-5 mt-2" role="navigation" aria-label="main navigation" style="position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0)">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item has-text-white">
          <p>หน้าแรก</p>
        </router-link>
        <div v-if="!user" style="margin-top: 0.5rem">
          <router-link to="/user/promotion" class="navbar-item has-text-white">
            <p>โปรโมชั่น</p>
          </router-link>
        </div>
        <div v-if="user" style="margin-top: 0.345rem">
          <router-link to="/user/promotion" class="navbar-item has-text-white" v-if="user.role == 'normal'">
            <p>โปรโมชั่น</p>
          </router-link>
        </div>
        <div v-if="user" style="margin-top: 0.345rem">
          <router-link to="/user/cart" class="navbar-item has-text-white" v-if="user.role == 'normal'">
            <p>ตระกร้า</p>
          </router-link>
        </div>
        <div v-if="user" style="margin-top: 0.345rem">
          <router-link to="/user/finish" class="navbar-item has-text-white" v-if="user.role == 'normal'">
            <p>ชำระแล้ว</p>
          </router-link>
        </div>
        <div v-if="user" style="margin-top: 0.345rem">
          <router-link to="/user/edit" class="navbar-item has-text-white" v-if="user.role == 'admin'">
            <p>แก้ไขโปรโมชั่น</p>
          </router-link>
        </div>
        <div v-if="user" style="margin-top: 0.345rem">
          <router-link to="/user/order" class="navbar-item has-text-white" v-if="user.role == 'admin'">
            <p>ยืนยันการชำระเงิน</p>
          </router-link>
        </div>
        <a
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div v-if="user" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
               <figure class="image is-24x24 my-auto ">
                <img class="profile-pic" :src="require('./assets/01.jpg')">
              </figure>
              <span class="pl-3 has-text-white">{{ user.first_name }} {{ user.last_name }}</span>
            </a>
            <div class="navbar-dropdown">
              <router-link :to="{name: 'Profile', params:{id: user.user_id}}"><a class="navbar-item">Profile</a></router-link>
              <a class="navbar-item" @click="logout">Log out</a>
            </div>
          </div>
          <div v-if="!user" class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/user/signup">
                  <a class="button is-link mr-4">
                      <strong>Sign up</strong>
                  </a>
                </router-link>
                <router-link to="/user/login">
                  <a class="button is-light">Log in</a>
                </router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
  </div>
</template>

<script>
import axios from 'axios'
    
    export default {
      data () {
        return {
          user: null ,
        apiURL:"http://localhost:3000",
        }
      },
      mounted () {
        this.onAuthChange()
      },
      methods: {
        onAuthChange () {
          const token = localStorage.getItem('token')
          if (token) {
            this.getUser()
          }
          console.log(token)
        },
        getUser () {
          const token = localStorage.getItem('token')
          axios.get('http://localhost:3000/user/me', { headers: {Authorization: 'Bearer ' + token} }).then(res => {
            this.user = res.data
            // this.$router.push({path: '/'})
            this.$router.push('/');
            console.log(this.user.user_id)
            console.log(this.user)
          })
        },
        logout(){
          localStorage.clear()
          this.$router.push('/');
          location.reload()
        }
      }
    }
</script>

<style>
img.profile-pic {
    border-radius: 100%;
    object-fit: cover;
}
  @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Sarabun:wght@300&display=swap');
#app {
      font-family: 'Prompt', sans-serif;
      font-family: 'Sarabun', sans-serif; 
}
</style>
