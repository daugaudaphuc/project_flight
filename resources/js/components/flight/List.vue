<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="col-12 mb-2">
                        <div class="row">
                            <div class="col-md-3 mb-2">
                                <label for="departureLocation">Điểm xuất phát:</label>
                                <select v-model="departureLocation" class="form-control" id="departureLocation">
                                    <option value="">Chọn điểm xuất phát</option>
                                    <option v-for="location in departureLocations" :key="location">{{ location }}</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-2">
                                <label for="destinationLocation">Điểm đến:</label>
                                <select v-model="destinationLocation" class="form-control" id="destinationLocation">
                                    <option value="">Chọn điểm đến</option>
                                    <option v-for="location in destinationLocations" :key="location">{{ location }}</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-2">
                                <label for="flightDate">Ngày bay:</label>
                                <input v-model="flightDate" type="date" class="form-control" id="flightDate">
                            </div>
                            <div class="col-md-3 mb-2">
                                <label for="flightType">Loại vé:</label>
                                <select v-model="flightType" class="form-control" id="flightType">
                                    <option value="">Tất cả</option>
                                    <option value="Hạng nhất">Hạng nhất</option>
                                    <option value="Hạng thương gia">Hạng thương gia</option>
                                    <option value="Hạng phổ thông đặc biệt">Hạng phổ thông đặc biệt</option>
                                    <option value="Hạng phổ thông">Hạng phổ thông</option>
                                </select>
                            </div>
                            <div class="col-12 mb-2 mt-2">
                                <button @click="searchFlights" class="btn btn-primary" :disabled="isSearchDisabled">Tra
                                    cứu</button>
                                <p v-if="isSearchDisabled" class="text-danger">Lựa chọn điểm xuất phát và điểm đến để tra
                                    cứu vé máy bay</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <!-- <th>ID</th> -->
                                    <th>Hãng máy bay</th>
                                    <th>Ngày bay</th>
                                    <th>Loại vé</th>
                                    <th>Giờ khởi hành</th>
                                    <th>Số chuyến bay</th>
                                    <th>Giá vé</th>
                                    <th>Tổng số tiền</th>
                                    <th>Chi tiết vé</th>
                                </tr>
                            </thead>
                            <tbody v-if="flights.length > 0">
                                <tr v-for="flight in flights" :key="flight.id">
                                    <!-- <td>{{ flight.id }}</td> -->
                                    <td>{{ flight.airline }}</td>
                                    <td>{{ flight.flight_date }}</td>
                                    <td>{{ flight.flight_type }}</td>
                                    <td>{{ flight.departure_time }}</td>
                                    <td>{{ flight.flight_number }}</td>
                                    <td>{{ flight.ticket_price.toLocaleString('vi-VN') }} VNĐ</td>
                                    <td v-if="user !== null">{{ (flight.ticket_price + flight.additional_fee +
                                        flight.taxes_fees).toLocaleString('vi-VN') }} VNĐ</td>
                                    <td v-else>vui lòng đăng nhập</td>
                                    <td>
                                        <router-link v-if="user !== null" :to="{ name: 'flightDetail', params: { id: flight.id } }"
                                            class="btn btn-success">Xem Chi Tiết</router-link>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="10" align="center">No Flights Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "flights",
    data() {
        return {
            flights: [],
            departureLocations: [], // To store the unique departure locations
            destinationLocations: [], // To store the unique destination locations
            departureLocation: "",
            destinationLocation: "",
            user: null,
        }
    },

    async mounted() {
        await this.getFlights();
        this.getDepartureLocations();
        this.getDestinationLocations();
    },
    computed: {
        isSearchDisabled() {
            return !(this.departureLocation && this.destinationLocation);
        }
    },
    created() {
        const authToken = localStorage.getItem('auth_token');
        this.user = authToken;
    },
    methods: {
        async getFlights() {
            try {
                const response = await this.axios.get('/api/flights', {
                    // ... params for filtering
                });
                this.flights = response.data;
                console.log(this.flights);
            } catch (error) {
                console.error(error);
                this.flights = [];
            }
        },
        async getDepartureLocations() {
            try {
                const response = await this.axios.get('/api/flights/departure-locations');
                this.departureLocations = response.data;
            } catch (error) {
                console.error(error);
                this.departureLocations = [];
            }
        },
        async getDestinationLocations() {
            try {
                const response = await this.axios.get('/api/flights/destination-locations');
                this.destinationLocations = response.data;
            } catch (error) {
                console.error(error);
                this.destinationLocations = [];
            }
        },
        async searchFlights() {
            try {
                let params = {
                    departureLocation: this.departureLocation,
                    destinationLocation: this.destinationLocation
                };

                if (this.flightDate) {
                    params.flightDate = this.flightDate;
                }

                if (this.flightType) {
                    params.flightType = this.flightType;
                }

                const response = await this.axios.get('/api/flights', {
                    params: params
                });

                this.flights = response.data;
                console.log(this.flights);
            } catch (error) {
                console.error(error);
                this.flights = [];
            }
        }


    }
}

</script>
