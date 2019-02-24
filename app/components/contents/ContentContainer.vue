<template>
  <el-card>
    <el-button type="primary" style="margin-bottom: 15px;" @click="download"
      >画像生成</el-button
    >
    <v-stage ref="stage" :config="stageSize">
      <v-layer ref="layer">
        <v-image
          :config="{
            image: image
          }"
        />
      </v-layer>
      <v-layer ref="idols">
        <div v-for="(filename, i) in idols" :key="i" class="icons">
          <v-image
            :config="{
              image: createImage(filename),
              draggable: true,
              x: boundaryX(i),
              y: boundaryY(i)
            }"
          />
        </div>
      </v-layer>
    </v-stage>
  </el-card>
</template>

<script>
import baseImg from '@/assets/img/base.jpg'

const idolNames = [
  'akane',
  'ami',
  'anna',
  'arisa',
  'ayumu',
  'azusa',
  'chihaya',
  'chizuru',
  'emily',
  'erena',
  'fuka',
  'haruka',
  'hibiki',
  'hinata',
  'iku',
  'iori',
  'julia',
  'kana',
  'kaori',
  'karen',
  'konomi',
  'kotoha',
  'makoto',
  'mami',
  'matsuri',
  'megumi',
  'miki',
  'minako',
  'mirai',
  'miya',
  'mizuki',
  'momoko',
  'nao',
  'noriko',
  'reika',
  'rio',
  'ritsuko',
  'roco_handa',
  'sayoko',
  'serika',
  'shiho',
  'shizuka',
  'subaru',
  'takane',
  'tamaki',
  'tomoka',
  'tsubasa',
  'tsumugi',
  'umi',
  'yayoi',
  'yukiho',
  'yuriko'
]

let primaryX = 0

export default {
  data() {
    return {
      stageSize: {
        width: 600,
        height: 840
      },
      image: null,
      idols: idolNames
    }
  },
  mounted() {
    const image = new window.Image()
    image.src = baseImg
    image.width = 600
    image.height = 374
    image.onload = () => {
      this.image = image
    }
  },
  methods: {
    createImage(filename) {
      const image = new window.Image()
      const filepath = require(`@/assets/img/idols/${filename}.jpg`)
      image.src = filepath
      image.width = 65
      image.height = 75
      return image
    },
    boundaryY(i) {
      let y = 405
      if (i >= 9) {
        y = 475
        if (i >= 18) {
          y = 545
          if (i >= 27) {
            y = 615
            if (i >= 36) {
              y = 685
              if (i >= 45) {
                y = 755
              }
            }
          }
        }
      }

      return y
    },
    boundaryX(i) {
      if (i % 9 === 0) {
        primaryX = 0
      }
      let x = primaryX * 65
      primaryX++

      return x
    },
    download() {
      let link = document.createElement('a')
      let stage = this.$refs.stage.getStage()

      link.download = 'tantou.png'
      link.href = stage.toDataURL({ pixelRatio: 1 , height: 375})
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>
