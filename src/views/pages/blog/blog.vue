<template>
  <div class="blog">
    <div class="w-container">

      <div class="row">
        <div class="col-8 blog-list">

          <panel class="blog-item" v-for="(blog, index) in blogs" :key="index" v-cloak>
            <div slot="header" class="panel-header">
              <div class="caption">
                <div class="panel-header--title">
                  <h3 class="panel-header--title-text">{{ blog.title }}</h3>
                </div>
              </div>
            </div>
            <div slot="main" class="panel-body">
              <div class="blog-item-content">{{ blog.description }}</div>
              <a :href="blog.url" target="_blank" rel="noopener noreferrer">{{ blog.title }}</a>
            </div>
          </panel>

        </div>

        <div class="col-4">
          <panel>
            <div slot="header" class="panel-header">
              <div class="caption">
                <div class="panel-header--title">
                  <h3 class="panel-header--title-text">标题</h3>
                </div>
              </div>
            </div>
            <div slot="main" class="panel-body">内容</div>
          </panel>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  import panel from '@/components/panel'
  // 加载blog
  import blog from '@/api/blog'

  export default {
    name: 'blog',
    data() {
      return {
        blogs: []
      }
    },
    components: {
      panel
    },
    props: ['blog'],
    mounted() {
      // 获取indexedDB数据
      this.get_blogs()
    },
    methods: {
      async get_blogs() {
        // 获取日志数据
        this.blogs = await blog.get_blogs();
      }
    }
  }
</script>
