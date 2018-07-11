<template>
    <div>
        <b-nav-item>
            <b-btn v-b-modal.regModal size="sm" class="my-2 my-sm-0" variant="primary"  >Registration</b-btn>
        </b-nav-item>
        <!-- Modal Component -->
        <b-modal id="regModal"
                 ref="modal"
                 title="Registration with e-mail"
                 @ok="handleOk"
                 @shown="clearName"
                 centered
                 ok-only
        >
        <template slot="modal-ok"
                  :loading="loading"
                  :disabled="this.$v.$invalid || loading"
                  >Submit</template>
            <form v-if="!regOk" @submit.stop.prevent="handleSubmit">
                <b-row>
                    <b-form-input type="text"
                                  placeholder="Enter your e-mail"
                                  v-model="e_mail"
                                  style="width: 90%"
                                  class="my-2 ml-4"
                                  autocomplete="section-blue username"
                    >
                    </b-form-input>
                    <div class="error ml-4 " v-if="!$v.e_mail.required">e-mail is required.</div>
                    <div class="error ml-4 " v-if="!$v.e_mail.email">e-mail must be a valid.</div>
                </b-row>
                <b-row>
                    <b-form-input type="password"
                                  placeholder="Enter your password"
                                  v-model="passw"
                                  style="width: 90%"
                                  class="my-2 ml-4"
                                  v-model.trim="$v.passw.$model"
                                  autocomplete="section-blue current-password"
                    >
                    </b-form-input>
                    <div class="error ml-4 " v-if="!$v.passw.required">Password is required.</div>
                    <div class="error ml-4 " v-if="!$v.passw.minLength">Password must have at least {{ $v.passw.$params.minLength.min }} letters.</div>
                </b-row>
                <b-row>
                    <b-form-input type="password"
                                  placeholder="Repeat your password"
                                  v-model="repeatpassw"
                                  style="width: 90%"
                                  class="my-2 ml-4"
                                  v-model.trim="$v.repeatpassw.$model"
                                  autocomplete="section-blue current-password"
                    >
                    </b-form-input>
                    <div class="error ml-4 " v-if="!$v.repeatpassw.sameAs">Passwords must be equal.</div>

                </b-row>
            </form>
            <form v-if="regOk" @submit.stop.prevent="closeSubmit">
                <div class="primary ml-4 ">User with login</div>
                <div class="success ml-4 " >{{e_mail}}</div>
                <div class="primary ml-4 ">{{textOK}}</div>
                <b-button size="md" class="my-2 my-sm-0" type="submit" @submit="closeSubmit">Close</b-button>
            </form>
        </b-modal>
    </div>
</template>

<script>

    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                name: "registrationModal",
                e_mail: '',
                passw: '',
                repeatpassw:'',
                regOk:false,
                textOK:''
            }
        },
        computed : {
           loading () {
               return this.$store.getters.loading
           }
        },
        validations: {
                e_mail: {
                    required,
                    email
                },
                passw: {
                    required,
                    minLength: minLength(8)
                },
                repeatpassw: {
                    sameAs: sameAs('passw')
                }
            }
        ,
        methods: {

            clearName () {
                this.e_mail = '';
                this.passw = '';
                this.repeatpassw=''
            },

            addUser :  function (user) {

                          this.$store.dispatch('registerUser',user)
                              .then (() => { this.$router.push('/')})
                              .catch((error) => {return error})

            },
            handleOk (evt) {
                // Prevent modal from closing
                evt.preventDefault();
                if (!this.$v.$invalid) {
                    this.handleSubmit()
                }
            },
            handleSubmit () {
                const user = {
                    email:this.e_mail,
                    passw:this.passw
                };
                this.addUser(user);
            },
            closeSubmit (){
                this.clearName();
                this.$refs.modal.hide();
            }
        }
    }
</script>

<style scoped>
    .error {color:red}
</style>