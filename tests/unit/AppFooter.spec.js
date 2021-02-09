import {
    shallowMount
} from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue';

test('title', async () => {
    const wrapper = shallowMount(AppFooter)

    wrapper.setData({ dev: 'front-end dev' });

    expect(wrapper.vm.dev).toBe('front-end dev');
})
