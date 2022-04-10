

export default defineNuxtPlugin(nuxtApp => {
  return{
    provide: {
      hello: () => 'world'
    }
  }
})