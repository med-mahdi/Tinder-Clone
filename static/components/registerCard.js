
app.component('register-card',{
    template:
    /* html */
    `
    <div class="register-card">
                    <svg id="cancelIcon" @click="closeRegisterCard" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
                    <div class="container">
                        <div class="heading-card">
                            <img id="logo-tinder" src="/static/media/icons/tinder-icon.png">
                            <h1>Create account</h1>
                            <p>Register Now to start matching Now for Free!</p>
                        </div>
            
                        <form action="">
                            <label for="">Username
                                <div class="input-box" id="username_input">
                                    <input type="text" v-model="username" required placeholder="Enter your username" maxlength="20">
                                </div>
                            </label>

                            <label for="">Email Address
                                <div class="input-box" id="useremail_input">
                                    <input type="text" v-model="useremail" required placeholder="Enter your Email" maxlength="50">
                                </div>
                            </label>
            
                            <label for="">Password
                                <div class="input-box" id="password_input">
                                    <span v-if="!showPassword">
                                        <input type="password" @keyup="disableBtn" v-model="password" required placeholder="Enter your password" maxlength="20">
                                        <i style="font-size:20px;color: #333333;" @click="showHiddePassword" class="fa-regular fa-eye"></i>
                                    </span>
            
                                    <span v-if="showPassword">
                                        <input type="text"  @keyup="disableBtn" v-model="password" required placeholder="Enter your password" maxlength="20">
                                        <i style="font-size:20px;color: #333333;" class="fa-regular fa-eye-slash" @click="showHiddePassword"></i>
                                    </span>
                                </div>
                            </label>

                            <input type="submit" :disabled="btn_disabled" @click="submitForm" :value="btn_value" id="btn-submit" :class="{ btn_disabled: !btn_disabled }">
                            <p class="registerNotify">Already Have an account? <span id="register-link"><a href="/register">Login</a></span></p>
                        </form>

                    </div>
                </div>
    `,
    props : ["csrfval"]
    ,
    data(){
        return {
            // This Data For Form Section
            showPassword: false,
            username : "",
            useremail : "",
            password : "",
            csrfValue : this.csrfval,
            btn_disabled : true ,
            btn_value : "Continue",
            message : "",
        }
    },
    methods : {
        disableBtn(){
            var buttonSubmit = document.getElementById("btn-submit");
            var password_length = this.password.length
            if (password_length >= 8){
                this.btn_disabled = false
                this.btn_value = "Are you Ready !"
                buttonSubmit.style.background = "linear-gradient(45deg,#ff287a,#ff6036)";
            }
            else{
                this.btn_disabled = true
                this.btn_value = "Continue"
                buttonSubmit.style.background = "#909090";
            }
        }
        ,
        redirectUser(pageName){
            return window.location.href = `/${pageName}`;
        }
        ,
        closeLoginCard(){
            this.$emit("open-login-card")
        } 
        ,
        // Get the width of the full page,
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
        closeRegisterCard(){
            this.$emit("close-register-card")
        }
        ,
        // This For Form Component Proccess
        cleanForm(){
            this.username = "";
            this.useremail = "";
            this.password = "";
            console.log("clean form applied!")
        }
        ,
        errorFormShow(){
            var usernameInput = document.getElementById("username_input");
            var useremailInput = document.getElementById("useremail_input");
            var passwordInput = document.getElementById("password_input");
            usernameInput.style.border = "2px solid #ff287a";
            usernameInput.style.background = "#ff287a1c";
            // 
            useremailInput.style.border = "2px solid #ff287a";
            useremailInput.style.background = "#ff287a1c";
            // 
            passwordInput.style.border = "2px solid #ff287a";
            passwordInput.style.background = "#ff287a1c";
            console.log("error form show applied!")
        }
        ,
        errorFormRemove(){
            // Declaring the variables
            var usernameInput = document.getElementById("username_input");
            var useremailInput = document.getElementById("useremail_input");
            var passwordInput = document.getElementById("password_input");
            var buttonSubmit = document.getElementById("btn-submit");
            // --
            usernameInput.style.border = "2px solid #F2F2F2";
            usernameInput.style.background = "#F2F2F2";
            // --
            useremailInput.style.border = "2px solid #F2F2F2";
            useremailInput.style.background = "#F2F2F2";
            // --
            passwordInput.style.border = "2px solid #F2F2F2";
            passwordInput.style.background = "#F2F2F2";
            // --
            buttonSubmit.style.background = "#909090";
            buttonSubmit.style.opacity = "1";
            this.btn_value = "Continue";
            console.log("error form remove applied!")
        }
        ,
        showHiddePassword(){
            this.showPassword = !this.showPassword
        }
        ,
        submitForm(e){
            e.preventDefault()
            var that = this
            var xhr = new XMLHttpRequest;
            var usernameInput = this.username
            var useremailnput = this.useremail
            var passwordInput= this.password
            // Disable The Button When Submitting
            document.getElementById("btn-submit").style.opacity = 0.7;
            this.btn_disabled = true;
            xhr.onreadystatechange = function(){
                var request_state = xhr.readyState;
                if (request_state == 4){
                    let request_response = xhr.response;
                    console.log(request_response)
                    if (request_response == "user created successfully"){
                        // Drive The User To Home Page
                        setTimeout(() => {
                            that.redirectUser(" ")
                        }, 2000);
                    }
                    else {
                        // Reload The Login Page For The User
                        that.errorFormShow()
                        setTimeout(function(){
                            that.cleanForm();
                            that.errorFormRemove();
                        },2000)
                    }
                }
            }
            xhr.open("POST","/register/")
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(`username=${usernameInput}&useremail=${useremailnput}&password=${passwordInput}&csrfmiddlewaretoken=${this.csrfval}`)
        }
        // ---------------------------------
    },
    computed : {
        displayOutSide(){
            var that = this;
            var width_page = that.getWidth();
            if (width_page > 1100){
                console.log("display inside the register card component")
                return false;
            }
            else {
                console.log("display outside the register card component")
                return true;
            }
        }
    },
})