<template>
  <b-container id="app">
    <b-navbar toggleable="md" tooglebreakpoint="md" type="dark" variant="primary" fixed="top" :sticky="true" >

      <b-navbar-toggle target="md"></b-navbar-toggle>

      <b-navbar-brand exact to="/"><img src="../src/assets/NavLogo.png" alt="CE">Common Economy</b-navbar-brand>

      <b-collapse is-nav id="md">

        <b-navbar-nav>
        <b-nav-item exact to="/"><b-btn  size="sm" class="my-2 my-sm-0" variant="primary">Home</b-btn></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-for="item in leftLinks" :key="item.title">
          <b-nav-item v-if="(!item.checkLog) || (item.checkLog && isUserLogin)" :to="item.link"><b-btn  size="sm" class="my-2 my-sm-0" variant="primary">{{item.title}}</b-btn></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-nav v-for="item in rightLinks" :key="item.title">
            <b-nav-item v-if="(!item.checkLog) || (item.checkLog && isUserLogin)" :to="item.link"><b-btn  size="sm" class="my-2 my-sm-0" variant="primary">{{item.title}}</b-btn></b-nav-item>
          </b-navbar-nav>

          <b-nav-form>
            <login-modal v-if="!isUserLogin"></login-modal>
            <registration-modal v-if="!isUserLogin" ></registration-modal>
          </b-nav-form>

          <b-btn  size="sm" class="my-2 my-sm-0" variant="primary" type="dark" >

          <b-nav-item-dropdown v-if="isUserLogin" text="User" right variant="primary" type="dark">
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" >Signout</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-btn>

          <b-navbar-nav v-if="isUserLogin" >
           <b-btn  size="sm" class="my-2 my-sm-0" variant="primary" @click="logOut">LogOut</b-btn>
          </b-navbar-nav>

          <b-nav-form v-if="isUserLogin" >
            <b-form-input size="sm" class="my-sm-0" type="text" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-btn  size="sm" class="my-2 my-sm-0" variant="primary" type="dark" >
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-btn>




        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>

     <b-alert
             v-if="error"
             show
             dismissible
             variant="danger"
             @dismissed="closeError">
      <p>{{error}}</p>

     </b-alert>

  </b-container>
</template>

<script>


import loginPage from '../src/components/Auth/Login.vue'
import regPage from '../src/components/Auth/Registration.vue'


export default {
  name: 'App',
    data ()
    {
        return {
            leftLinks :[
                {title:'Shopping', link:'/shopping', checkLog:true}
            ],
            rightLinks :[

            ],
            user:{

            }
        }
    },

    computed : {

            error () { if (this.$store.getters.error) {
                           return this.$store.getters.error}
                       else { return null}},

            isUserLogin () {return this.$store.getters.isUserLogin}
    },

    methods: {
        closeError(){
            this.$store.dispatch('clearError')
        },
        logOut (){
            this.$store.dispatch('logOutUser');
            this.$router.push('/')
        }
    },
    components:{'login-modal':loginPage,
                'registration-modal':regPage
               }
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
