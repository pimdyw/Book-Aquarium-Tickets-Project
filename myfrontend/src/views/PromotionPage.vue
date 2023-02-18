<template>
    <div class="headbody">
        <div>
          <img :src="require('../assets/shark1.jpg')" class="shark">
        </div>

  <div class="promo">
    โปรโมชั่น
  </div>

  <div class="promo promo2">
    ซื้อตั๋วออนไลน์ถูกกว่า
  </div>

  <div class="flex-container cardpromotion" >

    <div class="card" v-for="item in promotion" :key=item.promotion_id>
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src=apiURL+item.file_path alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content" style="height: 5rem">
          {{item.pmt_name}}
        </div>
        
       
        <button class="button is-danger" v-if="user"><router-link class="has-text-white" :to="{name: 'Booking', params:{id: item.promotion_id-1}}">BUY NOW</router-link></button>
         
        <p style="margin-left: 3px;">฿{{item.price_pmt_kid}}</p>
      </div>
    </div>
    <!-- <router-view @auth-change="onAuthChange"/> -->

  </div>
    </div>
    
</template>
<script>
import axios from 'axios'

export default {

    data() {
      return {
        promotion: [],
        user: null ,
        apiURL:"http://localhost:3000"
        };
    },mounted() {
        this.getprofileDetail()
        this.onAuthChange()
    },
    methods: {
    getprofileDetail() {
        axios.get('http://localhost:3000/user/promotion')
        .then((response) => {
          console.log(response)
          this.promotion = response.data.promotion
        })
        .catch((error) => {
          this.error = error.response.data.message;
        }); 
    },
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
        // this.$router.push('/');
        console.log(this.user.user_id)
        console.log(this.user)
      })
    },
    }
    }
    

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Sarabun:wght@300&display=swap');
    *{
        font-family: 'Prompt', sans-serif;
        font-family: 'Sarabun', sans-serif;  
    }
    .headbody {
    font-size: 18px;
    line-height: 2.5;
  }

  .shark {
    width: 100%;
    position: absolute;
  }

  .promo {
    font-size: 40px;
    padding-left: 5%;
    padding-top: 5%;
    position: relative;
    color: #FFF;
  }

  .promo2 {
    font-size: 30px;
    padding-top: 0%;
    color: #FFF;
    line-height: 1;
  }

  .cardpromotion {
    display: flex;
    flex-wrap: wrap;
    margin-left: 4%;
   margin-top: 8%;
  }
  .card{
    width: 20%;
    margin: 2%;
    position: relative;
  }

  /* .image{
    width: 300px;
    height: 200px;
  } */
</style>