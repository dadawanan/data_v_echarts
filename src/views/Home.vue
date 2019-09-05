<template>
  <div style="height:100%">
    <top></top>
      <router-view>
      </router-view>
    <dialogs></dialogs>
  </div>
</template>
<script>
import top from '@/components/layout/top'
import dialogs from '@/components/dialog'
export default {
  name: 'home',
  components: {
    top,
    dialogs
  }
}
</script>
