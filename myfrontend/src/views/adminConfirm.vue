<template>
  <div style="padding: 7rem">
    <p class="title has-text-white has-text-centered">ยืนยันการชำระเงิน</p>
    <div class="columns is-centered mt-6">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>สถานะ</th>
            <th>วันสั่งจอง</th>
            <th>ยอดชำระเงิน</th>
            <th>User_id</th>
            <!-- <th>ราคาโปรโมชั่น(ADULT)</th>
                <th>Path รูปภาพ</th> -->
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order" :key=item.index>
            <th>{{item.order_id}}</th>
            <td>{{item.order_status}}</td>
            <td>{{item.order_date}}</td>
            <td>{{item.order_price}}</td>
            <td>{{item.user_id}}</td>
            <!-- <td>650</td>
                    <td>img.jpg</td> -->
            <td class="level">
              <button class="button is-info level-item mr-3" @click="confirm(item.order_id)">confirm</button>
              <button class="button is-danger level-item" @click="cancel(item.order_id)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      order: [],
    };
  },
  mounted() {
    this.getOrderDetail();
    // this.onAuthChange()
  },
  methods: {
    getOrderDetail() {
      axios
        .get("http://localhost:3000/user/order")
        .then((response) => {
          console.log(response);
          this.order = response.data.order;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },confirm(orderId){
         axios
        .post(`http://localhost:3000/user/orderConfirm/${orderId}`, {
          order_status: 'confirm' 
        })
        .then((response) => {
        this.getOrderDetail()
        console.log("responseOrderConfirm" + response)
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
    },cancel(orderId){
         axios
        .post(`http://localhost:3000/user/orderCancel/${orderId}`, {
          order_status: 'cancel' 
        })
        .then((response) => {
        this.getOrderDetail()
        console.log("responseOrderConfirm" + response)
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Sarabun:wght@300&display=swap");
* {
  font-family: "Prompt", sans-serif;
  font-family: "Sarabun", sans-serif;
}
html {
  background-color: #1a132f;
}
</style>