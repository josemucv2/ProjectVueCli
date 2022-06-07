export default {
    data(){
        return {
            mostar: console.log('mostar')
        }
    },
    beforeCreate() {
        console.log(`-----> Hook 'beforeCreate del Componenente ${this.$options.name}`);
    },

}
