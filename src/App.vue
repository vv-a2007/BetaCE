<template>
  <b-container id="app">
    <b-navbar toggleable="sm" tooglebreakpoint="sm" type="dark" variant="primary">

      <b-navbar-toggle target="sm"></b-navbar-toggle>

      <b-navbar-brand exact to="/"><img src="../src/assets/NavLogo.png" alt="CE">Common Economy</b-navbar-brand>

      <b-collapse is-nav id="sm">

        <b-navbar-nav>
          <b-nav-item exact to="/">Home</b-nav-item>
          <b-nav-item to="/shopping">Shopping</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-form>
          <login-modal></login-modal>
          <b-nav-item to="/registration">Registration</b-nav-item>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <!-- Using button-content slot -->
  <!--          <template slot="button-content">
              <em>User</em>
          </template> -->
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>
  </b-container>
</template>

<script>

import loginPage from '../src/components/Auth/Login.vue'

export default {
  name: 'App',
    data ()
    {
        return {

        }
    },
    components:{'login-modal':loginPage}
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
