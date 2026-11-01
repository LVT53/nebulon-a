import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import PathsView from '../views/PathsView.vue'
import PathView from '../views/PathView.vue'
import AdminListView from '../views/AdminListView.vue'
import AdminFormView from '../views/AdminFormView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/category/:slug', name: 'category', component: CategoryView },
  { path: '/search', name: 'search', component: SearchView },
  { path: '/article/:slug', name: 'article', component: ArticleView },
  { path: '/paths', name: 'paths', component: PathsView },
  { path: '/paths/:slug', name: 'path', component: PathView },
  { path: '/admin', name: 'admin', component: AdminListView },
  { path: '/admin/article/:id', name: 'admin-article', component: AdminFormView },
  // Catch-all last: anything that matched nothing lands here.
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
