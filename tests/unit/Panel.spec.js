import Panel from '@/components/Panel.vue';
import { mount } from '@vue/test-utils';
// import getRenderedText from '../../../tests/utils/getRenderedText.js';

describe('Panel.vue', () => {
  it('should exist', () => {
    const wrapper = mount(Panel);
    expect(wrapper.exists()).toBe(true);
  });
});
