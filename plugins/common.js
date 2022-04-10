


export default defineNuxtPlugin(nuxtApp => {
  return{
    provide: {
      randomId() {
        // ランダムな整数が(8ビット符号なし)が10個格納された配列の生成
        const randomArray = crypto.getRandomValues(new Uint8Array(10))
        // 配列をつなげて乱数を調整
        return randomArray.join('')
      }
    }
  }
})