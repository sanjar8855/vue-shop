<template>
  <teleport to="body">
    <AppModal title="Qo`shish" v-if="modal" @close="modal=false">
    </AppModal>
  </teleport>

  <app-loader v-if="loading"></app-loader>
  <app-page title="Internet do'kon" v-else>
    Bosh sahifa
  </app-page>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import AppModal from "@/components/ui/AppModal";
import AppLoader from "@/components/ui/AppLoader";
import {ref} from 'vue'
export default {
  setup(){
    const loading = ref(false)
    const modal = ref(false)

    return {
      modal,
      loading
    }
  },
  components:{
    AppPage,
    AppModal,
    AppLoader,
  }
}
</script>
