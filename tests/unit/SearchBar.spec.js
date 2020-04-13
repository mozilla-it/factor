import SearchBar from '@/components/SearchBar.vue';
import { mount } from '@vue/test-utils';
// import getRenderedText from '../../../tests/utils/getRenderedText.js';

describe('SearchBar.vue', () => {
  it('should exist', () => {
    const wrapper = mount(SearchBar);
    expect(wrapper.exists()).toBe(true);
  });
});
