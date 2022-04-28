<template>
    <div style="background-color: #1A132F;">
        <section class="hero is-fullheight" style="padding-top: 5em">
            <div class="level">
                <section class="hero p-0">
                    <div class="p-6 ml-6">
                        <p class="title is-size-1 has-text-white">
                        Welcome To <br/>Aquarium
                        </p>
                        <p class="subtitle has-text-white">
                        Let me introduce a magic of the sea
                        </p>
                        <button class="button is-link is-rounded">จองตั๋ว</button>
                    </div>
                </section>
                <section class="hero p-0">
                    <div class="mr-6">
                        <img class="image" :src="require('../assets/dolphin.png')" alt="โลมา" style="height: 28.7rem; width: 28.7rem;">
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

<style scoped>
</style>