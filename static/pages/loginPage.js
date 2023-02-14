var csrfVal = document.querySelector("input[name=csrfmiddlewaretoken]").value

const app = Vue.createApp({
  data() {
    return {
      csrfValue : csrfVal,
      showloader : true,
      modelLoginCard : false,
      modelregisterCard : false,
    }
  },
  methods: {
      // Methods Here
      closeLoaderAnimation(){
        this.showloader = false;
      },
      closeLoginModel(){
        this.modelLoginCard = !this.modelLoginCard;
        if (this.modelLoginCard == true){
          document.body.style.overflowY = "hidden";
        }
        else {
          document.body.style.overflowY = "auto";
        }
      },
      closeRegisterModel(){
        this.modelregisterCard = !this.modelregisterCard;
        if (this.modelregisterCard == true){
          document.body.style.overflowY = "hidden";
        }
        else {
          document.body.style.overflowY = "auto";
        }
      }
  },
  mounted(){
    // Methods Goes Here
  }
})