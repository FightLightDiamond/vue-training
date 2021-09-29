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

// import { extend } from 'vee-validate';

/**
 * Add rule
 */
// extend('positive', value => {
//   return value >= 10;
// });
//
// extend('min', {
//   validate(value, args) {
//      if(value.length >= args.length) {
//        return true;
//      }
//     // return 'This {_field_} min length is ' +  args.length;
//     return 'The {_field_} field must have at least {length} characters'
//   },
//   params: ['length']
// });

// extend('required', {
//   validate(value) {
//     return {
//       required: true,
//       valid: ['', null, undefined].indexOf(value) === -1
//     };
//   },
//   computesRequired: true
// });

// extend('minmax', {
//   validate(value, args) {
//     const length = value.length;
//
//     return length >= args.min && length <= args.max;
//   },
//   params: ['min', 'max']
// });
//
// extend('one_of', (value, values) => {
//   console.log('values', values)
//   return values.indexOf(value) !== -1;
// });

// import { required, email } from 'vee-validate/dist/rules';
//
// // No message specified.
// extend('email', {
//   ...email,
//   message: "The {_field_} field must email address"
// });
//
// // Override the default message.
// extend('required', {
//   ...required,
//   message: 'This {_field_} field is required'
// });

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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
