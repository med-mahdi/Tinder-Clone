
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
        var body = document.body;
        body.style.overflow = 'hidden';
        setTimeout(function(){
            that.closeLoader();
            body.style.overflow = 'auto';
        },2200)
    }
})