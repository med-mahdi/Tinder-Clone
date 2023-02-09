app.component('landing-page-hero-section',{
    template:
    /* html */
    `
    <div class="hero-sec">
        <div class="container">
            <h1>Swipe Left</h1>
            <div class="buttons">
                <button id="hero-btn">Create Account</button>
                <button id="hero-btn-sec" @click="openLogin">Log in</button>
            </div>
        </div>
    </div> 
    `,
    data(){
        return {
            // This Data For Form Section
        }
    },
    methods : {
        // Methods Goes Here
        openLogin(){
            console.log('apply here')
            this.$emit("open-login-card")
        }
    }
})