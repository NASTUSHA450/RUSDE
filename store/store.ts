import {defineStore} from 'pinia';

export const useStore = defineStore('screenWidth', {
    state: () => ({
        openFormModal: false,
        openFormSubmit: false,
    }),
    actions: {
        toggleFormModal() {
            if (this.openFormModal) {
                    this.openFormModal = false
                    this.openFormSubmit = false
            }else if(!this.openFormModal && this.openFormSubmit){
                this.openFormSubmit = false
            }
            else {
                this.openFormModal = true
            }
        },
        toggleFormSubmit() {
            this.openFormSubmit = !this.openFormSubmit
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

});