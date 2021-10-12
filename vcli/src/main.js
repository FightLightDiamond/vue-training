import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/**
 * Register router
 */
import router from './router'

/**
 * If you import to global. You don't need import to component
 *
 */
import { ValidationProvider } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false
import Notifications from 'vue-notification'
Vue.use(Notifications)

import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
//
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

/**
 * Import full
 */
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {extend, ValidationObserver} from 'vee-validate';
// import {ValidationObserver} from "vue-validate"
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

//*
// Create new rules validate
// */
extend('notsame', {
  params: ['target'],
  validate(value, { target }) {
    console.log('validate value', value)
    console.log('validate target', target)
    return value !== target;
  },
  message: "New password not same old password"
});

/**
 * Vuex
 */
import store from "@/store";

/**
 * CASL permission
 */
import { Can, abilitiesPlugin } from '@casl/vue';
import {defineAbility} from "@casl/ability";
const ability = defineAbility((can) => {
  can('read', 'all')
})

Vue.use(abilitiesPlugin, ability)
Vue.component("Can", Can)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
