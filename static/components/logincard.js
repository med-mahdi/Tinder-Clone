
app.component('login-card',{
    template:
    /* html */
    `
    <div class="login-card">
                    <svg id="cancelIcon" @click="closeLoginCard" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
                    <div class="container">
                        <div class="heading-card">
                            <img id="logo-tinder" src="/static/media/icons/tinder-icon.png">
                            <h1>Welcome Back</h1>
                            <p>Enter your username and password to login</p>
                        </div>
            
                        <form action="">
                            <label for="">User name
                                <div class="input-box" id="username_input">
                                    <input type="text" v-model="username" required placeholder="Enter your username" maxlength="20">
                                </div>
                            </label>
            
                            <label for="">Password
                                <div class="input-box" id="password_input">
                                    <span v-if="!showPassword">
                                        <input type="password" @keyup="disableBtn" v-model="password" required placeholder="Enter your password">
                                        <i style="font-size:20px;color: #333333;" @click="showHiddePassword" class="fa-regular fa-eye"></i>
                                    </span>
            
                                    <span v-if="showPassword">
                                        <input type="text" @keyup="disableBtn" v-model="password" required placeholder="Enter your password">
                                        <i style="font-size:20px;color: #333333;" class="fa-regular fa-eye-slash" @click="showHiddePassword"></i>
                                    </span>
            
                                </div>
                            </label>

                            <input type="submit" :disabled="btn_disabled" @click="submitForm" :value="btn_value" id="btn-submit" :class="{ btn_disabled: !btn_disabled }">
                            <p class="registerNotify">Don't have an account yet? <span id="register-link"><a href="/register">Register Now</a></span></p>
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
            password : "",
            // csrfValue : this.csrfval,
            btn_disabled : true ,
            btn_value : "Connect Now",
            message : "",
        }
    },
    methods : {
        disableBtn(){
            var buttonSubmit = document.getElementById("btn-submit");
            var password_length = this.password.length
            if (password_length >= 8){
                this.btn_disabled = false
                this.btn_value = "Start Swiping Right";
                buttonSubmit.style.background = "linear-gradient(45deg,#ff287a,#ff6036)";
            }
            else{
                this.btn_disabled = true
                this.btn_value = "Connect Now"
                buttonSubmit.style.background = "#909090";
            }
        }
        ,
        showHiddePassword(){
            this.showPassword = !this.showPassword
        },
        redirectUser(pageName){
            return window.location.href = `/${pageName}`;
        },
        cleanForm(){
            this.username = "";
            this.password = "";
            console.log("clean form applied!")
        }
        ,
        errorFormShow(){
            var usernameInput = document.getElementById("username_input");
            var passwordInput = document.getElementById("password_input");
            usernameInput.style.border = "2px solid #ff287a";
            usernameInput.style.background = "#ff287a1c";
            passwordInput.style.border = "2px solid #ff287a";
            passwordInput.style.background = "#ff287a1c";
            console.log("error form show applied!")
        }
        ,
        errorFormRemove(){
            var buttonSubmit = document.getElementById("btn-submit");
            var usernameInput = document.getElementById("username_input");
            var passwordInput = document.getElementById("password_input");
            usernameInput.style.border = "2px solid #F2F2F2";
            usernameInput.style.background = "#F2F2F2";
            passwordInput.style.border = "2px solid #F2F2F2";
            passwordInput.style.background = "#F2F2F2";
            buttonSubmit.style.background = "#909090";
            buttonSubmit.style.opacity = "1";
            this.btn_value = "Connect Now";
            console.log("error form remove applied!")
        }
        ,
        closeLoginCard(){
            this.$emit("open-login-card")
        }
        ,
        submitForm(e){
            e.preventDefault()
            var that = this
            var xhr = new XMLHttpRequest;
            var usernameInput = this.username
            var passwordInput= this.password
            // Disable The Button When Submitting
            document.getElementById("btn-submit").style.opacity = 0.7;

            this.btn_disabled = true;
            xhr.onreadystatechange = function(){
                var request_state = xhr.readyState;
                if (request_state == 4){
                    let request_response = xhr.response;
                    console.log(request_response)
                    if (request_response == "Connect Successfully"){
                        // Drive The User To Home Page
                        setTimeout(() => {
                            that.redirectUser("app/recs")
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
            xhr.open("POST","")
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(`username=${usernameInput}&password=${passwordInput}&csrfmiddlewaretoken=${this.csrfval}`)
        }
    },
    mounted(){
        // Methods Goes Here
    }
})