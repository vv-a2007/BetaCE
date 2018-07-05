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
                 :ok-disabled="this.$v.$invalid"
        >
            <form @submit.stop.prevent="handleSubmit">
                <div class="error ml-4 " v-if="!this.mes!==''">{{mes}}</div>
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
                    <div class="error ml-4 " v-if="!$v.e_mail.uniqueEmail">This e-mail already exist.</div>
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
                mes:''
            }
        },
        validations: {
            e_mail: {
                required,
                email,
                uniqueEmail : function (newEmail) {
                    if (newEmail === '' || !this.$v.e_mail.required || !this.$v.e_mail.email ) return true;
                    return new Promise((resolve, reject) => {
                    this.$http.get("http://betace.my/Check_new_email.php",{params:{'email':newEmail}},{responseType: 'json'}).then(response => {
                         return (response.json() === true); // success callback
                    }, reject => {
                        this.mes = response.json(); return false // error callback
                    });})
                }
            },
            passw: {
                required,
                minLength: minLength(8)
            },
            repeatpassw: {
                sameAs :sameAs('passw')
            }
        },
        methods: {

            clearName () {
                this.e_mail = '';
                this.passw = ''
            },
            handleOk (evt) {
                // Prevent modal from closing
                evt.preventDefault();
                if (!this.$v.$invalid) {
                    this.handleSubmit()
                }
            },
            handleSubmit () {

                this.clearName();
                this.$refs.modal.hide()
            }
        }
    }
</script>

<style scoped>
    .error {color:red}
</style>