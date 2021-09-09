/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import Hello from 'components/Hello'

Hello.template = `
<div>
  <input ref="name" type="text">
  <button @click="greet()">Greet</button>
  <span ref="output"></span>
</div>
`

test('custom greeting', () => {
  const wrapper = mount(Hello)
  const name = wrapper.find('input')
  const greet = wrapper.find('button')
  const output = wrapper.find('span')

  name.setValue('Joseph')
  greet.trigger('click')

  expect(output.text()).toBe("Hello, Joseph!")
})
