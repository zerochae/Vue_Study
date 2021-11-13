<template>
  <div class="userInput">
    <span>{{rootText}}</span> <span class="userIn">
      <input :type="inputType" @keyup.enter="enterInput" v-model="inputText" id="loginInput">
    </span>
  </div>
</template>

<script>
export default {
  name: "console",
  data() {
    return {
      inputText: ""
    }
  },
  mounted(){
    document.getElementById('loginInput').focus()
  },
  props: {
    rootText : String,
    inputType : String,
  },
  methods: {
    enterInput() {
      this.$emit('enterInput', this.inputText)
      this.inputText = ""
    }
  }
}
</script>

<style>
</style>