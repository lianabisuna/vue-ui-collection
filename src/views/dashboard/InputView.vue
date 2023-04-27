<script lang="ts" setup>
import { AppFormInput } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
      title="Default"
    >
      <AppFormInput
        :dark="components[0]"
        color="fuchsia-500"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
      title="Prefix"
    >
      <AppFormInput
        :dark="components[1]"
        color="fuchsia-500"
        type="number"
        class="group"
      >
        <template #prepend>
          <span
            class="group-focus-within:text-fuchsia-500"
            :class="[
              components[1] ? 'text-gray-600' : 'text-gray-400'
            ]"
          >
            &#8369;
          </span>
        </template>
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
      title="Suffix"
    >
      <AppFormInput
        :dark="components[2]"
        color="fuchsia-500"
        type="number"
        class="group"
      >
        <template #append>
          <span
            class="group-focus-within:text-fuchsia-500"
            :class="[
              components[1] ? 'text-gray-600' : 'text-gray-400'
            ]"
          >
            kg
          </span>
        </template>
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
      title="Disabled"
    >
      <AppFormInput
        :dark="components[3]"
        color="fuchsia-500"
        disabled
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
      title="Placeholder"
    >
      <AppFormInput
        :dark="components[4]"
        color="fuchsia-500"
        placeholder="Placeholder"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[5]"
      class="aspect-[4/2] lg:aspect-square"
      title="Password"
    >
      <AppFormInput
        :dark="components[5]"
        color="fuchsia-500"
        type="password"
        value="123456789"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[6]"
      class="aspect-[4/2] lg:aspect-square"
      title="Read Only"
    >
      <AppFormInput
        :dark="components[6]"
        color="fuchsia-500"
        label="Product"
        value="MT-4500"
        readonly
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[7]"
      class="aspect-[4/2] lg:aspect-square"
      title="Label"
    >
      <AppFormInput
        :dark="components[7]"
        color="fuchsia-500"
        label="Name"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[8]"
      class="aspect-[4/2] lg:aspect-square"
      title="Required"
    >
      <AppFormInput
        :dark="components[8]"
        color="fuchsia-500"
        label="Email"
        type="email"
        required
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[9]"
      class="aspect-[4/2] lg:aspect-square"
      title="Error"
    >
      <AppFormInput
        :dark="components[9]"
        color="fuchsia-500"
        label="Username"
        message="It looks like this username is already taken."
        value="Steve"
        :error="true"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[10]"
      class="aspect-[4/2] lg:aspect-square"
      title="Success"
    >
      <AppFormInput
        :dark="components[10]"
        color="fuchsia-500"
        label="Tracking ID"
        message="Tracking ID is valid!"
        value="CA123654389US"
        :success="true"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[11]"
      class="aspect-[4/2] lg:aspect-square"
      title="Helper Text"
    >
      <AppFormInput
        :dark="components[11]"
        color="fuchsia-500"
        label="Duration"
        message="How many days are you going to stay?"
        type="number"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[12]"
      class="aspect-[4/2] lg:aspect-square"
      title="Extra Small"
    >
      <AppFormInput
        :dark="components[12]"
        color="fuchsia-500"
        size="xs"
        placeholder="Enter"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[13]"
      class="aspect-[4/2] lg:aspect-square"
      title="Small"
    >
      <AppFormInput
        :dark="components[13]"
        color="fuchsia-500"
        size="sm"
        placeholder="Enter"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[14]"
      class="aspect-[4/2] lg:aspect-square"
      title="Large"
    >
      <AppFormInput
        :dark="components[14]"
        color="fuchsia-500"
        size="lg"
        placeholder="Enter"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[15]"
      class="aspect-[4/2] lg:aspect-square"
      title="Extra Large"
    >
      <AppFormInput
        :dark="components[15]"
        color="fuchsia-500"
        size="xl"
        placeholder="Enter"
      >
      </AppFormInput>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>