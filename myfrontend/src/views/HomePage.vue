<template>
    <div style="background-color: #1A132F;">
        <section class="hero is-fullheight" style="padding-top: 5em">
            <div class="level">
                <section class="hero p-0">
                    <div class="p-6" style="margin-left: 4rem">
                        <p class="title is-size-1 has-text-white">
                        Welcome To <br/>Aquarium
                        </p>
                        <p class="subtitle has-text-white">
                        Let me introduce a magic of the sea
                        </p>
                        <div v-if="user">
                            <button class="button is-link is-rounded"  v-if="user.role != 'admin'">
                                <router-link to="/user/promotion" class="has-text-white">
                                    <p>จองตั๋ว</p>
                                </router-link>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="hero p-0">
                    <div>
                        <img class="image" :src="require('../assets/dolphin_shark.png')" alt="โลมา" style="height: 33rem; width: 33rem;">
                    </div>
                </section>
            </div>
        </section>
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
            console.log(this.user.user_id)
            console.log(this.user)
          })
        }
      }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Sarabun:wght@300&display=swap');
    *{
        font-family: 'Prompt', sans-serif;
        font-family: 'Sarabun', sans-serif;  
    }
</style>