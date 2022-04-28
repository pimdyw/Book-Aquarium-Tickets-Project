<template>
  <div id="app">
    <!-- nav bar -->
    <nav class="navbar is-fullwidth is-transparent px-5" role="navigation" aria-label="main navigation" style="position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0)">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item has-text-white">
          <strong>Home</strong>
        </router-link>
        <router-link to="#" class="navbar-item has-text-white">
          <strong>Promotion</strong>
        </router-link>
        <router-link to="/user/cart" class="navbar-item has-text-white">
          <strong>ตระกร้า</strong>
        </router-link>
        <router-link to="/user/finish" class="navbar-item has-text-white">
          <strong>ชำระแล้ว</strong>
        </router-link>
        <a
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div v-if="user" class="navbar-item">
            <router-link to="/blogs/create" class="button is-primary">
              <strong>New Blog</strong>
            </router-link>
          </div>
          <div v-if="user" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-24x24 my-auto">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
              <span class="pl-3">{{ user.first_name }} {{ user.last_name }}</span>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Profile</a>
              <a class="navbar-item">Log out</a>
            </div>
          </div>
          <div v-if="!user" class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/user/signup">
                  <a class="button is-link mr-4">
                      <strong>Sign up</strong>
                  </a>
                </router-link>
                <router-link to="/user/login">
                  <a class="button is-light">Log in</a>
                </router-link>
            </div>
            </div>
          </div>
          <!-- <div v-if="!user" class="navbar-item">
            <router-link to="/user/signup">
             <a class="button is-light">Log in</a>
            </router-link>
          </div> -->
        </div>
      </div>
    </nav>
    
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
} */
</style>
