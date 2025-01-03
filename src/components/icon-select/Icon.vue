<template>
  <div class="icon" ref="iconContainer"></div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { IconKeys } from '../../utils/svg-loader/icons-generated';
import { getIcon } from '../../utils/svg-loader/svg-loader';

const props = defineProps<{
  iconName: IconKeys
}>();

const svgString = ref<string>('<svg></svg>');
const svgNode = computed<HTMLElement>(() => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString.value, 'image/svg+xml')
  return doc.documentElement as HTMLElement
});

const iconContainer = ref<HTMLElement | null>(null)
watch(svgNode, (newVal) => {
  if (iconContainer.value) {
    iconContainer.value.innerHTML = ''
    iconContainer.value.appendChild(newVal)
  }
}, { immediate: true })

onMounted(async () => {
  svgString.value = await getIcon(props.iconName);
});
</script>

<style lang="css">
  .icon svg {
    max-width: 100%;
    max-height: 100%;
    height: 32px;
    width: 32px;
  }
</style>