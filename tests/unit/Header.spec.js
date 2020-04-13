import Header from '@/components/Header.vue';
import { mount } from '@vue/test-utils';
// import getRenderedText from '../../../tests/utils/getRenderedText.js';

describe('Header.vue', () => {
  it('should exist', () => {
    const wrapper = mount(Header);
    expect(wrapper.exists()).toBe(true);
  });
});
