var csrfVal = document.querySelector("input[name=csrfmiddlewaretoken]").value

const app = Vue.createApp({
  data() {
    return {
      csrfValue : csrfVal,
      showloader : true,
    }
  },
  methods: {
      // Methods Here
      closeLoaderAnimation(){
        this.showloader = false;
      }
  },
  mounted(){
    // Methods Goes Here
  }
})