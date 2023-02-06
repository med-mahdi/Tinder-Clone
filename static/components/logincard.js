
app.component('login-card',{
    template:
    /* html */
    `
    

    <div class="login-card">
                    <div class="container">
                        <div class="heading-card">
                            <img id="logo-tinder" src="/static/media/icons/tinder-icon.png">
                            <h1>Welcome Back</h1>
                            <p>Enter your username and password to login</p>
                        </div>
            
                        <form action="" method="post">
                            <label for="">User name
                                <div class="input-box">
                                    <input type="text" v-model="username" required placeholder="Enter your username" maxlength="20">
                                </div>
                            </label>
            
                            <label for="">Password
                                <div class="input-box" >
                                    <span v-if="!showPassword">
                                        <input type="password" @keyup="disableBtn" v-model="password" required placeholder="Enter your password">
                                        <i style="font-size:20px;color: #333333;" @click="showHiddePassword" class="fa-regular fa-eye"></i>
                                    </span>
            
                                    <span v-if="showPassword">
                                        <input type="text"  @keyup="disableBtn" v-model="password" required placeholder="Enter your password">
                                        <i style="font-size:20px;color: #333333;" class="fa-regular fa-eye-slash" @click="showHiddePassword"></i>
                                    </span>
            
                                </div>
                            </label>

                            <input type="submit" :disabled="btn_disabled" :value="btn_value" id="btn-submit" :class="{ btn_disabled: !btn_disabled }">
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
            var password_length = this.password.length
            if (password_length >= 8){
                this.btn_disabled = false
                this.btn_value = "Start Swiping Right"
            }
            else{
                this.btn_disabled = true
                this.btn_value = "Connect Now"
            }
        }
        ,
        showHiddePassword(){
            this.showPassword = !this.showPassword
        },
        redirectUser(pageName){
            return window.location.href = `/${pageName}`;
        },
        submitForm(e){
            e.preventDefault()
            var that = this
            var xhr = new XMLHttpRequest;
            var usernameInput = this.username
            var passwordInput= this.password
            var csrfValue = this.csrfValue;

            // Disable The Button When Submitting
            this.btn_disabled = true
            document.getElementById("btn-submit").style.backgroundColor = "#8079cf"

            xhr.onreadystatechange = function(){
                var request_state = xhr.readyState;

                if (request_state === 4){
                    var state = xhr.status
                    if (state === 200){
                        var response = xhr.response;
                        console.log(response)

                        if (response == "Authenticated Succefully"){
                            // Drive The User To Home Page
                            setTimeout(() => {
                                that.redirectUser("home")
                            }, 2000);
                        }
                        else{
                            // Reload The Login Page For The User
                            setTimeout(() => {
                                window.location.reload()
                            }, 2000);
                        }
                    }
                }
            }

            xhr.open("POST","")
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(`username=${usernameInput}&password=${passwordInput}&csrfmiddlewaretoken=${csrfValue}`)
        }
    },
    mounted(){
        console.log(this.csrfval);
    }
})