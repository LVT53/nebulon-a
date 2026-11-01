import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/article/:slug', component: ArticleView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})