<template>
    <div class="hero is-fullheight" style="background-color: #1A132F;">
            <div style="margin: 6rem;">
                <p class="is-size-2	has-text-white">ตระกร้าสินค้า</p>
                <div class="hero-body is-large has-background-white mt-5 p-4 level">
                    <label class="checkbox mr-4 level-right">
                        <input type="checkbox">
                    </label>
                    <!-- <img src="ticket.jpg" alt="รูปตั๋ว" width="200em" height="100em" class="image mr-4"> -->
                    <div>
                        <p  class="has-text-black is-size-5">บัตรชมเที่ยวเดียวออนไลน์ถูกกว่า</p>
                        <p>650฿</p>
                        <p>ผู้ใหญ่</p>
                        <p>วันเข้าชม 03-11-2022</p>
                    </div>
                    <!-- <div> -->
                        <div class="control level-right" style="margin-top: 4rem;">
                            <button class="button m-2">-</button>
                            <input class="input m-2" type="text" style="width: 30%;">
                            <button class="button m-2">+</button>
                         </div>
                    <!-- </div> -->
                </div>
                
            </div>
            <div class="has-background-white level">
                <div class="hero-body p-5 level-left">
                    <label class="checkbox mr-4">
                        <input type="checkbox">
                    </label>
                    <p>ทั้งหมด</p>
                </div>
                <div class="hero-body level-right p-0">
                    <p class="mr-6">รวมทั้งหมด xxx บาท</p>
                    <div class="has-background-link has-text-white p-5">
                        ชำระเงิน(x)
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
      return {}
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