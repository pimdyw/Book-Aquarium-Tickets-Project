<template>
  <div class="hero is-fullheight" style="background-color: #1a132f">
    <div style="margin: 6rem">
      <p class="is-size-2 has-text-white">ตระกร้าสินค้า</p>
      <div
        class="hero-body is-large has-background-white mt-5 p-4"
        v-for="item, index in myCart.ticket"
        :key="item.index"
      >
        <label class="checkbox mr-6">
          <input
            type="checkbox"
            v-model="item.checked"
            @change="selectedBook"
          />
        </label>
        <img
          :src="apiURL + item.pic"
          alt="รูปตั๋ว"
          width="200rem"
          height="100rem"
          class="image mr-6"
        />
        <div style="width: 13rem">
          <p class="has-text-black is-size-5">{{ item.nameOfticket }}</p>
          <p>{{ item.price }}฿</p>
          <p>{{ item.ticket }}</p>
          <p>วันเข้าชม {{ item.myDate }} {{index}}</p>
            
        </div>
        <!-- <div> -->
        <div class="control" style="margin-top: 4rem; margin-left: 17rem">
          <button class="button m-2" @click="lowquantity(index)">-</button>
          <button class="button m-2" >{{ item.quantity }}</button>
          <button class="button m-2" @click="addQuantity(index)">+</button>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="has-background-white level" style="position: sticky">
      <div class="hero-body p-5 level-left">
        <label class="checkbox mr-4">
          <input
            type="checkbox"
            v-model="check"
            @change="allselected"
          /> </label
        >
        <p>ทั้งหมด</p>
      </div>
      <div class="hero-body level-right p-0">
        <!-- <p class="mr-6" >รวมทั้งหมด {{total}} บาท</p> -->
        <p class="mr-6">{{ total }}</p>
        <div class="has-background-link has-text-white p-5" @click="addToConfirm">
          <!-- @click="selectedBook" -->
          <router-link to="/user/confirm" class="has-text-white">
            <p>ชำระแล้ว</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCart: [],
      total: 0,
      apiURL: "http://localhost:3000",
      filter1: [],
      check: false,
    };
  },
  mounted() {
    this.showCart();
    this.selectedBook() 
  },
  computed: {
    // totalPrice(){
    //    let selectedBook = this.myCart.ticket.filter((val)=> val.checked === true);
    //     console.log(selectedBook)
    //     console.log(selectedBook.length)
    //     for (let i=0; i< selectedBook.length; i++){
    //         console.log(selectedBook[i])
    //         this.total += selectedBook[i].quantity  * selectedBook[i].price
    //     }
    //     console.log(this.total)
    //     return 0;
    // }
  },
  methods: {
    showCart() {
      // var test = JSON.parse(localStorage.getItem('myCart'))
      this.myCart = JSON.parse(localStorage.getItem("myCart"));
    //   this.myCart.ticket.checked = false
    },
    selectedBook() {
      if (this.total !== 0) {
        this.total = 0;
      }
      let selectedBook = this.myCart.ticket.filter(
        (val) => val.checked === true
      );
      console.log(selectedBook);
      console.log(selectedBook.length);
      for (let i = 0; i < selectedBook.length; i++) {
        // console.log(selectedBook[i])
        this.total += selectedBook[i].quantity * selectedBook[i].price;
      }
      console.log(this.total);
    },
    allselected() {
      // let selectedBookF = this.myCart.ticket.filter((val)=> val.checked === false);
      // let selectedBookT = this.myCart.ticket.filter((val)=> val.checked === true);
      // console.log("-----******-------")
      // console.log(this.myCart.ticket.length)
      if (this.check === true) {
        for (let i = 0; i < this.myCart.ticket.length; i++) {
          if (this.myCart.ticket[i].checked === false) {
            this.myCart.ticket[i].checked = true;
          }
        }
      } else {
        for (let i = 0; i < this.myCart.ticket.length; i++) {
          if (this.myCart.ticket[i].checked === true) {
            this.myCart.ticket[i].checked = false;
          }
        }
      }
      this.selectedBook();
    },
    addToConfirm(){
        // localStorage.setItem('total', this.total)
        localStorage.setItem("total", JSON.stringify(this.total))
        // window.localStorage.clear();
    },
    addQuantity(ticket_id) {
      this.myCart.ticket[ticket_id].quantity += 1;
      this.selectedBook();
    },
    lowquantity(ticket_id) {
        if (this.myCart.ticket[ticket_id].quantity > 0) {
            this.myCart.ticket[ticket_id].quantity -= 1;
            this.selectedBook();
            let delTicket = this.myCart.ticket.filter(
            (val) => val.quantity !== 0
            );
            this.myCart.ticket = delTicket

            var del = JSON.parse(localStorage.getItem("myCart"));
            del.ticket = delTicket
            localStorage.setItem("myCart", JSON.stringify(del));
        }
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
</style>