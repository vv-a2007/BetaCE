<template>
 <div>
 <b-nav-item>
        <b-btn v-b-modal.loginModal size="sm" class="my-2 my-sm-0" variant="primary"  >Login</b-btn>
        </b-nav-item>
        <!-- Modal Component -->
    <b-modal id="loginModal"
             ref="modal"
             title="Login with e-mail"
             @ok="handleOk"
             @shown="clearName"
             centered
             ok-only
             :ok-disabled="this.$v.$invalid"
             >

        <template slot="modal-ok"
                  :loading="loading"
                  :disabled="this.$v.$invalid || loading"
        >Login</template>

        <form @submit.stop.prevent="handleSubmit">
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
        </form>
    </b-modal>
 </div>
</template>

<script>

    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                name: "loginModal",
                e_mail: '',
                passw: ''
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
            }
        },
        computed : {
            loading () {
                return this.$store.getters.loading
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
                let user = {
                    email:this.e_mail,
                    passw:this.passw
                };
                this.$store.dispatch('loginUser',user)
                    .then (() => {this.$refs.modal.hide(); this.$router.push('/')})
                    .catch((error) => {return error})
            }
        }
    }

</script>

<style scoped>
.error {color:red}
</style>