<script lang="ts" setup>
  defineProps({
    canResetPassword: Boolean,
    status: String,
  })

  const form = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const submit = () => {
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    })
  }

  onMounted(() => {
    // bg-gray-200
    document.documentElement.classList.add('bg-white')
  })

  onBeforeUnmount(() => {
    document.documentElement.classList.remove('bg-white')
  })
</script>

<template>
  <div class="flex min-h-full">
    <InertiaHead title="Log in" />

    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <div class="flex items-center">
            <AppLogo class="h-12 w-auto text-indigo-600" color1="#fff" color2="#fff" />
            <span class="ml-1 text-4xl font-medium text-indigo-900">Promp.ly</span>
          </div>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          <!--p class="mt-2 text-sm text-gray-600">
            Or
            {{ ' ' }}
            <AppLink :href="route('register')" class="font-medium text-indigo-600 hover:text-indigo-500">create a new one</AppLink>
          </p-->
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6" @submit.prevent="submit">
              <InputText type="email" title="Email address" :error="form.errors.email" v-model="form.email" required autocomplete="email" />

              <InputText
                class="space-y-1"
                type="password"
                title="Password"
                :error="form.errors.password"
                v-model="form.password"
                required
                autocomplete="password" />

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    v-model="form.remember"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>

                <div class="text-sm">
                  <AppLink :href="route('password.request')" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</AppLink>
                </div>
              </div>

              <div>
                <Button :disabled="form.processing" type="submit" class="w-full justify-center">Sign in</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover" src="/banner.jpg" alt="" />
    </div>
  </div>
</template>
