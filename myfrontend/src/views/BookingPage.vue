<template>
  <div class="body">
    <div class="headbook">
      <div class="mt-5" style="width: 100px">
        <img
          :src="require('../assets/fishpng.png')"
          style="width: 70%; padding-top: 50px; padding-left: 20px"
        />
      </div>
      <div class="mt-5">
        <div style="font-size: 40px">จองบัตรเข้าชมออนไลน์</div>
        <div style="margin-top: -20px">จองตอนนี้พร้อมสิทธิพิเศษมากมาย</div>
      </div>
    </div>
    <div class="displayflex blockbig">
      <div class="pic" style="width: 30%">
        <img :src="require('../assets/01.jpg')" style="width: 100%" />
      </div>

      <div class="detail">
        <div class="nameoftik">{{ promotion.pmt_name }}</div>

        <div
          class="displayflex"
          style="background-color: #f6f6f6; margin-bottom: 15px; width: 500px"
          v-if="ticket === ''"
        >
          <div style="color: #7e7c7c; margin-left: 20px; margin-top: 4px">
            <strike>฿{{ promotion.price_normal_adult }}</strike>
          </div>
          &nbsp; &nbsp;
          <div style="color: #250096; font-size: 20px">
            ฿{{ promotion.price_pmt_kid }} - ฿{{ promotion.price_pmt_adult }}
          </div>
        </div>

        <div
          class="displayflex"
          style="background-color: #f6f6f6; margin-bottom: 15px; width: 500px"
          v-else-if="ticket === 'kid'"
        >
          <div style="color: #7e7c7c; margin-left: 20px; margin-top: 4px">
            <strike>฿{{ promotion.price_normal_kid }}</strike>
          </div>
          &nbsp; &nbsp;
          <div style="color: #250096; font-size: 20px">฿{{ price }}</div>
        </div>

        <div
          class="displayflex"
          style="background-color: #f6f6f6; margin-bottom: 15px; width: 500px"
          v-else-if="ticket === 'adult'"
        >
          <div style="color: #7e7c7c; margin-left: 20px; margin-top: 4px">
            <strike>฿{{ promotion.price_normal_adult }}</strike>
          </div>
          &nbsp; &nbsp;
          <div style="color: #250096; font-size: 20px">฿{{ price }}</div>
        </div>

        <div class="displayflex">
          <div>ตัวเลือก</div>
          &nbsp; &nbsp;
          <div>
            <div class="select is-info" style="margin-left: 6px">
              <select v-model="ticket" @change="setPrice">
                <option value="kid">บัตรเด็ก</option>
                <option value="adult">บัตรผู้ใหญ่</option>
              </select>
            </div>
          </div>
        </div>

        <div class="displayflex">
          <div>วันเข้าชม</div>
          &nbsp; &nbsp;
          <div>
            <input
              class="input is-info"
              :min="
                new Date(
                  new Date().getTime() -
                    new Date().getTimezoneOffset() * 60 * 1000
                )
                  .toISOString()
                  .split('T')[0]
              "
              type="date"
              v-model="myDate"
              placeholder="Text input"
            />
          </div>
        </div>

        <div class="displayflex">
          <div>จำนวน</div>
          &nbsp; &nbsp;
          <div>
            <button class="button" @click="lowQuantity">-</button>
          </div>
          &nbsp;
          <div>
            <button class="button">{{ quantity }}</button>
          </div>
          &nbsp;
          <div>
            <button class="button" @click="addQuantity">+</button>
          </div>
        </div>

        <div class="displayflex">
          <div>
            <button class="button is-link is-outlined" @click="addToCart">
              <p>เพิ่มไปยังตระกร้า</p>
            </button>
          </div>
          &nbsp; &nbsp;
          <div>
            <router-link to="/user/confirm" class="has-text-white">
              <button class="button is-link" @click="Toconfirm"><p>ซื้อสินค้า</p></button>
            </router-link>
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
      promotion: [],
      cart: [],
      ticket: "",
      myDate: "",
      price: "",
      quantity: 1,
      nameOfticket: "",
      total: 0
      // show_modal: false,
      // startDate : new Date()
      // apiURL:"http://localhost:3000"
    };
  },
  mounted() {
    this.getprofileDetail(this.$route.params.id);
  },
  computed: {},
  methods: {
    getprofileDetail(PMT) {
      axios
        .get("http://localhost:3000/user/promotion")
        .then((response) => {
          console.log(response);
          this.promotion = response.data.promotion[PMT];
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
    addQuantity() {
      this.quantity += 1;
    },
    lowQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    setPrice() {
      if (this.ticket === "kid") {
        this.price = this.promotion.price_pmt_kid;
      } else if (this.ticket === "adult") {
        this.price = this.promotion.price_pmt_adult;
      }
    },
    addToCart() {
      let products = {
        pic: this.promotion.file_path,
        ticket: this.ticket,
        myDate: this.myDate,
        price: this.price,
        quantity: this.quantity,
        nameOfticket: this.promotion.pmt_name,
        checked: false,
      };
      if(this.myDate == '' || this.ticket == ''){
          alert("Please choose date or ticket type.")
      }
      else{
          var test = JSON.parse(localStorage.getItem("myCart"));
          console.log(JSON.parse(localStorage.getItem("myCart")));
          console.log(test);
          test.ticket.push(products);
          console.log(test);
          localStorage.setItem("myCart", JSON.stringify(test));
          alert("Add to cart success.")
          // window.localStorage.clear();
      }
    },
    Toconfirm(){
      // let products = {
      //   pic: this.promotion.file_path,
      //   ticket: this.ticket,
      //   myDate: this.myDate,
      //   price: this.price,
      //   quantity: this.quantity,
      //   nameOfticket: this.promotion.pmt_name,
      //   checked: false,
      // };
      // if(this.myDate == '' || this.ticket == ''){
      //     alert("Please choose date or ticket type.")
      // }
      // else{
      //     var test = JSON.parse(localStorage.getItem("myCart"));
      //     console.log(JSON.parse(localStorage.getItem("myCart")));
      //     console.log(test);
      //     test.ticket.push(products);
      //     console.log(test);
      //     localStorage.setItem("myCart", JSON.stringify(test));
      //     // window.localStorage.clear();
      // }
      this.total = this.price * this.quantity
      localStorage.setItem("total", JSON.stringify(this.total))
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
.body {
  font-size: 18px;
  color: rgb(0, 0, 0);
  line-height: 2.5;
}

.headbook {
  display: flex;
  flex-direction: row;
  padding-top: 3%;
  background-color: #1a132f;
  margin: 0;
  color: #fff;
  padding-left: 130px;
  padding-bottom: 40px;
}

.displayflex {
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.blockbig {
  padding-left: 10%;
  align-items: center;
  height: 500px;
}
.detail {
  padding-left: 10%;
  line-height: 3;
  padding-top: 0;
}
</style>