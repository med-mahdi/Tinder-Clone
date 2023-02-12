var csrfVal = document.querySelector("input[name=csrfmiddlewaretoken]").value

const app = Vue.createApp({
  data() {
    return {
      csrfValue : csrfVal,
      showloader : true,
      modelLoginCard : false,
    }
  },
  methods: {
      // Methods Here
      closeLoaderAnimation(){
        this.showloader = false;
      },
      openLoginModel(){
        this.modelLoginCard = !this.modelLoginCard;
      }
  },
  mounted(){
    // Methods Goes Here
  }
})