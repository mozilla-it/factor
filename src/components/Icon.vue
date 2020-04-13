<template>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    :width="width"
    :height="height"
    class="icon"
    @click="handleIconClicked"
  >
    <template v-if="id === 'self-avatar'">
      <image
        v-if="avatarUrl"
        :href="avatarUrl"
        x="0"
        y="0"
        width="24"
        height="24"
      />
    </template>
    <template v-else>
      <use
        :href="
          '#' +
            require(`!svg-sprite-loader?extract=false!image-webpack-loader?${`{
              svgo: {
                plugins: [
                  { removeXMLNS: true },
                  {
                    removeAttributesBySelector: {
                      selector: 'svg[class]',
                      attributes: 'class'
                    }
                  },
                ]
              }
            }`.replace(/\n/g, '')}!@/assets/svg/${id}.svg`).default.id
        "
      />
    </template>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    width: Number,
    height: Number,
    id: String,
  },
  methods: {
    handleIconClicked(e) {
      this.$emit('click', e);
    },
  },
  data() {
    return {
      avatarUrl: null,
    };
  },
};
</script>

<style>
.icon {
  fill: currentColor;
}
</style>
