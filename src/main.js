import Vue from "vue";
import App from "./main.vue";

import VueOnsen from 'vue-onsenui/esm';
import VOnsPage from 'vue-onsenui/esm/components/VOnsPage';
import VOnsToolbar from 'vue-onsenui/esm/components/VOnsToolbar';
import VOnsButton from 'vue-onsenui/esm/components/VOnsButton';
import VOnsPopover from 'vue-onsenui/esm/components/VOnsPopover';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import FastClick from 'fastclick'

FastClick.attach(document.body);
Vue.use(VueOnsen);
Vue.component(VOnsPage.name, VOnsPage);
Vue.component(VOnsToolbar.name, VOnsToolbar);
Vue.component(VOnsButton.name, VOnsButton);
Vue.component(VOnsPopover.name, VOnsPopover);

Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App)
});
