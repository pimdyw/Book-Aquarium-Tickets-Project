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
                        <button class="button is-link is-rounded">
                            <p>จองตั๋ว</p>
                        </button>
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