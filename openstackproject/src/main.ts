import { createApp } from 'vue'
import App from './App.vue'
import router from "@/config/router/router";

const app = createApp(App);

app.use(router); // 사용 설정 하기

app.mount('#app');
