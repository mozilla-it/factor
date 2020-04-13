<template>
  <div id="factor-template" class="f-template-outer">
    <Header :nav-list="['on', 'two', 'three']"></Header>
    <main class="f-main">
      <h1 class="f-main__title">Hello World</h1>
      <!-- Grid of components -->
      <Panel title="Test panel"><p>hello world</p></Panel>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Panel from '@/components/Panel.vue';

export default {
  name: 'FactorBlockTemplate',
  components: {
    Header,
    Footer,
    Panel,
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
