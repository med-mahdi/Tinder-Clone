
app.component('tinder-loader-animation',{
    template:
    /* html */
    `
    <div class="tinder-joke-loader">
        <img id="logo-image" src="/static/media/icons/tinder-logo-white.png">
    </div>
    `,
    props : ["csrfval"]
    ,
    data(){
        return {
            // This Data For Form Section
        }
    },
    methods : {
        // Methods Goes Here
        closeLoader(){
            this.$emit('closeloader');
        }
    },
    mounted(){
        // Mounted methods Goes Here
        var that = this;
        setTimeout(function(){
            that.closeLoader();
        },2200)
    }
})