<template>
  <FactorBlockTemplate>
    <div class="b-l" slot="main">
      <Panel
        class="test-panel-third"
        title="Test panel"
        :full-on-mobile="true"
      ></Panel>
      <Panel
        class="test-panel-third-2"
        title="Test panel"
        :full-on-mobile="true"
      ></Panel>
      <Panel
        class="test-panel-third-3"
        title="Test panel"
        :full-on-mobile="true"
      ></Panel>
      <Panel
        class="test-panel-half"
        title="Test panel"
        :full-on-mobile="true"
      ></Panel>
      <Panel
        class="test-panel-half-2"
        title="Test panel"
        :full-on-mobile="true"
      ></Panel>
      <Panel
        class="test-panel-full"
        title="Test panel"
        :full-on-mobile="true"
      ></Panel>
    </div>
  </FactorBlockTemplate>
</template>

<script>
import FactorBlockTemplate from './templates/FactorBlockTemplate.vue';
import Panel from '@/components/Panel.vue';

export default {
  name: 'App',
  components: {
    FactorBlockTemplate,
    Panel,
  },
};
</script>

<style lang="scss">
@import './shared/styles/grid-block';

:root {
  --gray-10: #f9f9fa;
  --gray-20: #ededf0;
  --gray-30: #d7d7db;
  --gray-40: #b1b1b3;
  --gray-50: #737373;
  --gray-60: #4a4a4f;
  --blue-60: #0060df;
  --green-80: #006504;
  --white: #fff;
  --black: #000;
  --light-red: #f5d8e1;
  --neon-red: #ff0039;

  --lightBlue: #f2fcfd;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
