<template>
  <div class="hero is-fullheight" style="background-color: #1A132F;">
            <div style="margin: 6rem;">
                <p class="is-size-2	has-text-white">สถานะ Order</p>
                <div class="is-large mt-5 p-4" style="background-color: #EBEBFF;" v-for="item in order" :key="item.index">
                    <div class="level">
                        <p class="is-size-5 level-left">รหัส Order: {{item.order_id}}</p>
                        <strong class="is-size-5 level-right has-text-link">{{item.order_status}}</strong>
                    </div>
                    <div class="hero-body p-5">
                        <img :src="require('../assets/thx.jpg')" alt="รูปตั๋ว" width="200em" height="100em">
                        <div class="ml-6">
                            <p>รหัสผู้ซื้อ: {{item.user_id}}</p>
                            <p>รวมการสั่งซื้อ: ฿{{item.order_price}}</p>
                            <p>วันจองบัตรเข้าชม: {{item.order_date}}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      order: [],
      user: []
    };
  },
  mounted() {
    this.onAuthChange()
    // this.getOrderDetail();
    // this.onAuthChange()
  },
  methods: {
    getOrderDetail(id) {
      axios
        .get("http://localhost:3000/user/order/finish/"+id)
        .then((response) => {
          console.log(response);
          this.order = response.data.order;
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
            this.getOrderDetail(this.user.user_id)
            console.log(this.user.user_id)
            console.log(this.user)
          })
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
</style>