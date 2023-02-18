<template>
  <div>
        <section class="level">
            <section class="hero level-item is-fullheight column is-narrow" style="background-color: #61A4BC;">
                <div style="margin-top: 5rem">
                    <div class="columns is-centered mb-3">
                        <figure class="image is-128x128">
                            <img class="is-rounded" :src="require('../assets/fish.png')">
                          </figure>
                    </div>
                    <p class="subtitle has-text-centered mb-3 has-text-white">
                       Log in to Aquarium
                    </p>
                    <form class="p-5 ml-5 mr-5 mt-5 mb-3 box is-rounded is-transparent" style="background-color: #8EB5C3;">
                        <div class="field">
                            <label class="label has-text-white">Username</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" placeholder="Username" v-model="username">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Password</label>
                            <div class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password" v-model="password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <button class="button is-link is-rounded is-fullwidth" @click="submit">Log in</button>
                    </form>
                </div>
            </section>
            <div class="hero level-item is-fullheight column" :style="{'background-image':'url(https://media.karousell.com/media/photos/products/2021/11/7/sea_aquarium_adult_today_1636250321_b32b7c12.jpg)'}">
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
   
    export default {
        data () {
        return {
            username: '',
            password: '',
            error: ''
        }
     },
    methods: {
        submit () {
        const data = {
            username: this.username,
            password: this.password
        }
        axios.post('http://localhost:3000/user/login/', data)
            .then(res => {
            const token = res.data.token                                
            // alert(res.data.token)
            localStorage.setItem('token', token)
            if(!localStorage.getItem('myCart')){
                console.log("not have my cart")
                localStorage.setItem("myCart", JSON.stringify({'ticket':[]}))
            }
            this.$emit('auth-change')
            })
            .catch(error => {
            this.error = error.response.data
            console.log(error.response.data)
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