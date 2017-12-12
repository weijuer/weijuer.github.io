<template>
  <header class="wj-layout-header wj-layout-header-3 wj-layout-header-default-mobile">
    <div class="wj-topbar wj-topbar-light wj-solid-bg">
      <div class="container">
        <!-- BEGIN: INLINE NAV -->
        <nav class="wj-top-menu wj-pull-left">
          <ul class="wj-icons wj-theme-ul">
            <li><a href="#"><i class="icon-social-twitter"></i></a></li>
            <li><a href="#"><i class="icon-social-facebook"></i></a></li>
            <li><a href="#"><i class="icon-social-dribbble"></i></a></li>
            <li class="hide"><span>Phone: +99890345677</span></li>
          </ul>
        </nav>

        <!-- BEGIN: INLINE NAV -->
        <nav class="wj-top-menu wj-pull-right">
          <ul class="wj-links wj-theme-ul">
            <li><a href="#">Help</a></li>
            <li class="wj-divider">|</li>
            <li><a href="#">Contact</a></li>
            <li class="wj-divider">|</li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <ul class="wj-ext wj-theme-ul">
            <li class="wj-lang dropdown wj-last">
              <a href="#">en</a>
              <ul class="dropdown-menu pull-right" role="menu">
                <li class="active"><a href="#">中文</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </li>
            <li class="wj-search hide">
              <!-- BEGIN: QUICK SEARCH -->
              <form action="#">
                <input type="text" name="query" placeholder="search..." value="" class="form-control" autocomplete="off">
                <i class="fa fa-search"></i>
              </form>
            </li>
          </ul>
        </nav>
        <!-- END: INLINE NAV -->
      </div>
    </div>

    <div class="wj-navbar">
      <div class="container">
        <div class="wj-navbar-wrapper clearfix">
          <div class="wj-brand wj-pull-left">
            <a href="index.html" class="wj-logo">
              <!--<span class="wj-desktop-logo">weijuer</span>-->
              <img src="/static/global/images/nav-logo.svg" alt="WEIJUER" class="wj-desktop-logo">
            </a>
            <button class="wj-hor-nav-toggler" type="button" data-target=".wj-mega-menu">
              <span class="wj-line"></span>
              <span class="wj-line"></span>
              <span class="wj-line"></span>
            </button>
            <button class="wj-topbar-toggler" type="button">
              <i class="fa fa-ellipsis-v"></i>
            </button>
            <button class="wj-search-toggler" type="button">
              <!--<i class="fa fa-search"></i>-->
              <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29744"><path d="M949.217812 877.584326 728.039535 656.473439c-0.823795-0.826831-1.687501-1.592264-2.574744-2.320858 47.224446-61.931514 75.272371-139.271974 75.272371-223.165686 0-203.455785-164.941204-368.390231-368.405326-368.390231-203.465145 0-368.405326 164.934446-368.405326 368.390231 0 203.456808 164.940181 368.390231 368.405326 368.390231 84.056792 0 161.536525-28.152177 223.529931-75.538417 0.711227 0.86674 1.457248 1.713015 2.261599 2.51938l221.238655 221.140563c16.054285 16.142655 44.891212 13.5936 64.173138-5.716188C962.816062 922.473699 965.334522 893.756657 949.217812 877.584326zM104.860436 430.987918c0-180.849928 146.614063-327.457983 327.471401-327.457983 180.856315 0 327.471401 146.608056 327.471401 327.457983 0 88.709391-35.291184 169.164794-92.582305 228.134861-1.14308 0.980327-2.265693 2.006703-3.353512 3.092431-1.111356 1.111311-2.160288 2.257413-3.161122 3.427052-58.992949 57.419757-139.545797 92.802616-228.374461 92.802616C251.474499 758.445902 104.860436 611.838869 104.860436 430.987918z" p-id="29745"></path></svg>
            </button>
            <button class="wj-cart-toggler" type="button">
              <i class="icon-handbag"></i> <span class="wj-cart-number wj-theme-bg">2</span>
            </button>
          </div>

          <form class="wj-quick-search" action="#">
            <input type="text" name="query" placeholder="Type to search..." value="" class="form-control" autocomplete="off">
            <span class="wj-theme-link">×</span>
          </form>

          <nav class="wj-mega-menu wj-pull-right wj-mega-menu-dark wj-mega-menu-dark-mobile wj-fonts-uppercase wj-fonts-bold">
            <ul class="nav navbar-nav wj-theme-nav">
              <li>
                <a href="javascript:;" class="wj-link dropdown-toggle">Home<span class="wj-arrow wj-toggler"></span></a>
              </li>
              <li class="wj-active wj-menu-type-classic">
                <a href="javascript:;" class="wj-link dropdown-toggle">Features<span class="wj-arrow wj-toggler"></span></a>
                <ul class="dropdown-menu wj-menu-type-classic wj-pull-left">
                  <li class="dropdown-submenu">
                    <a href="javascript:;">Headers<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li>
                        <a href="home-header-1.html">Home Header v1</a>
                      </li>
                      <li>
                        <a href="home-header-1-ext.html">Home Header v1 - Extended</a>
                      </li>
                      <li>
                        <a href="home-header-2.html">Home Header v2</a>
                      </li>
                      <li>
                        <a href="home-header-2-ext.html">Home Header v2 - Extended</a>
                      </li>
                      <li>
                        <a href="home-header-3.html">Home Header v3</a>
                      </li>
                      <li>
                        <a href="home-header-4.html">Home Header v4</a>
                      </li>
                      <li>
                        <a href="home-header-4-ext.html">Home Header v4 - Extended</a>
                      </li>
                      <li>
                        <a href="home-header-5.html">Home Header v5</a>
                      </li>
                      <li>
                        <a href="home-header-5-ext.html">Home Header v5 - Extended</a>
                      </li>
                      <li>
                        <a href="home-header-6.html">Home Header v6</a>
                      </li>
                      <li>
                        <a href="home-header-6-ext.html">Home Header v6 - Extended</a>
                      </li>
                      <li>
                        <a href="home-header-7.html">Home Header v7</a>
                      </li>
                      <li>
                        <a href="home-header-8.html">Home Header v8</a>
                      </li>
                      <li>
                        <a href="inner-header-1.html">Inner Header v1</a>
                      </li>
                      <li>
                        <a href="inner-header-1-ext.html">Inner Header v1 - Extended</a>
                      </li>
                      <li>
                        <a href="inner-header-2.html">Inner Header v2</a>
                      </li>
                      <li>
                        <a href="inner-header-2-ext.html">Inner Header v2 - Extended</a>
                      </li>
                      <li>
                        <a href="inner-header-3.html">Inner Header v3</a>
                      </li>
                      <li>
                        <a href="inner-header-4.html">Inner Header v4</a>
                      </li>
                      <li>
                        <a href="inner-header-5.html">Inner Header v5</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu wj-active">
                    <a href="#">Sidebar Menu<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li class=" wj-active">
                        <a href="sidebar-menu-1.html">Sidebar Menu v1</a>
                      </li>
                      <li>
                        <a href="sidebar-menu-2.html">Sidebar Menu v2</a>
                      </li>
                      <li>
                        <a href="sidebar-menu-static.html">Expanded Static Sidebar Menu</a>
                      </li>
                      <li>
                        <a href="sidebar-menu-right.html">Right Sidebar Menu</a>
                      </li>
                      <li>
                        <a href="sidebar-menu-fluid.html">Sidebar Menu In Fluid Layout</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="javascript:;">Footers<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li>
                        <a href="footer-1.html#footer">Footer 1</a>
                      </li>
                      <li>
                        <a href="footer-2.html#footer">Footer 2</a>
                      </li>
                      <li>
                        <a href="footer-3.html#footer">Footer 3</a>
                      </li>
                      <li>
                        <a href="footer-4.html#footer">Footer 4</a>
                      </li>
                      <li>
                        <a href="footer-5.html#footer">Footer 5</a>
                      </li>
                      <li>
                        <a href="footer-6.html#footer">Footer 6</a>
                      </li>
                      <li>
                        <a href="footer-7.html#footer">Footer 7</a>
                      </li>
                      <li>
                        <a href="footer-8.html#footer">Footer 8</a>
                      </li>
                      <li>
                        <a href="footer-9.html#footer">Footer 9</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="#">Breadcrumbs<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li>
                        <a href="breadcrumbs-default.html">Breadcrumbs - Default</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-subtitle.html">Breadcrumbs - Sub Title</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-1.html">Breadcrumbs - Bg Image V1</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-2.html">Breadcrumbs - Bg Image V2</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-3.html">Breadcrumbs - Bg Image V3</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-4.html">Breadcrumbs - Bg Image V4</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-5.html">Breadcrumbs - Bg Image V5</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-6.html">Breadcrumbs - Bg Image V6</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-7.html">Breadcrumbs - Bg Image V7</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-8.html">Breadcrumbs - Bg Image V8</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-9.html">Breadcrumbs - Bg Image V9</a>
                      </li>
                      <li>
                        <a href="breadcrumbs-bgimage-10.html">Breadcrumbs - Bg Image V10</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="javascript:;">Cookies Notification Bar<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li>
                        <a href="component-cookies-1.html">Full Width - Top</a>
                      </li>
                      <li>
                        <a href="component-cookies-2.html">Full Width - Bottom</a>
                      </li>
                      <li>
                        <a href="component-cookies-3.html">Boxed - Dark Square</a>
                      </li>
                      <li>
                        <a href="component-cookies-4.html">Boxed - Theme Color Rounded</a>
                      </li>
                      <li>
                        <a href="component-cookies-5.html">Boxed - Aligned Top Left</a>
                      </li>
                      <li>
                        <a href="component-cookies-6.html">Boxed - Aligned Top Right</a>
                      </li>
                      <li>
                        <a href="component-cookies-7.html">Boxed - Aligned Bottom Left</a>
                      </li>
                      <li>
                        <a href="component-cookies-8.html">Boxed - Aligned Bottom Right</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="component-smooth-scroll.html">Smooth Scroll Links</a>
                  </li>
                  <li class="dropdown-submenu">
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
                  <li class="dropdown-submenu">
                    <a href="page-extended-portfolio.html">Multi Level Menu<span class="wj-arrow wj-toggler"></span></a>
                    <ul class="dropdown-menu wj-pull-right">
                      <li>
                        <a href="#">Example Link</a>
                      </li>
                      <li>
                        <a href="#">Example Link</a>
                      </li>
                      <li>
                        <a href="#">Example Link</a>
                      </li>
                      <li class="dropdown-submenu">
                        <a href="#">Example Sub Menu<span class="wj-arrow wj-toggler"></span></a>
                        <ul class="dropdown-menu wj-pull-left">
                          <li>
                            <a href="#">Example Link</a>
                          </li>
                          <li>
                            <a href="#">Example Link</a>
                          </li>
                          <li>
                            <a href="#">Example Link</a>
                          </li>
                          <li class="dropdown-submenu">
                            <a href="#">Example Sub Menu<span class="wj-arrow wj-toggler"></span></a>
                            <ul class="dropdown-menu wj-pull-left">
                              <li>
                                <a href="#">Example Link</a>
                              </li>
                              <li>
                                <a href="#">Example Link</a>
                              </li>
                              <li>
                                <a href="#">Example Link</a>
                              </li>
                              <li>
                                <a href="#">Example Link</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Example Link</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Example Link</a>
                      </li>
                      <li>
                        <a href="#">Example Link</a>
                      </li>
                    </ul>
                  </li>
                </ul>

              </li>
              <li>
                <a href="javascript:;" class="wj-link dropdown-toggle">Pages<span
                  class="wj-arrow wj-toggler"></span></a>
              </li>
              <li>
                <a href="javascript:;" class="wj-link dropdown-toggle">Shop<span class="wj-arrow wj-toggler"></span></a>
              </li>

              <li class="wj-search-toggler-wrapper">
                <a href="#" class="wj-btn-icon wj-search-toggler">
                  <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29744"><path d="M949.217812 877.584326 728.039535 656.473439c-0.823795-0.826831-1.687501-1.592264-2.574744-2.320858 47.224446-61.931514 75.272371-139.271974 75.272371-223.165686 0-203.455785-164.941204-368.390231-368.405326-368.390231-203.465145 0-368.405326 164.934446-368.405326 368.390231 0 203.456808 164.940181 368.390231 368.405326 368.390231 84.056792 0 161.536525-28.152177 223.529931-75.538417 0.711227 0.86674 1.457248 1.713015 2.261599 2.51938l221.238655 221.140563c16.054285 16.142655 44.891212 13.5936 64.173138-5.716188C962.816062 922.473699 965.334522 893.756657 949.217812 877.584326zM104.860436 430.987918c0-180.849928 146.614063-327.457983 327.471401-327.457983 180.856315 0 327.471401 146.608056 327.471401 327.457983 0 88.709391-35.291184 169.164794-92.582305 228.134861-1.14308 0.980327-2.265693 2.006703-3.353512 3.092431-1.111356 1.111311-2.160288 2.257413-3.161122 3.427052-58.992949 57.419757-139.545797 92.802616-228.374461 92.802616C251.474499 758.445902 104.860436 611.838869 104.860436 430.987918z" p-id="29745"></path></svg>
                </a>
              </li>

              <li>
                <a href="javascript:;" data-toggle="modal" data-target="#login-form" class="wj-btn btn btn-sm btn-no-focus wj-btn-header wj-btn-white wj-btn-reg">
                  <svg class="icon" style="width: 1.25em; height: 1.25em;vertical-align: top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19024"><path d="M937.217874 992.009265A438.305425 438.305425 0 0 0 628.561873 764.688291a393.119299 393.119299 0 1 0-248.176109 3.823442 441.433696 441.433696 0 0 0-295.447749 228.363731 18.422036 18.422036 0 1 0 34.758559 15.988937 382.344146 382.344146 0 0 1 173.792793-173.792794l208.551352 178.311406a18.422036 18.422036 0 0 0 12.165496 4.518613h6.604126a18.422036 18.422036 0 0 0 12.165496-4.518613l205.770667-176.921064A382.344146 382.344146 0 0 1 903.849658 1007.998202a18.422036 18.422036 0 0 0 34.758559-16.684108zM142.984808 393.466884A356.275227 356.275227 0 0 1 847.888378 320.126326a356.275227 356.275227 0 1 1-704.90357 73.340558z m371.568992 590.895498L328.943097 823.777841a499.132903 499.132903 0 0 1 369.483479 0z" p-id="19025"></path></svg>
                  Sign In
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
  export default {
    name: 'header',
    data () {
      return {
        menus: [
          {name: '首页', path: '/', active: true},
          {name: '学术', path: '/', active: false},
          {name: '关于', path: '/', active: false}
        ]
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

  .wj-btn-reg.wj-btn-white:hover {
    color: #2f353b;
    border: 1px solid #fff;
    background: #fff;
  }
</style>

