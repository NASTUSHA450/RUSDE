import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        formOverWhite: false,
        footerVisible: false,
        headerInView: true,
    }),
})