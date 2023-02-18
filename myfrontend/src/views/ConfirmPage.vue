<template>
    <div class="bodyall">
          <div class="container is-max-desktop headtext">
    <h1 class="mt-6">ยืนยันการชำระเงิน</h1>
  </div>


  <div class="container is-max-desktop" style="padding-bottom: 5%; justify-content: center; display: flex;">
    <div class="notification block1">
<!--  -->
    ธนาคาร
    <div class="flex-container" style="display: flex; flex-direction: row;">

          <div class="bank button" @click="bank(1)">
            <img :src="require('../assets/bank01.png')" style="width: 30%; margin-right: 3%;">
              ธนาคารกสิกร  
          </div>
          <div class="button bank" @click="bank(2)">
            <img :src="require('../assets/bank02.png')" style="width: 30%; margin-right: 3%;">
                ธนาคารกรุงเทพ  
            </div>
          <div class="button bank" @click="bank(3)">
            <img :src="require('../assets/bank03.png')" style="width: 30%; margin-right: 3%;">
                ธนาคารกรุงไทย
            </div>

    </div>
<!-- -------------------ชื่อจริงนามสกุล-------------------- -->
      <div class="flex-container" style="display: flex; flex-direction: row;">
          <div style="margin-right: 7%; width: 350px;" >
            ชื่อ 
            <input class="input" type="text" placeholder="" readonly :value=user.first_name>
          </div>
          <div style=" width: 350px;">
            นามสกุล
            <input class="input" type="text" placeholder="" readonly  :value=user.last_name> 
          </div>
      </div>
<!-- --------------------------------------------------- -->
            ยอดชำระเงิน
        <div style="width: 350px;" >
            <input class="input" type="text" placeholder="baht" readonly :value=total>
        </div>
       
            หลักฐานการชำระเงิน
            <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" required @change="selectImages" accept="image/png, image/jpeg, image/webp">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label" >
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name" v-if="images === '' && images === undefined" >
                   
                  </span>
                  <span class="file-name" v-else>
                    {{images.name}}
                  </span>
                </label>
              </div>

           
      
    
     
      <div class="buttons flex-container" style="width: 755px; justify-content: flex-end; margin-top: 5%;">
        <router-link to="/user/cart" class="has-text-white">
              <button class="button is-dark mr-5">ยกเลิก</button>
            </router-link>
        <button class="button is-link" @click="submit">ยืนยัน</button>
      </div>

    </div>
  </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
      return {
        user: [],
        total: 0,
         images: '',
         bank_name: ''
      }
    }, mounted () {
        this.onAuthChange()
      },
    
    methods: {
      onAuthChange () {
          const token = localStorage.getItem('token')
          if (token) {
            this.getUser()
          }
        },
   getUser () {
          const token = localStorage.getItem('token')
          axios.get('http://localhost:3000/user/me', { headers: {Authorization: 'Bearer ' + token} }).then(res => {
            this.user = res.data
            // this.$router.push({path: '/'})
            // this.$router.push('/');
            
           this.total = JSON.parse(localStorage.getItem("total"));
          //  console.log(this.total)
          })
        },
        selectImages(event){
            this.images = event.target.files[0];
            console.log(this.images)
            console.log('4444')
        },
        bank(bank_id){
          if(bank_id == 1){
            this.bank_name = 'kasikorn'
          }
          if(bank_id == 2){
            this.bank_name = 'krungthep'
          }
          if(bank_id == 3){
            this.bank_name = 'krungthai'
          }
        },
        submit(){
          console.log("submit")
          // this.isEditPromoModal = false;
          let formData = new FormData();
          formData.append("order_status", "pending");
          formData.append("order_price", this.total);
          formData.append("bank_name", this.bank_name);
          formData.append("user_id", this.user.user_id);
          formData.append("myImage", this.images);
          axios
            .post("http://localhost:3000/user/confimepayment", formData)
            .then((res) => {
              console.log(res)
              this.$router.push('/user/finish');
              // this.mangedata();
              // this.isAddPromoModal = false;
            })
            .catch((err) => {
              alert(err.response.data.details.message);
            });
          // this.images
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
    .bodyall {
    background-color: #61A4BC;
    font-size: 18px;
    font-family: 'Prompt', sans-serif;
    color: #FFF;
    line-height : 2.5 ;
  }

  .headtext {
    font-size: 40px;
    font-family: 'Prompt', sans-serif;
    text-align: center;
    padding-top: 2%;
  }

  .block1 {
    background-color: #85B8CB;
    height: auto;
    width: 870px;
    margin-top: 2%;
    padding: 5%;
  }
  .bank{
      background-color: #5B7DB1;
      height: auto;
    width: 230px;
    /* margin-top: 2%; */
    margin-right: 5%;
    color: #FFF;
  }
</style>