import Icon from '@/components/Icon.vue';
import { mount } from '@vue/test-utils';
// import getRenderedText from '../../../tests/utils/getRenderedText.js';

describe('Icon.vue', () => {
  it('should exist', () => {
    const wrapper = mount(Icon);
    expect(wrapper.exists()).toBe(true);
  });
});
