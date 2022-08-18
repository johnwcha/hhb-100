<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="10">
        <hr class="m-3 mb-3">
        <p class="text-h3 text-center">
          和合本聖經發行 100 週年紀念
        </p>
        <hr class="my-3">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          max-height="237"
          max-width="400"
          src="https://davidyenaudiobible.files.wordpress.com/2021/05/p_20190902_155232.jpg?w=316"
        >
          <v-card-title class="headline"> 閻大衛
          </v-card-title>
        </v-img>
        <v-card-text>
          <p class="text-h6">
            2019年是中文和合本聖經出版一百週年紀念。
            吾人有幸躬逢其盛，謹以此錄音表達個人對中文聖經，以及當年翻譯人士最高的敬意和謝意。
            朗讀者：閻大衛（台灣）yentaipei@gmail.com</p>

          <p class="text-h6">
            有聲聖經朗讀者閻大衛(David Yen)，1956年出生於台灣，
            祖籍中國山東。美國奧克拉荷馬大學
            (University of Oklahoma, Norman, 1992)
            新聞傳播學院碩士。曾在台灣幼獅電台，中廣公司，
            佳音電台擔任播音員，記者，新聞節目主持人，
            分別於1985, 1990, 1996獲得廣播金鐘獎。</p>
          <hr class="my-3">

          <p>
            官網： <a
              href="https://davidyenaudiobible.com/%E6%9C%89%E8%81%B2%E8%81%96%E7%B6%93%EF%BC%9A%E5%92%8C%E5%90%88%E6%9C%AC%E8%81%96%E7%B6%93%E7%99%BC%E8%A1%8C100%E9%80%B1%E5%B9%B4%E7%B4%80%E5%BF%B5/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              【有聲聖經】【和合本聖經100週年紀念】
            </a>.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // make sure to enable anonymous login on Firebase console
    this.$fire.auth.signInAnonymously().then(() => {
      // console.log(this.$fire.auth.currentUser)
      // getting Not Available video list
    }).catch((error) => { console.error(error.message) })
  }
}
</script>