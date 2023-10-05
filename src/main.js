import { createApp } from 'vue';

import App from './App.vue';

// BaseBadge component will remain here because we want to use it globally at multiple components in our project
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard)

app.mount('#app');