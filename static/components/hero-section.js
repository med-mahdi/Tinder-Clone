app.component('landing-page-hero-section',{
    template:
    /* html */
    `
    <div class="hero-sec">
        <div class="container">
            <h1 id="hero-header">Swipe Left</h1>
            <div class="buttons">
                <button id="hero-btn" @click="openRegister">Create Account</button>
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
        },
        openRegister(){
            console.log('apply here')
            this.$emit("open-register-card")
        }
    },
    mounted() {
        window.addEventListener("scroll", function() {
            let heroHeader = document.getElementById("hero-header");
            let heroCta = document.getElementById("hero-btn");
            let heroCtaSec = document.getElementById("hero-btn-sec");
            // --- Get The Height of each element ---
            let heroHeaderPos = window.pageYOffset / heroHeader.clientHeight;
            // --- Applying to the elements
            heroHeader.style.opacity = 1.8 - heroHeaderPos;
            heroCta.style.opacity = 1.8 - heroHeaderPos;
            heroCtaSec.style.opacity = 1.8 - heroHeaderPos;
        });
    }
})