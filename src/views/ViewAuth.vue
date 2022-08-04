<template>
  <teleport to="body">
    <AppModal title="Qo`shish" v-if="modal" @close="modal=false">

    </AppModal>
  </teleport>

  <form class="card" @submit.prevent="onSubmit">
    <h1>Tizimga kirish</h1>
    <div :class="['form-control',{invalid:eError}]">
      <label for="email" class="label">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control',{invalid:pError}]">
      <label for="password" class="label">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button class="btn primary" :disabled="isSubmitting || urinishSoni">Kirish</button>
    <button class="btn warning" @click.prevent="modal = true">Google orqali kirish</button>
    <div class="text-danger" v-if="urinishSoni">Tizimga kirish urinishlar soni ko'p</div>
  </form>
</template>

<script>
import AppModal from "@/components/ui/AppModal";
import {useLoginForm} from "@/use/login-form";
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {error} from "@/utils/error";
import {ref} from 'vue'

export default {
  setup(){
    const modal = ref(false)
    const store = useStore()
    const route = useRoute()

    if(route.query.message=='auth'){
      store.dispatch('setMessage',{
        type:'warning',
        value:error(route.query.message)
      })
    }
    return{
      ...useLoginForm(),
      modal,
    }
  },
  components:{
    AppModal
  }
}
</script>
