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
