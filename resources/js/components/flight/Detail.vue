<template>
    <div>
        <h1>Chi tiết vé máy bay</h1>
        <div v-if="flight">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">Hãng máy bay</th>
                        <td>{{ flight.airline }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Điểm xuất phát</th>
                        <td>{{ flight.departure_location }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Điểm đến</th>
                        <td>{{ flight.destination_location }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Số chuyến bay</th>
                        <td>{{ flight.flight_number }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Loại vé</th>
                        <td>{{ flight.flight_type }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Ngày khởi hành</th>
                        <td>{{ flight.flight_date }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Giờ khởi hành</th>
                        <td>{{ flight.departure_time }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Giá vé</th>
                        <td>{{ flight.ticket_price.toLocaleString('vi-VN') }} VNĐ</td>

                    </tr>
                    <tr>
                        <th scope="row">Các loại thuế phí liên quan</th>
                        <td>{{ flight.taxes_fees.toLocaleString('vi-VN') }} VNĐ</td>
                    </tr>
                    <tr>
                        <th scope="row">Phí mua thêm cân cho hàng ký gửi.</th>
                        <td>{{ flight.additional_fee.toLocaleString('vi-VN') }} VNĐ</td>
                    </tr>
                    <tr>
                        <th scope="row">Tổng tiền</th>
                        <td>{{ (flight.ticket_price + flight.additional_fee +
                            flight.taxes_fees).toLocaleString('vi-VN') }} VNĐ</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="goBack" class="btn btn-secondary">Quay lại</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            flight: null, // Initialize the flight data as null
            user: null,
        };
    },
    created() {
        const authToken = localStorage.getItem('auth_token');
        this.user = authToken;
    },
    methods: {
        async fetchFlightDetails() {
            try {
                const response = await this.axios.get(`/api/flights/${this.$route.params.id}/detail`);
                this.flight = response.data;
            } catch (error) {
                console.error(error);
                // Handle error, e.g., show an error message or redirect to an error page
            }
        },
        goBack() {
            this.$router.go(-1); // Navigate back to the previous page
        },
    },
    mounted() {
        this.fetchFlightDetails(); // Fetch flight details when the component is mounted
    },
    beforeRouteEnter(to, from, next) {
        const authToken = localStorage.getItem('auth_token');

        if (!authToken) {
            next('/signin'); // Redirect to '/signin' if user is null
        } else {
            next();
        }
    },
};
</script>