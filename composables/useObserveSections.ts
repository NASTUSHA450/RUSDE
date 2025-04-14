
import { ref, onMounted, onUnmounted } from 'vue'

export function useObserveSections() {
    const isAnySectionVisible = ref(false)
    const whiteSections = ref<HTMLElement[]>([]) // массив DOM-элементов для отслеживания

    const registerSection = (el: HTMLElement | null) => {
        if (el && !whiteSections.value.includes(el)) {
            whiteSections.value.push(el)
        }
    }

    let observer: IntersectionObserver

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            const anyVisible = entries.some(entry => entry.isIntersecting)
            isAnySectionVisible.value = anyVisible
        }, { threshold: 0.5 })

        whiteSections.value.forEach(el => observer.observe(el))
    })

    onUnmounted(() => {
        whiteSections.value.forEach(el => observer.unobserve(el))
    })

    return { isAnySectionVisible, registerSection }
}