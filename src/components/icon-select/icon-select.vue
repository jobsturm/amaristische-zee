<template>
<div class="icon-select">
  <button
    v-for="iconName in iconNames"
    class="icon-select-button"
    :class="{ 'icon-select-button--active': iconName === activeIconName }"
    @click="() => onIconClicked(iconName)"
  >
    <Icon :icon-name="iconName"/>
    {{ iconName }}
  </button>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { icons, IconKeys } from '../../utils/svg-loader/icons-generated';
import Icon from './Icon.vue';

defineProps<{
  activeIconName: IconKeys;
}>();

const iconNames = computed<IconKeys[]>(() => {
  return Object.keys(icons) as IconKeys[];
});

const emit = defineEmits<{
  (event: 'iconClicked', iconName: IconKeys): void
}>()

function onIconClicked(iconName: IconKeys) {
  emit('iconClicked', iconName)
}
</script>

<style lang="css" scoped>
.icon-select {
  position: fixed;
  left: 10px;
  top: 10px;
  width: 100px;
}
.icon-select-button {
  display: flex;
}
.icon-select-button--active {
  background-color: aqua;
}
</style>