/* eslint-disable */
import Vue from "vue";
import notification from "@/mixins/notification";

export default {
    mixins: [notification],
    methods: {
        handleError() {
            Vue.axios.interceptors.response.use(
                (response) => {
                    return response;
                },
                (error) => {
                    const {
                        response = {}
                    } = error;

                    if (response.data.message) {
                        this.notification("dark", response.data.message);
                        if (response.data.message === 'Usuario no verificado') {
                            this.$router.push({
                                name: "VerificationCode"
                            });
                        }
                    }
                    return Promise.reject(error);
                }
            );
        },
    },
};
