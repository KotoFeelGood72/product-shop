<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" @change="handleChange">
      <span class="switcher" :class="{ 'checked': isChecked }"></span>
      <input type="text" :value="inputValue" @input="inputValue = $event.target.value" v-if="isChecked">
    </label>
  </div>
</template>

<style>
.switcher {
  display: inline-block;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: #ddd;
  position: relative;
  cursor: pointer;
}

.switcher.checked:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #007bff;
  top: 2px;
  left: 2px;
  transition: left 0.2s ease-in-out;
}

.switcher.checked:after {
  content: "ON";
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #007bff;
  top: 3px;
  right: 5px;
}

.switcher:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  top: 2px;
  left: 28px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  transition: left 0.2s ease-in-out;
}

.switcher:after {
  content: "OFF";
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #666;
  top: 3px;
  left: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      isChecked: false,
      inputValue: ""
    };
  },
  methods: {
    handleChange() {
      if (!this.isChecked) {
        // Если состояние переключателя изменилось на unchecked, сбросьте значение ввода
        this.inputValue = "";
      }
      this.$emit("input", this.inputValue);
    }
  }
};
</script>
