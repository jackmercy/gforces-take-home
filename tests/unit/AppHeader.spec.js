import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue';

test('title', async () => {
    const wrapper = shallowMount(AppHeader, {
        data: () => ({
            msg: 'Technical Challenge - testing'
        })
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('AppHeader')


    // check that the title is rendered
    expect(wrapper.text()).toMatch('Technical Challenge - testing')
})
