import Footer from '@/components/Footer.vue';
import { mount } from '@vue/test-utils';
// import getRenderedText from '../../../tests/utils/getRenderedText.js';

describe('Footer.vue', () => {
  it('should exist', () => {
    const wrapper = mount(Footer);
    expect(wrapper.exists()).toBe(true);
  });
});
