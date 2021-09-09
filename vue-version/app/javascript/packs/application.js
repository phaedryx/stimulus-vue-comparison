// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import { createApp } from 'vue'
import "channels"

import Hello from '../components/Hello'
import Widget from '../components/Widget'
import Slideshow from '../components/Slideshow'
import Reveal from '../components/Reveal'

Rails.start()
Turbolinks.start()

const components = { Hello, Widget, Slideshow, Reveal }

document.addEventListener('turbolinks:load', () => {
  document.querySelectorAll('[data-component]').forEach((node) => {
    createApp(components[node.dataset.component]).mount(node)
  })
})
