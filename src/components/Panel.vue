<template>
  <article :class="{ panel: true, 'full-on-mobile': fullOnMobile }">
    <slot name="meta"></slot>
    <header class="panel__header" v-if="!hideContent">
      <h2>{{ title }}</h2>
      <slot name="header"></slot>
    </header>
    <div
      v-if="!hideContent"
      :class="{ panel__content: true, full: fullContent }"
    >
      <slot name="content"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    fullContent: {
      type: Boolean,
      default: false,
    },
    fullOnMobile: {
      type: Boolean,
      default: false,
    },
    title: String,
    hideContent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.panel {
  border: 4px solid var(--gray-50);
  background: var(--white);
  margin: 0 0 2em;
  grid-column: 2 / -1;
  overflow: visible;
  border-radius: var(--cardRadius);
  position: relative;
}

.panel.first {
  padding: 0;
}

.panel.first .panel__header {
  margin: 0 0 1.5em 0;
}
@supports (--key: value) {
  .panel {
    border: none;
    box-shadow: var(--shadowCard);
  }
}
.panel:first-child {
  grid-column: 1 / -1;
}

.panel .reporting-structure h3 {
  margin-top: 0;
}

.panel__header {
  padding: 1.5em;
  border-bottom: 1px solid var(--gray-30);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.panel__content:not(.full) {
  padding: 1.5em;
}

.panelfull-on-mobile .panel__content {
  padding: 0;
}
@media (min-width: 35em) {
  .panel.full-on-mobile .panel__content:not(.full) {
    padding: 1.5em;
  }
}

.panel__header h2 {
  margin: 0;
  width: 100%;
}
@media (min-width: 35em) {
  .panel__header h2 {
    margin: 0;
    width: auto;
  }
}
</style>
