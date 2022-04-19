


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

// script側は以下のように設定する
// const { $randomId } = useNuxtApp()

// 具体的な使い方は以下のURL参照
// https://v3.nuxtjs.org/guide/directory-structure/plugins#automatically-providing-helpers