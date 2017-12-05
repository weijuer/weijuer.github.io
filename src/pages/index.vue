<template>
  <div class="index">
    <img src="/static/global/images/logo.png" width="200" alt="">

    <div class="media" v-for="item in searchLists">
      <div class="media-left media-middle">
        <a :href="item.url">
          <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="/static/global/images/logo.png" data-holder-rendered="true" style="width: 64px; height: 64px;">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchLists: []
      }
    },
    mounted () {
      console.log('-----mounted')
      // 请求本地的数据
      this.get_local_data()
    },
    methods: {
      // 1.请求本地数据
      get_local_data: function (params) {
        let v = this
        if (!params) params = {}
        v.$ajax.get('/static/global/data/pages.json', {params})
          .then((response) => {
            console.log(response.data)
            v.searchLists = response.data.searchList
            console.log(v.searchLists)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>
