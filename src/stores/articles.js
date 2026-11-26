import { reactive } from 'vue'
import { articles } from '@/data'

export const store = reactive({
    // Copy the seed so admin edits never mutate the imported data.
    items: articles.map((article) => ({ ...article })),
    // Replaces the array — views read it through a computed reference.
    remove(id) {
        this.items = this.items.filter((article) => article.id !== id)
    },
    create(payload) {
        const base = payload.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')

        // Suffix -2, -3… A repeated title doesn't collide with an existing slug.
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