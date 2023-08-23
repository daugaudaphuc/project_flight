<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-5 py-5" id="form1">
                    <div class="form-data" v-if="!loginSuccess">
                        <div class="forms-inputs mb-4"> <span>Email</span> <input autocomplete="off" type="text"
                                v-model="email"
                                v-bind:class="{ 'form-control': true, 'is-invalid': emailBlured && !validEmail(email) }"
                                v-on:blur="emailBlured = true">
                            <div class="invalid-feedback">A valid email is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password"
                                v-model="password"
                                v-bind:class="{ 'form-control': true, 'is-invalid': passwordBlured && !validPassword(password) }"
                                v-on:blur="passwordBlured = true">
                            <div class="invalid-feedback">Password must be 8 characters!</div>
                        </div>
                        <div class="mb-3"> <button v-on:click.stop.prevent="submit"
                                class="btn btn-dark w-100">Login</button> </div>


                    </div>
                    <div class="mt-3" v-if="loginSuccess">
                        <p class="text-success">Login Success!</p>
                    </div>
                    <div class="mt-3" v-if="loginError">
                        <p class="text-danger">Email or password is incorrect. Please try again.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            email: '',
            password: '',
            loggedInUser: null,
            loginSuccess: false,
            loginError: false, // Add this variable
        };
    },
    methods: {
        validEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        },
        validPassword(password) {
            return password.length >= 8;
        },
        // ...mapMutations(['setLoggedInUser']), // Import setLoggedInUser mutation
        // ...
        submit() {
            const formData = {
                email: this.email,
                password: this.password,
            };
            axios.post('/api/login', formData)
                .then(response => {
                    // Store the authentication token in local storage
                    localStorage.setItem('auth_token', response.data.user);
                    this.loginSuccess = true;
                    this.loginError = false; // Reset the error flag
                    location.reload();
                    // this.$router.push({ name: 'home' });

                })
                .catch(error => {
                    this.loginError = true; // Set the error flag to true
                });
        }
        // ...

    }
};
</script>


