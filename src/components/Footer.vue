<template>
  <footer class="f-footer">
    <section class="f-footer__links">
      <a
        v-for="(single, index) in links"
        v-bind:key="index"
        v-bind:href="single.link"
        class="f-footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon v-bind:id="single.icon" :width="12" :height="12" />
        <abbr v-if="single.abbr" v-bind:title="single.abbr">{{
          single.label
        }}</abbr>
        {{ !single.abbr ? single.label : '' }}
      </a>
    </section>
  </footer>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Footer',
  components: {
    Icon,
  },
  computed: {
    links() {
      return [
        {
          link: '/#test',
          icon: 'cpg',
          label: 'Test link',
          abbr: 'test-link',
        },
        {
          link: '/#test2',
          icon: 'faq',
          label: 'Test link 2',
          abbr: 'test-link-2',
        },
        {
          link: '/#test3',
          icon: 'github',
          label: 'Test link 3',
          abbr: 'test-link-3',
        },
      ];
    },
  },
};
</script>

<style>
.f-footer {
  margin-top: 2em;
}
.f-footer__links {
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  padding: 2em 0;
}
.f-footer__link {
  color: var(--gray-40);
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  padding: 0.9em 1.5em;
  margin: 1em 0.5em;
  border-radius: 2em;
  line-height: 1;
}
.f-footer__link:hover {
  color: inherit;
}
.focus-styles .f-footer__link:focus {
  box-shadow: 0px 0 0 1px var(--white), 0 0 0 3px var(--transparentWhite);
}
.f-footer__link svg {
  margin-right: 0.75em;
  display: inline-block;
  vertical-align: middle;
  background: var(--gray-40);
  border-radius: 100%;
  color: var(--black);
  padding: 0.25em;
  box-sizing: content-box;
}
.f-footer__link:hover svg {
  background-color: var(--white);
}
</style>
