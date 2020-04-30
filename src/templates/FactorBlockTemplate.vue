<template>
  <div id="factor-template" class="f-template-outer">
    <Header
      :searchBarHandler="searchBarHandler"
      :searchBarLabel="searchBarLabel"
    >
      <template slot="nav">
        <slot name="nav" />
      </template>
      <template slot="profile">
        <slot name="profile" />
      </template>
    </Header>
    <main class="f-main">
      <slot name="main"></slot>
    </main>
    <Footer>
      <template slot="links">
        <slot name="footer-links" />
      </template>
    </Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'FactorBlockTemplate',
  components: {
    Header,
    Footer,
  },
  props: {
    searchBarHandler: {
      type: Function,
      default: () => {},
    },
    searchBarLabel: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
@import '../shared/styles/base';
html,
body {
  height: 100%;
}
body {
  background: var(--gray-20);
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 87.5%;
  letter-spacing: 0.04em;
}
.f-template-outer {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
