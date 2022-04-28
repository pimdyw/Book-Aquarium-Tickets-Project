<template>
  <div>
        <section class="level">
            <section class="hero level-item is-fullheight column is-narrow" style="background-color: #61A4BC;">
                <div style="margin-top: 4rem">
                    <div class="columns is-centered mb-3">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                          </figure>
                    </div>
                    <p class="subtitle has-text-centered mb-3 has-text-white">
                        Sign in to Aquarium
                    </p>
                    <form class="p-5 ml-5 mr-5 mt-5 mb-3 box is-rounded" style="background-color: #8EB5C3;">
                        <div class="field">
                            <label class="label has-text-white">Email Address</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            <!-- <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span> -->
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Password</label>
                            <div class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <button class="button is-link is-rounded is-fullwidth">Sign in</button>
                    </form>
                    <!-- <div class="mr-5 ml-5">
                        <button class="button is-fullwidth has-text-link" style="background-color: #8EB5C3;">Create account</button>
                    </div> -->
                </div>
            </section>
            <section class="hero has-background-danger level-item is-fullheight column">
                <div>
                    <img :src="require('../assets/family.jpg')" alt="ครอบครัว" class="image is-fullheight">
                    <!-- style="background-image: url('../assets/family.png'); -->
                
                </div>
            </section>
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