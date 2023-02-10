app.component('navbar-sec',{
    template:
    /* html */
    `
    <header :class="navbarClass">
            <div class="container">
                <div class="left-side">
                    <img :src="logourl" alt="" id="logo">
                    <ul class="nav-links">
                        <li>Produits</li>
                        <li>En Savoir Plus</li>
                        <li>Sécurité</li>
                        <li>Télécharger</li>
                    </ul>
                </div>                

                <div class="right-side">
                    <button id="connection-btn" @click="openLogin">
                        Connect
                    </button>
                </div>

                <span class="material-symbols-outlined" id="openMenu" @click="openMenu(true)">menu</span>
                <span class="material-symbols-outlined" id="closeMenu" @click="openMenu(false)">close</span>
            </div>
        </header>
    `,
    props : []
    ,
    data() {
        return {
            // Data Goes Here
            navbarClass : "nav-bar",
            logourl : "/static/media/icons/tinder-logo-white.png",
        }
    },
    methods: {
        getWidth() {
            if (self.innerWidth) {
              return self.innerWidth;
            }
            if (document.documentElement && document.documentElement.clientWidth) {
              return document.documentElement.clientWidth;
            }
            if (document.body){
              return document.body.clientWidth;
            }
        }
        ,
        openMenu(closeMenu){
            body = document.body;
            var openMenuIcon = document.querySelector("span#openMenu.material-symbols-outlined");
            var closeMenuIcon = document.querySelector("span#closeMenu.material-symbols-outlined");
            if (!closeMenu){
                this.logourl = "/static/media/icons/tinder-black-logo.png";
                body.style.overflowY = "scroll";
                openMenuIcon.style.display = "inline";
                closeMenuIcon.style.display = "none";
                this.navbarClass = "nav-bar";
            }
            else{
                this.navbarClass = "nav-bar-responsive";
                this.logourl = "/static/media/icons/tinder-black-logo.png";
                body.style.overflow = "hidden";
                openMenuIcon.style.display = "none";
                closeMenuIcon.style.display = "inline";
            }
        },
        openLogin(){
            this.$emit("open-login-card")
        }
    }
    ,
    computed : {
        // Computed propreties Goes Here
    }
    , 
    mounted(){
        // Mounted Functions Goes Here
        var that = this;
        var bodyElement = document.body;
        // Case for responsive Mobile Devices
        if (that.getWidth() <= 1100){
            console.log("applying image for responsive mobile");
            that.logourl = "/static/media/icons/tinder-black-logo.png";
        }
        window.addEventListener("resize", function() {
            var openMenu = document.querySelector("span#openMenu");
            var closeMenu = document.querySelector("span#closeMenu");
            var screenWidth = that.getWidth();
            if (screenWidth <= 1100){
                that.logourl = "/static/media/icons/tinder-black-logo.png";
                openMenu.style.display = "inline";
            }
            else{
                that.logourl = "/static/media/icons/tinder-logo-white.png";
                openMenu.style.display = "none";
                closeMenu.style.display = "none";
            }
        });
    }
})