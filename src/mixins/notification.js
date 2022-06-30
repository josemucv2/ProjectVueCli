export default {
    methods: {
        notification(color, title, text) {
            this.notification({
                color,
                position: "bottom-center",
                title,
                text,
            });
        },
    },
};
