import { reactive } from 'vue'
import { articles } from '@/data'

export const store = reactive({
    items: articles.map((article) => ({ ...article })),
    remove(id) {
        this.items = this.items.filter((article) => article.id !== id)
    },
    create(payload) {
        const base = payload.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')

        let slug = base
        let n = 2
        while (this.items.some((article) => article.slug === slug)) {
            slug = `${base}-${n}`
            n += 1
        }

        this.items.unshift({ ...payload, id: slug, slug, pathId: null, step: null })
    },
    update(id, payload) {
        const article = this.items.find((entry) => entry.id === id)
        if (!article) return false
        Object.assign(article, payload)
        return true
    },
})