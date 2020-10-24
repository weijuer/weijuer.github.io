<template>
  <div class="upload-container">
    <div class="preview empty">
      <img v-if="dataURL" ref="preview-image" :src="dataURL" />
      <div v-else class="controls">
        <label class="trigger" for="file-control"></label>
        <input
          ref="file"
          id="file-control"
          @change="onChange"
          class="visually-hidden"
          type="file"
          :accept="extensions"
        />
      </div>
      <a v-if="dataURL" @click="onDelete" class="icon-btn del-icon-btn" href="javascript:;"></a>
    </div>
    <span class="tips upload-tips">{{ tips }}</span>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'

export default {
  name: 'w-uploader',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: String, // 文件服务器地址
    extensions: {
      type: String,
      default: '',
    }, // 可选文件后缀
    url: String, // 请求地址
    maxSize: Number, // 最大
    tips: String, // 尺寸说明
  },
  setup() {
    const state = reactive({
      dataURL: null, // 文件预览blod地址
      xhr: null, // xhr对象
      percentage: 0, // 上传进度
      error: null, // 错误对象
    })

    // 文件
    const file = ref(null)

    return { ...toRefs(state), file }
  },
  methods: {
    onChange: function (e) {
      var file = e.target.files[0]
      this.error = null
      // 释放对象URL
      this.dataURL && URL.revokeObjectURL(this.dataURL)
      // 校验格式
      this.onValidate(file)

      // 校验通过
      if (!this.error) {
        // 预览
        this.onPreview(file)
        // 上传
        this.upload(file)
      }
    },
    onValidate: function (file) {
      var suffixs = this.extensions.split(',')
      var suffix = file.name.split('.').pop().toLowerCase()
      var fileSize = Math.round((file.size / 1024) * 100) / 100 // 单位KB
      // 文件格式校验
      if (suffixs.indexOf(suffix) === -1) {
        this.error = {
          type: 'suffix',
          message: 'illegal suffix',
        }
        this.$emit('on-validate', this.error)
      }

      // 文件大小检验
      if (fileSize >= this.maxSize) {
        this.error = {
          type: 'size',
          message: 'illegal file size',
        }
        this.$emit('on-validate', this.error)
      }
    },
    onDelete: function (key) {
      console.log(key)
      // 删除
      this.dataURL = ''
      this.$emit('change', '')
    },
    onPreview: function (file) {
      // 图片
      if (/^image/.test(file.type)) {
        this.dataURL = URL.createObjectURL(file)
        // 图片加载
        // this.$image.onload = function () {
        //   window.URL.revokeObjectURL(self.dataURL);
        // };
      }
    },
    upload: function (file) {
      var self = this
      // 构建FormData对象
      var form = new FormData()
      form.append('file', file)

      // 构建xhr对象
      var xhr = new XMLHttpRequest()

      this.xhr = xhr
      // 建立HTTP请求
      xhr.open('POST', this.url, true)

      // 进度
      xhr.upload.addEventListener('progress', this.onPreview, false)
      // 上传结束
      xhr.upload.addEventListener('load', this.onLoad, false)
      // 上传出错
      xhr.addEventListener('error', this.onError, false)
      // 结果返回
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // 上传成功
          self.$emit('on-success', JSON.parse(xhr.responseText))
        }
      }

      try {
        // 发送数据
        xhr.send(form)
      } catch (error) {
        this.error = error
        // 上传错误
        this.$emit('on-error', error)
      }
    },
    onProgress: function (e) {
      if (e.lengthComputable) {
        this.percentage = Math.round((e.loaded * 100) / e.total)
        this.$emit('on-progress', this.percentage)
      }
    },
    onLoad: function (e) {
      console.log(e)
      this.percentage = 100
    },
    onError: function (e) {
      this.error = e
      // 上传错误
      this.$emit('on-error', e)
    },
  },
  watch: {
    value: function (newVal) {
      // 编辑预览
      if (newVal) {
        this.dataURL = /^http?s:\/\//g.test(newVal) ? newVal : '/' + newVal
      }
    },
  },
}
</script>

<style lang="stylus">
.upload-container {
  display: flex
  align-items: center

  .preview {
    position: relative
    margin-right: 1em

    img {
      display: block
      width: 64px
      height: 64px
    }

    .trigger {
      display: flex
      justify-content: center
      align-items: center
      width: 64px
      height: 64px
      color: #bbb
      border: 1px dashed #bbb

      &:before {
        content: ""
        width: 60%
        border-top: 2px solid
      }

      &:after {
        content: ""
        position: absolute
        height: 60%
        border-left: 2px solid
      }
    }
  }
}

.empty-cols,
.upload-container {
  .tips {
    font-size: 14px
    color: #7d7d7d
  }
}

.visually-hidden {
  position: absolute !important
  height: 1px
  width: 1px
  overflow: hidden
  clip: rect(1px, 1px, 1px, 1px)
}

.icon-btn {
  width: 22px
  height: 22px
  text-align: center
  position: absolute
  top: -8px
  right: -8px
  color: #fff
}

.del-icon-btn {
  &:after {
    content: "\2716"
    display: block
    width: 22px
    height: 22px
    font-size: 14px
    background: #1ea0f2
    border: 1px solid #1ea0f2
    border-radius: 50%
  }

  &:hover:after {
    background: #f00
    border-color: #f00
  }
}
</style>


