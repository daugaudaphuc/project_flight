<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-5 py-5" id="form1">
                    <div class="form-data" v-if="!submitted">
                        <div class="forms-inputs mb-4">
                            <span>Name</span>
                            <input type="text" v-model="name"
                                v-bind:class="{ 'form-control': true, 'is-invalid': nameBlured && !name }"
                                v-on:blur="nameBlured = true">
                            <div class="invalid-feedback">Name is required!</div>
                        </div>
                        <div class="forms-inputs mb-4">
                            <span>Email</span>
                            <input type="text" v-model="email"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validEmail(email) && emailBlured }"
                                v-on:blur="emailBlured = true">
                            <div class="invalid-feedback">A valid email is required!</div>
                        </div>
                        <div class="forms-inputs mb-4">
                            <span>Password</span>
                            <input type="password" v-model="password"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validPassword(password) && passwordBlured }"
                                v-on:blur="passwordBlured = true">
                            <div class="invalid-feedback">Password must be 8 characters!</div>
                        </div>
                        <div class="forms-inputs mb-4">
                            <span>Confirm Password</span>
                            <input type="password" v-model="confirmPassword"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !passwordsMatch(password, confirmPassword) && confirmPasswordBlured }"
                                v-on:blur="confirmPasswordBlured = true">
                            <div class="invalid-feedback">Passwords do not match!</div>
                        </div>
                        <div class="mb-3">
                            <button v-on:click.stop.prevent="submit" class="btn btn-dark w-100">Sign Up</button>
                        </div>
                    </div>
                    <div class="success-data" v-else>
                        <div class="text-center d-flex flex-column">
                            <i class='bx bxs-badge-check'></i>
                            <span class="text-center fs-1">Bạn đã đăng ký tài khoản <br> thành công</span>
                            <router-link :to="{ name: 'signin' }" class="btn btn-primary">Đăng nhập</router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            nameBlured: false,
            emailBlured: false,
            passwordBlured: false,
            confirmPasswordBlured: false,
            submitted: false
        };
    },
    methods: {
        validEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        },
        validPassword(password) {
            return password.length >= 8;
        },
        passwordsMatch(password, confirmPassword) {
            return password === confirmPassword;
        },
        submit() {
            if (this.name && this.validEmail(this.email) && this.validPassword(this.password) && this.passwordsMatch()) {
                const formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmPassword,
                };

                axios.post('/api/register', formData)
                    .then(response => {
                        this.submitted = true;
                    })
                    .catch(error => {
                    });
            } else {
            }
        },
    }
};
</script>
