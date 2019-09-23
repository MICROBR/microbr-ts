<template>
  <div class="signup">
    <div
      class="container mx-auto shadow-full rounded mt-32 text-center border py-12"
    >
      <h1 class="text-tblue font-bold text-2xl my-8">Influencer Sign Up</h1>
      <form class="flex flex-col mx-auto w-92 font-thin text-sm">
        <input
          type="text"
          label="Name"
          placeholder="Name"
          v-model="name"
          class="bg-formgray rounded-sm h-10 w-full my-2 pl-3 placeholder-tblue"
        />
        <input
          type="text"
          label="Email"
          placeholder="Email"
          v-model="email"
          class="bg-formgray rounded-sm h-10 w-full my-2 pl-3 placeholder-tblue"
        />
        <input
          type="text"
          label="Address"
          placeholder="Address"
          v-model="address"
          class="bg-formgray rounded-sm h-10 w-full my-2 pl-3 placeholder-tblue"
        />
        <input
          type="text"
          label="Phone"
          placeholder="Phone Number"
          v-model="phone"
          class="bg-formgray rounded-sm h-10 w-full my-2 pl-3 placeholder-tblue"
        />
        <div
          class="border my-3 flex py-2 px-4 items-center justify-between cursor-pointer"
          @click="connectInstagram"
        >
          <div class="flex items-center">
            <img
              class="mr-4"
              src="@/assets/instagram.svg"
              alt="instagram logo"
            />
            <span class="text-xs text-tblue font-light">
              Connect{{ userId ? 'ed' : '' }} with Instagram
            </span>
          </div>
          <img
            v-show="userId"
            class="h-5"
            src="@/assets/greenCheck.svg"
            alt="instagram verification checkmark"
          />
        </div>
        <button
          type="button"
          class="mt-4 mb-6 bg-torange h-12 rounded sign-button"
          @click="signupUser"
        >
          <span class="text-white uppercase font-bold">Sign Up</span>
        </button>
        <span class="text-xs mx-3 text-gray-500"
          >By signing up you agree to our
          <a href="#" class="underline">terms of service </a> and
          <a href="#" class="underline">privacy policy.</a>
        </span>
      </form>
    </div>
    <modal
      name="signup-otp-modal"
      :classes="['v--modal', 'signup-otp-modal']"
      :width="400"
      :height="300"
    >
      <div class="signup-otp-modal-content text-center px-10 py-10">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { storeInLocalStorage, getFromLocaleStorage } from '@/api/storage'

@Component
export default class Signup extends Vue {
  @Prop({ required: false }) userId!: any
  name: string = ''
  email: string = ''
  address: string = ''
  phone: string = ''
  otp: string = ''
  mounted() {
    // @ts-ignore
    const {
      user: { name, address, email, phone }
    } = getFromLocaleStorage()
    this.name = name || ''
    this.email = email || ''
    this.address = address || ''
    this.phone = phone || ''
  }
  connectInstagram() {
    storeInLocalStorage({
      user: {
        name: this.name,
        email: this.email,
        address: this.address,
        phone: this.phone
      }
    })
    // @ts-ignore
    this.instagram().connect('oauth/authorize/')
  }
  async signupUser() {
    try {
      // @ts-ignore
      await this.api('users').create({
        name: this.name,
        email: this.email,
        address: this.address,
        phone: this.phone,
        user_identifier: this.userId
      })
      this.$modal.show('signup-otp-modal')
      // @ts-ignore
      await this.api(`api/getotp?phone=${this.phone}`).create()
    } catch (e) {
      console.log(e)
    }
  }
  async confirmOtp() {
    try {
      const {
        data: { user, token }
        // @ts-ignore
      } = await this.api(
        `api/checkotp?phone=${this.phone}&otp=${this.otp}`
      ).create()
      console.log(user, token)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
.sign-button {
  filter: drop-shadow(0px 8px 16px rgba(255, 216, 204, 1));
}

.signup-otp-modal {
  transition: box-shadow 1s;
}

.green-shadow {
  filter: drop-shadow(0px 8px 16px rgba(190, 255, 210, 1));
}
</style>
