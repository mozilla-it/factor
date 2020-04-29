import SearchBar from '@/components/SearchBar.vue';
import Icon from '@/components/Icon.vue';
import { mount } from '@vue/test-utils';
// import getRenderedText from '../../../tests/utils/getRenderedText.js';

describe('SearchBar.vue', () => {
  it('should exist', () => {
    const wrapper = mount(SearchBar, {
      components: {
        Icon,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
