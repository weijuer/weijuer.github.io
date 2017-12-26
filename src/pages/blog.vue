<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="wj-content-blog-post-1-list">

          <div class="wj-content-blog-post-1 wj-bordered" v-for="item in searchLists">
            <div class="wj-media wj-content-overlay">
              <div class="wj-overlay-wrapper">
                <div class="wj-overlay-content">
                  <a href="#"><i class="fa fa-link"></i></a>
                  <a :href="subLogo">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>

              <img class="wj-overlay-object img-responsive" :src="blogHeader" alt="">
            </div>

            <div class="wj-title wj-font-uppercase">
              <a :href="item.url">{{ item.title }}</a>
            </div>

            <div class="wj-panel">
              <div class="wj-author"><a href="#">By <span class="wj-font-uppercase">{{ item.author }}</span></a></div>
              <div class="wj-date">on <span class="wj-font-uppercase">{{ item.date }}</span></div>
              <ul class="wj-tags wj-theme-ul-bg">
                <li v-for="(tag, index) in item.tags" v-text="tag"></li>
              </ul>
              <div class="wj-comments"><a href="#"><i class="icon-speech"></i> 30 comments</a></div>
            </div>

            <div class="wj-desc">
              {{ item.description }}
              <a :href="item.url">read more...</a>
            </div>
          </div>

          <div class="wj-pagination">
            <ul class="wj-content-pagination wj-theme">
              <li class="wj-prev"><a href="#"><i class="fa fa-angle-left"></i></a></li>
              <li class="wj-active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li class="wj-next"><a href="#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
          </div>

        </div>
      </div>

    <div class="col-md-3">
      <!-- BEGIN: CONTENT/BLOG/BLOG-SIDEBAR-1 -->
      <form action="#" method="post">
        <div class="input-group">
          <input type="text" class="form-control wj-square wj-theme-border" placeholder="Search blog...">
          <span class="input-group-btn">
            <button class="btn wj-theme-btn wj-theme-border wj-btn-square" type="button">Go!</button>
          </span>
        </div>
      </form>

      <div class="wj-content-ver-nav">
        <div class="wj-content-title-1 wj-theme wj-title-md wj-margin-t-40">
          <h3 class="wj-font-bold wj-font-uppercase">Categories</h3>
          <div class="wj-line-left wj-theme-bg"></div>
        </div>
        <ul class="wj-menu wj-arrow-dot1 wj-theme">
          <li><a href="#">Web Development(2)</a></li>
          <li><a href="#">UX Design(12)</a></li>
          <li><a href="#">Mobile Development(5)</a></li>
          <li><a href="#">JavaScript(11)</a></li>
          <li><a href="#">Web Design(18)</a></li>
        </ul>
      </div>

      <div class="wj-content-tab-1 wj-theme wj-margin-t-30">
        <div class="nav-justified">
          <ul class="nav nav-tabs nav-justified">
            <li class="active"><a href="#blog_recent_posts" data-toggle="tab">Recent</a></li>
            <li><a href="#blog_popular_posts" data-toggle="tab">Popular</a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="blog_recent_posts">
              <ul class="wj-content-recent-posts-1">
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" alt="" class="img-responsive">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" alt="" class="img-responsive">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" alt="" class="img-responsive">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" alt="" class="img-responsive">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane" id="blog_popular_posts">
              <ul class="wj-content-recent-posts-1">
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" class="img-responsive" alt="">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" class="img-responsive" alt="">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" class="img-responsive" alt="">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
                <li>
                  <div class="wj-image">
                    <img :src="subLogo" class="img-responsive" alt="">
                  </div>
                  <div class="wj-post">
                    <a href="" class="wj-title">
                      UX Design Expo 2015...
                    </a>
                    <div class="wj-date">27 Jan 2015</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="wj-content-ver-nav">
        <div class="wj-content-title-1 wj-theme wj-title-md wj-margin-t-40">
          <h3 class="wj-font-bold wj-font-uppercase">Blog</h3>
          <div class="wj-line-left wj-theme-bg"></div>
        </div>
        <ul class="wj-menu wj-arrow-dot wj-theme">
          <li v-for="item in searchLists"><a :href="item.url" :title="item.title" v-text="item.title"></a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data () {
      return {
        searchLists: [],
        subLogo: './static/global/images/wj-logo.svg',
        blogHeader: './static/global/images/blog/bg-blog-2.png'
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

<style lang="less" scoped>
  @import "../assets/global/less/blog";
</style>

