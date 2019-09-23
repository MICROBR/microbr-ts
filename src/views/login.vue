<template>
  <div class="login lg:flex h-screen">
    <div class="w-7/12 hidden lg:block">
      <img class="h-full" src="@/assets/login-bg.png" alt="login" />
    </div>
    <div class="w-full lg:w-5/12 text-center">
      <img
        class="h-6 mx-auto mt-32 lg:mt-64"
        src="@/assets/logo.svg"
        alt="MicroBrand Logo"
      />
      <h1 class="mt-20 lg:mt-24 mb-5 font-semibold text-tblue text-3xl">
        Influencer Login
      </h1>
      <span class="text-tblue font-light">Enter you phone number</span>
      <div class="w-92 my-4 mx-auto h-12 flex items-center">
        <select
          class="form-select w-4/12 h-full phone-select"
          v-model="countryCode"
        >
          <option
            v-for="code in availableCountryCodes"
            :key="code"
            :value="code"
            >{{ code }}</option
          >
        </select>
        <input
          class="form-input w-8/12 h-full rounded-l-none"
          type="text"
          v-model="phone"
        />
      </div>
      <button
        type="button"
        class="mt-4 mb-6 bg-torange h-12 rounded w-92"
        @click="handleLogin"
      >
        <span class="text-white uppercase font-bold">Get OTP</span>
      </button>
      <div class="text-tblue mt-32 lg:mt-48">
        <p class="font-light text-sm mb-3">Don't have an account?</p>
        <router-link
          to="/signup"
          class="uppercase border-b font-semibold border-tblue"
          >sign up as an influencer</router-link
        >
      </div>
    </div>
    <modal
      name="login-otp-modal"
      :classes="['v--modal', 'login-otp-modal']"
      :width="400"
      :height="300"
    >
      <div class="login-otp-modal-content text-center px-10 py-10">
        <h3 class="text-xl font-bold text-tblue mb-5">One Time Password:</h3>
        <input
          type="text"
          label="OTP"
          class="bg-formgray rounded-sm h-10 w-5/6 my-2 pl-3 placeholder-tblue text-center mb-10"
          v-model="otp"
        />
        <button
          type="button"
          class="mb-5 bg-tgreen h-12 rounded green-shadow px-10 py-3"
          @click="confirmOtp"
        >
          <span class="text-white uppercase font-bold">Confirm</span>
        </button>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  countryCode: string = '+1'
  phone: string = ''
  otp: string = ''
  availableCountryCodes: string[] = ['+1', '+2', '+311']
  get mergedPhone() {
    return this.countryCode.slice(1) + this.phone
  }
  async handleLogin() {
    this.$modal.show('login-otp-modal')
    // @ts-ignore
    await this.api(`api/getotp?phone=${this.mergedPhone}`).create()
  }
  async confirmOtp() {
    // @ts-ignore
    await this.api(
      `api/checkotp?phone=${this.mergedPhone}&otp=${this.otp}`
    ).create()
  }
}
</script>

<style lang="scss">
.phone-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
}

.login-otp-modal {
  transition: box-shadow 1s;
}

.green-shadow {
  filter: drop-shadow(0px 8px 16px rgba(190, 255, 210, 1));
}
</style>
