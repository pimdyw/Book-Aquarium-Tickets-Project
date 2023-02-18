<template>
    <body style="padding: 7rem;">
      <p class="title has-text-white has-text-centered">แก้ไขโปรโมชั่น</p>
        <div class="columns is-centered mt-6">
            <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ชื่อโปรโมชั่น</th>
                    <th>ราคาปกติ(KID)</th>
                    <th>ราคาโปรโมชั่น(KID)</th>
                    <th>ราคาปกติ(ADULT)</th>
                    <th>ราคาโปรโมชั่น(ADULT)</th>
                    <th>Path รูปภาพ</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in promotion" :key=item.promotion_id>
                        <td><strong>{{index+1}}</strong></td>
                        
                        <td v-if="editToggle.includes(item.promotion_id)"><input class="input level-item is-primary" v-model="edit2" type="text"></td>
                        <td  style="width: 10rem" v-else>{{item.pmt_name}}</td>

                        <td v-if="editToggle.includes(item.promotion_id)"><input class="input level-item is-primary" v-model="edit3" type="text"></td>
                        <td v-else>{{item.price_normal_kid}}</td>

                        <td v-if="editToggle.includes(item.promotion_id)"><input class="input level-item is-primary" v-model="edit4" type="text"></td>
                        <td v-else>{{item.price_pmt_kid}}</td>

                        <td v-if="editToggle.includes(item.promotion_id)"><input class="input level-item is-primary" v-model="edit5" type="text"></td>
                        <td v-else>{{item.price_normal_adult}}</td>

                        <td v-if="editToggle.includes(item.promotion_id)"><input class="input level-item is-primary" v-model="edit6" type="text"></td>
                        <td v-else>{{item.price_pmt_adult}}</td>

                        <td v-if="editToggle.includes(item.promotion_id)"><input class="input level-item is-primary" v-model="edit7" type="text"></td>
                        <td v-else>{{item.file_path}}</td>

                        <td class="level">
                            <button class="button is-info level-item mr-3"  v-if="!editToggle.includes(item.promotion_id)" @click="showEdit(item.promotion_id)">edit</button>
                            <button class="button is-info level-item mr-3"  v-else @click="saveEdit(item.promotion_id)">Save edit</button>

                            <button class="button is-danger level-item" v-if="!editToggle.includes(item.promotion_id)" @click="deletePmt(item.promotion_id)">del</button>
                            <button class="button is-danger level-item" v-else @click="cancelEdit(item.promotion_id)" >cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>{{promotion.length+1}}</strong></td>
                        <td><input class="input level-item is-primary" type="text" v-model="add1"></td>
                        <td><input class="input level-item is-primary" type="text" v-model="add2"></td>
                        <td><input class="input level-item is-primary" type="text" v-model="add3"></td>
                        <td><input class="input level-item is-primary" type="text" v-model="add4"></td>
                        <td><input class="input level-item is-primary" type="text" v-model="add5"></td>
                        <td><input class="input level-item is-primary" type="text" v-model="add6"></td>
                        <td>
                            <button class="button is-primary" @click="add()">add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    </body>
</template>
<script>
import axios from 'axios'

export default {

    data() {
      
      
      return {
        promotion: [],
        editToggle: [],
        edit2: '',
        edit3: '',
        edit4: '',
        edit5: '',
        edit6: '',
        edit7: '',
        add1: '',
        add2: '',
        add3: '',
        add4: '',
        add5: '',
        add6: ''
        // apiURL:"http://localhost:3000"
        };
    },mounted() {
        this.getprofileDetail()

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
    showEdit(pmt_id){
      this.edit2 = this.promotion.filter(x => x.promotion_id === pmt_id)[0].pmt_name
      this.edit3 = this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_normal_kid
      this.edit4 = this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_pmt_kid
      this.edit5 = this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_normal_adult
      this.edit6 = this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_pmt_adult
      this.edit7 = this.promotion.filter(x => x.promotion_id === pmt_id)[0].file_path

      this.editToggle.push(pmt_id);
      console.log("here")
    },
   cancelEdit(pmt_id){
      this.editToggle = this.editToggle.filter(x => x != pmt_id);
    },
    saveEdit(pmt_id){
      axios
        .post(`http://localhost:3000/user/edit/${pmt_id}`, {
          name: this.edit2,
          priceKid1: this.edit3,
          priceKid2: this.edit4,
          priceAdult1: this.edit5,
          priceAdult2: this.edit6,
          path: this.edit7
        })
        .then((response) => {
          // let selectedBlog = this.comments.filter(e => e.id === comment_id)[0]
          this.promotion.filter(x => x.promotion_id === pmt_id)[0].pmt_name = this.edit2;
          this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_normal_kid = this.edit3;
          this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_pmt_kid = this.edit4;
          this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_normal_adult = this.edit5;
          this.promotion.filter(x => x.promotion_id === pmt_id)[0].price_pmt_adult = this.edit6;
          this.promotion.filter(x => x.promotion_id === pmt_id)[0].file_path = this.edit7;

          console.log("response" + response)
          console.log("1223423423")
          // this.$router.push('/user/promotion');
          // location.reload()
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
      this.editToggle = this.editToggle.filter(x => x != pmt_id);
    },
    deletePmt(pmt_id){
      const result = confirm(`Are you sure you want to delete it?`);
      if (result){
        axios
        .delete(`http://localhost:3000/user/del/${pmt_id}`)
        .then((response) => {
         console.log(response)
          location.reload()
        })
        .catch((error) => {
          alert(error.response.data.message)
        });
      }
    },
    add(){
       axios
        .post(`http://localhost:3000/user/add/`, {
          name: this.add1,
          priceKid1: this.add2,
          priceKid2: this.add3,
          priceAdult1: this.add4,
          priceAdult2: this.add5,
          path: this.add6
        })
        .then((response) => {
          location.reload()
          console.log(response)
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
      // this.editToggle = this.editToggle.filter(x => x != pmt_id);
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
    html{
      background-color: #1A132F;
    }
   
</style>