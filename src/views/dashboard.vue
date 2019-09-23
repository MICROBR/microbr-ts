<template>
  <div class="dashboard">
    <header
      class="navbar container mx-auto flex justify-between mt-10 items-center "
    >
      <div>
        <img class="h-6" src="@/assets/logo.svg" alt="MicroBrand Logo" />
      </div>
      <div
        class="font-light text-sm flex items-center font-semibold text-tblack"
      >
        <a class="mx-2 lg:mx-3 xl:mx-5" href="#">Settings</a>
        <svg class="h-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3">
          <circle
            id="Ellipse_4"
            data-name="Ellipse 4"
            cx="1.5"
            cy="1.5"
            r="1.5"
            fill="#dfdfdf"
          />
        </svg>
        <a class="mx-2 lg:mx-3 xl:mx-5" href="#">{{ user.name }}</a>
        <img
          class="h-12 rounded profile-picture"
          :src="userProfilePicture"
          alt="Profile picture"
        />
      </div>
    </header>
    <div class="container mx-auto flex mt-16">
      <div class="w-10/12 pr-24">
        <h2 class="text-2xl font-semibold mb-10">Brands</h2>
        <div class="w-full flex flex-wrap">
          <div class="w-76 mr-4 mb-6 relative" v-for="brand in brands">
            <div
              class="absolute inset-0 bg-black opacity-75 rounded-lg z-20"
              :class="{ hidden: user.coins > brand.coins }"
            ></div>
            <div
              class="absolute inset-0 text-center flex flex-col py-32 items-center z-30"
              :class="{ hidden: user.coins > brand.coins }"
            >
              <img class="h-32" src="@/assets/lock.svg" alt="lock" />
              <span class="font-thin text-white"
                >You need {{ brand.coins }} coins to apply.</span
              >
            </div>
            <div
              class="rounded overflow-hidden border border-gray-200 h-112"
              :class="{ blur: user.coins < brand.coins }"
            >
              <div
                class="h-32 bg-cover bg-no-repeat bg-center"
                v-bind:style="{
                  'background-image': `url(http://3.106.176.255:3000/${brand.imagePath})`
                }"
              ></div>
              <div class="px-4 pt-4 pb-3">
                <div class="font-bold text-xl mb-2">{{ brand.title }}</div>
                <h4 class="text-gray-500 font-light">{{ brand.url }}</h4>
                <p class="mt-2 text-gray-700 text-base h-24 overflow-auto">
                  {{ brand.description }}
                </p>
              </div>
              <div class="my-5 mx-auto px-6 flex justify-between items-center">
                <button
                  type="button"
                  class="uppercase px-10 py-2 bg-torange rounded text-white font-semibold"
                >
                  Apply
                </button>
                <span class="text-gray-600 text-xs font-light"
                  >{{ brand.coins }} coins required</span
                >
              </div>
            </div>
          </div>
          <div class="w-76 mr-4 mb-6 relative">
            <div
              class="absolute inset-0 bg-black opacity-75 rounded-lg z-20"
            ></div>
            <div
              class="absolute inset-0 text-center flex flex-col py-32 items-center z-30"
            >
              <img class="h-32" src="@/assets/lock.svg" alt="lock" />
              <span class="font-thin text-white"
                >You need 5000 coins to apply.</span
              >
            </div>
            <div class="rounded overflow-hidden border border-gray-200 blur">
              <img
                class="w-full"
                src="@/assets/unacademy.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Unacademy</div>
                <h4 class="text-gray-500 font-light">instamojo.com</h4>
                <p class="mt-2 text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, iuvaret perfecto similique has ei.
                  Sea lorem luptatum accusa mus eu, ad soleat meliore.
                </p>
              </div>
              <div class="my-5 mx-auto px-6 flex justify-between items-center">
                <button
                  type="button"
                  class="uppercase px-10 py-2 bg-torange rounded text-white font-semibold"
                >
                  Apply
                </button>
                <span class="text-gray-600 text-xs font-light"
                  >200 coins required</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/12 pt-20 text-center">
        <img
          class="h-48 w-48 rounded profile-picture"
          :src="userProfilePicture"
          alt="Profile picture"
        />
        <h3 class="text-lg font-semibold mt-4">{{ user.name }}</h3>
        <div class="mt-4 text-center flex mx-auto justify-center items-center">
          <img class="h-4 mr-2" src="@/assets/followers.svg" alt="followers" />
          <span class="ml-2 font-thin">{{ userFollowers }} Followers</span>
        </div>
        <button
          @click="goToUserProfile"
          class="mt-5 px-5 py-2 border rounded border-gray-200 visit-button"
        >
          View Profile
        </button>
        <div class="text-center mt-10 border rounded-lg px-8 py-10">
          <img class="h-20 mx-auto" src="@/assets/coins.svg" alt="followers" />
          <h4 class="mt-4 text-lg font-semibold">Coins</h4>
          <span>{{ user.coins }}</span>
          <p class="mt-2 text-xs font-thin text-gray-500">
            Apply to more brands to earns more coins.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions, mapState } from 'vuex'

@Component({
  computed: {
    ...mapGetters('brand', { brands: 'brands' }),
    ...mapState('user', { getUser: 'getUser' })
  },
  methods: { ...mapActions('brand', ['fetchBrands']) }
})
export default class Dashboard extends Vue {
  get user() {
    return this.getUser
  }

  get userProfilePicture() {
    return this.user.profile_picture
  }

  get userFollowers() {
    return this.user.followed_by
  }

  get userInstaUsername() {
    return this.user.instagram_username
  }

  get userInstaURL() {
    return 'https://instagram.com/' + this.userInstaUsername
  }

  goToUserProfile() {
    window.open(this.userInstaURL, '_blank')
  }

  async created() {
    console.log(this)
    this.$store.commit('retrieveUser')
    //@ts-ignore
    this.fetchBrands()
  }
}
</script>

<style lang="scss">
.profile-picture {
  filter: drop-shadow(0px 6px 3px rgba(244, 134, 101, 0.4));
}
.blur {
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
}
</style>
