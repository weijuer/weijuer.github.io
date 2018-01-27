<template>
  <header :class="['wj-layout-header', 'wj-layout-header-2', 'wj-layout-header-dark-mobile', {'wj-layout-header-search-show': $store.state.isToggle}]">
    <div class="wj-topbar wj-topbar-light wj-solid-bg">
      <div class="container">
        <!-- BEGIN: INLINE NAV -->
        <nav class="wj-top-menu wj-pull-left">
          <ul class="wj-icons wj-theme-ul">
            <li><a href="https://weibo.com/u/5927106363" class="wj-tooltip wj-tooltip-bottom" :data-tooltip="$t('header.weibo')"><i class="fa fa-weibo"></i></a></li>
            <li><a href="#" class="wj-tooltip wj-tooltip-bottom" :data-tooltip="$t('header.wechat')"><i class="fa fa-wechat"></i></a></li>
            <li><a href="https://weijuer.github.io/" class="wj-tooltip wj-tooltip-bottom" :data-tooltip="$t('header.github')"><i class="fa fa-github"></i></a></li>
          </ul>
        </nav>

        <!-- BEGIN: INLINE NAV -->
        <nav class="wj-top-menu wj-pull-right">
          <ul class="wj-links wj-theme-ul">
            <li><a href="#">{{ $t('header.help') }}</a></li>
            <li class="wj-divider">|</li>
            <li><a href="#">{{ $t('header.contact') }}</a></li>
            <li class="wj-divider">|</li>
            <li><a href="#">{{ $t('header.faq') }}</a></li>
          </ul>
          <ul class="wj-ext wj-theme-ul">
            <li class="wj-lang dropdown wj-last">
              <a href="#">
                {{ lang.active }}
                <i class="fa fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu pull-right" role="menu">
                <li :class="{'active': item.name === lang.active}" v-for="(item, index) in lang.langList" @click="changeLang(index)" :data-tag="item.tag"><a href="javascript:;">{{ item.name }}</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="wj-navbar">
      <div class="container">
        <div class="wj-navbar-wrapper clearfix">
          <div class="wj-brand wj-pull-left">
            <a href="/home" class="wj-logo">
              <img :src="logo" alt="WEIJUER" class="wj-desktop-logo">
            </a>
            <button class="wj-hor-nav-toggler" type="button" data-target=".wj-mega-menu">
              <span class="wj-line"></span>
              <span class="wj-line"></span>
              <span class="wj-line"></span>
            </button>
            <button class="wj-topbar-toggler" type="button">
              <i class="fa fa-ellipsis-v"></i>
            </button>
            <button class="wj-search-toggler" type="button" @click="$store.commit('searchToggle')">
              <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29744"><path d="M949.217812 877.584326 728.039535 656.473439c-0.823795-0.826831-1.687501-1.592264-2.574744-2.320858 47.224446-61.931514 75.272371-139.271974 75.272371-223.165686 0-203.455785-164.941204-368.390231-368.405326-368.390231-203.465145 0-368.405326 164.934446-368.405326 368.390231 0 203.456808 164.940181 368.390231 368.405326 368.390231 84.056792 0 161.536525-28.152177 223.529931-75.538417 0.711227 0.86674 1.457248 1.713015 2.261599 2.51938l221.238655 221.140563c16.054285 16.142655 44.891212 13.5936 64.173138-5.716188C962.816062 922.473699 965.334522 893.756657 949.217812 877.584326zM104.860436 430.987918c0-180.849928 146.614063-327.457983 327.471401-327.457983 180.856315 0 327.471401 146.608056 327.471401 327.457983 0 88.709391-35.291184 169.164794-92.582305 228.134861-1.14308 0.980327-2.265693 2.006703-3.353512 3.092431-1.111356 1.111311-2.160288 2.257413-3.161122 3.427052-58.992949 57.419757-139.545797 92.802616-228.374461 92.802616C251.474499 758.445902 104.860436 611.838869 104.860436 430.987918z" p-id="29745"></path></svg>
            </button>
          </div>

          <form class="wj-quick-search" action="#">
            <input type="text" name="query" :placeholder="$t('header.quickSearch')" value="" @keyup="searchChange" v-model="search" class="form-control" autocomplete="off">
            <span class="wj-theme-link" @click="$store.commit('searchToggle')">×</span>
          </form>

          <nav class="wj-mega-menu wj-pull-right wj-mega-menu-dark wj-mega-menu-dark-mobile wj-fonts-uppercase wj-fonts-bold">
            <ul class="nav navbar-nav wj-theme-nav">
              <router-link tag="li" v-for="(menu, index) in menus" :key="menu.id" :to="{name: menu.name}" >
                <a class="wj-link dropdown-toggle">{{ $t('nav.' + menu.name) }}<span class="wj-arrow wj-toggler"></span></a>
              </router-link>

              <!--二级菜单-->
              <!--<li>
                <a href="javascript:;" class="wj-link dropdown-toggle">Pages<span class="wj-arrow wj-toggler"></span></a>
                <ul class="dropdown-menu wj-menu-type-classic wj-pull-left">
                  <li>
                    <a href="component-smooth-scroll.html">Smooth Scroll Links</a>
                  </li>
                  <li class="dropdown-submenu wj-active">
                    <a href="#">Mega Menu<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li>
                        <a href="megamenu-light.html">Mega Menu - Light</a>
                      </li>
                      <li>
                        <a href="megamenu-dark.html">Mega Menu - Dark</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>-->

              <li class="wj-search-toggler-wrapper">
                <a href="javascript:;" class="wj-btn-icon wj-search-toggler" @click="$store.commit('searchToggle')">
                  <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29744"><path d="M949.217812 877.584326 728.039535 656.473439c-0.823795-0.826831-1.687501-1.592264-2.574744-2.320858 47.224446-61.931514 75.272371-139.271974 75.272371-223.165686 0-203.455785-164.941204-368.390231-368.405326-368.390231-203.465145 0-368.405326 164.934446-368.405326 368.390231 0 203.456808 164.940181 368.390231 368.405326 368.390231 84.056792 0 161.536525-28.152177 223.529931-75.538417 0.711227 0.86674 1.457248 1.713015 2.261599 2.51938l221.238655 221.140563c16.054285 16.142655 44.891212 13.5936 64.173138-5.716188C962.816062 922.473699 965.334522 893.756657 949.217812 877.584326zM104.860436 430.987918c0-180.849928 146.614063-327.457983 327.471401-327.457983 180.856315 0 327.471401 146.608056 327.471401 327.457983 0 88.709391-35.291184 169.164794-92.582305 228.134861-1.14308 0.980327-2.265693 2.006703-3.353512 3.092431-1.111356 1.111311-2.160288 2.257413-3.161122 3.427052-58.992949 57.419757-139.545797 92.802616-228.374461 92.802616C251.474499 758.445902 104.860436 611.838869 104.860436 430.987918z" p-id="29745"></path></svg>
                </a>
              </li>

              <li>
                <a href="javascript:;" data-toggle="modal" data-target="#login-form" class="wj-btn btn btn-sm btn-no-focus wj-btn-header wj-btn-white wj-btn-reg">
                  <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19024"><path d="M937.217874 992.009265A438.305425 438.305425 0 0 0 628.561873 764.688291a393.119299 393.119299 0 1 0-248.176109 3.823442 441.433696 441.433696 0 0 0-295.447749 228.363731 18.422036 18.422036 0 1 0 34.758559 15.988937 382.344146 382.344146 0 0 1 173.792793-173.792794l208.551352 178.311406a18.422036 18.422036 0 0 0 12.165496 4.518613h6.604126a18.422036 18.422036 0 0 0 12.165496-4.518613l205.770667-176.921064A382.344146 382.344146 0 0 1 903.849658 1007.998202a18.422036 18.422036 0 0 0 34.758559-16.684108zM142.984808 393.466884A356.275227 356.275227 0 0 1 847.888378 320.126326a356.275227 356.275227 0 1 1-704.90357 73.340558z m371.568992 590.895498L328.943097 823.777841a499.132903 499.132903 0 0 1 369.483479 0z" p-id="19025"></path></svg>
                  {{ $t('header.login') }}
                </a>
              </li>

              <li>
                <a href="javascript:;" data-toggle="modal" data-target="#login-form" class="wj-btn btn btn-sm btn-no-focus wj-btn-header wj-btn-white wj-btn-reg">
                  <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="43565"><path d="M965.484793 296.889781C874.170065 105.904005 722.095507 137.592728 722.095507 137.592728l-55.81726-3.216251c196.573027 258.514775 183.110411 361.51566 176.761819 383.128911-26.919093-13.232372-61.403488-16.618493-96.254228-6.798846-65.949015 18.624173-107.964944 77.295434-93.854575 131.017986 14.109346 53.730739 79.013565 82.205257 144.957463 63.581084 51.049676-14.443967 87.650269-52.857858 95.071286-94.41944 72.409147-111.214964-96.341209-378.955868-96.341209-378.955868L965.484793 296.889781zM584.020802 665.120376l0.025583 0.025583c-27.398-102.684684 59.234079-202.581881 183.931103-228.090858-43.933605-148.939147-181.898817-257.781064-345.568457-257.781064-199.028962 0-360.357278 160.765497-360.357278 359.061772 0 198.293205 161.329339 359.089401 360.357278 359.089401 110.310362 0 208.93559-49.523927 275.021727-127.32999C641.446699 753.931075 598.411557 719.018937 584.020802 665.120376zM235.103064 333.868997c49.400107-44.961004 115.14139-72.39789 187.31006-72.39789 72.191182 0 137.945769 27.428699 187.345875 72.395844-0.750083 0.697895-1.494027 1.400906-2.252297 2.090615-48.834218-44.37158-113.789603-71.426773-185.093579-71.426773-71.281463 0-136.225591 27.064402-185.058786 71.428819C236.596068 335.269903 235.852124 334.565868 235.103064 333.868997zM549.346071 399.803685c-0.508583 0.472767-1.013073 0.949628-1.526773 1.416256-5.095042-4.629437-10.451026-8.978489-16.040325-13.027711 0.734734-0.314155 1.465374-0.636496 2.196015-0.955768C539.319717 391.160841 544.454668 395.35128 549.346071 399.803685zM313.769728 364.688933c30.695093-21.659299 68.172659-34.401508 108.641349-34.401508 40.48404 0 77.972862 12.740162 108.672048 34.403554-0.74599 0.320295-1.486864 0.647753-2.235924 0.960885-30.166043-20.980847-66.854641-33.292244-106.436124-33.292244-39.566134 0-76.245522 12.313443-106.406448 33.290197C315.256592 365.335662 314.514695 365.009228 313.769728 364.688933zM316.004629 386.116965c-0.982374 0.683569-1.961678 1.372254-2.930749 2.074242-0.734734-0.314155-1.465374-0.636496-2.196015-0.956791 0.956791-0.703011 1.920746-1.394766 2.891863-2.079358C314.514695 385.475352 315.256592 385.801786 316.004629 386.116965zM422.409031 679.82017c-78.391395 0-141.970432-63.35084-141.970432-141.458779 0-78.108962 63.579037-141.460826 141.970432-141.460826s141.941779 63.323211 141.941779 141.460826C564.35081 616.504122 500.773819 679.82017 422.409031 679.82017z" p-id="43566"></path></svg>
                  {{ $t('header.music') }}
                </a>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import store from '../store/store'
  export default {
    name: 'page-header',
    store,
    data () {
      return {
        search: '',
        logo: './asserts/global/images/logo-white.svg',
        lang: {
          langList: [
            {name: '中文', tag: 'zh-CN'},
            {name: 'English', tag: 'en-US'}
          ],
          active: '中文'
        },
        menus: [
          {name: 'home', path: '/home', active: true},
          {name: 'blog', path: '/blog', active: false},
          {name: 'about', path: '/about', active: false}
        ]
      }
    },
    mounted () {
      console.log('this.$i18n.locale ===========>' + this.$i18n.locale)
    },
    methods: {
      // 1.语言切换
      changeLang (index) {
        // 1.1 切换语言名称
        this.lang.active = this.lang.langList[index].name
        // 1.2 设置$i18n.locale属性值
        this.$i18n.locale = this.lang.langList[index].tag
        console.log('locale ===========>' + this.$i18n.locale)
      },
      // 3.搜索
      searchChange () {
        this.$root.Bus.$emit('searchChange', this.search)
      }
    }
  }
</script>

<style scoped>
  .wj-btn-reg {
    padding: 6px 18px 4px 18px;
    font-size: 14px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 30px !important;
  }

  .wj-btn-reg.wj-btn-white:focus,
  .wj-btn-reg.wj-btn-white:hover {
    color: #2f353b;
    border: 1px solid #fff;
    background: #fff;
  }
</style>
