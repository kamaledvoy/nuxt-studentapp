<template>
  <div class="space-y-10">
    <div>
      <h3
        class="text-base font-medium underline decoration-green-400 decoration-wavy underline-offset-4 mb-4"
      >
        Create Account (form input reusable Component)
      </h3>
      <div class="max-w-screen-sm mx-auto">
        <form
          class="px-6 py-4 border border-white/10 bg-black/5 rounded-lg"
          autocomplete="off"
        >
          <BaseInput v-model:modelValue="event.name" label="Name" type="text" />
          <BaseInput
            v-model:modelValue="event.email"
            label="Email"
            type="text"
          />
          <BaseTextarea v-model:modelValue="event.address" label="Address" />
          <BaseSelect
            v-model:modelValue="event.course"
            label="Course Select"
            :options="allCategory"
          />

          <div class="text-base font-medium mb-2">Mode of Study</div>
          <BaseRadioGroup
            v-model="event.mode"
            name="mode"
            :options="modeOptions"
            :vertical="false"
          />

          <!-- <div class="text-base font-medium mb-2">Radio button Basic Way to use</div>
          <div class="inline-flex flex-row gap-4">
            <BaseRadio
              v-model:modelValue="event.mode"
              :value="1"
              name="mode"
              label="Online"
            />
            <BaseRadio
              v-model:modelValue="event.mode"
              :value="0"
              name="mode"
              label="Offline"
            />
          </div> -->

          <div class="text-base font-medium mb-2">Dialy Activity</div>
          <div class="inline-flex flex-row gap-4">
            <BaseCheckbox
              v-model:modelValue="event.extras.subscribe"
              label="subscribe"
            />
            <BaseCheckbox
              v-model:modelValue="event.extras.notification"
              label="Notification"
            />
          </div>

          <div class="mt-4">
            <UIButton
              :loading="isLoading"
              :disabled="isDisabled"
              @click="handleSubmit"
            >
              Submit
            </UIButton>
          </div>
        </form>
      </div>
    </div>

    <div>
      <h3
        class="text-base font-medium underline decoration-green-400 decoration-wavy underline-offset-4 mb-4"
      >
        Form input Modal 2
      </h3>
      <div class="max-w-screen-sm mx-auto">
        <form
          class="px-6 py-4 border border-white/10 bg-black/5 rounded-lg"
          autocomplete="off"
        >
          <UIInput
            id="userName"
            v-model="userName"
            type="text"
            label-text="User Name"
            placeholder="User Name"
          />
          <UIInput
            id="email"
            v-model="email"
            type="email"
            label-text="Email"
            placeholder="your@example.com"
            :icon="BellIcon"
            icontype="endIcon"
          />
          <UIInput
            id="password"
            v-model="password"
            type="password"
            label-text="Password"
            placeholder="password *****"
            :icon="BellIcon"
            icontype="startIcon"
            :required="true"
          />
          <UIInput
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="confirm password"
            class="mt-4"
          />
          <UIButton
            :loading="isLoading"
            :disabled="isDisabled"
            @click="handleSubmit"
          >
            Submit
          </UIButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/24/solid';
import { BellIcon } from '@heroicons/vue/24/outline';

const event = ref({
  name: '',
  email: '',
  address: '',
  mode: 1,
  course: '',
  extras: {
    notification: false,
    subscribe: true,
  },
});

const modeOptions = [
  {
    label: 'Online',
    value: 1,
  },
  {
    label: 'Offline',
    value: 0,
  },
];
const allCategory = ['React', 'Vue', 'Angular'];

// form modal2
const email = ref('');
const password = ref('');
const userName = ref('');
const confirmPassword = ref('');

const isLoading = ref(false);
const isDisabled = ref(false);

const handleSubmit = (e: Event) => {
  if (e) {
    e.preventDefault();
    isLoading.value = true;
    console.log(
      email.value,
      password.value,
      userName.value,
      confirmPassword.value
    );
    setTimeout(() => {
      isLoading.value = false;
      isDisabled.value = true;
    }, 3000);
    email.value = password.value = userName.value = confirmPassword.value = '';
    e.stopPropagation();
  }
};
</script>

<style scoped></style>
