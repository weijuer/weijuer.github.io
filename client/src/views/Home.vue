<template>
  <div class="home-page">
    <div class="author">
      <div class="avatar shadow shadow-moving">
        <Bubble class="bubble-moving">
          <svg class="icon svg-icon avatar-logo">
            <use xlink:href="#icon-logo@2x" />
          </svg>
        </Bubble>
      </div>
      <div class="nickname box-reflect">Weijuer</div>
      <div class="description text-shadowing">Talking is cheap, show me the codes.</div>
      <div class="links hidden">
        <nav class="social-links">
          <ul class="nav">
            <li class="nav-item">
              <a href>
                <svg class="icon svg-icon">
                  <use xlink:href="#icon-weixin" />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a href>
                <svg class="icon svg-icon">
                  <use xlink:href="#icon-qq" />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a href>
                <svg class="icon svg-icon">
                  <use xlink:href="#icon-weibo" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- <div class="widgets">
        <Weather />
    </div>-->
  </div>
</template>

<script>
import { Bubble } from 'Widgets'

export default {
  name: 'home',
  components: {
    Bubble,
  },
  setup() {},
}
</script>

<style lang="stylus" scoped>
$bubble-color = #4cbf30;

.author {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
        display: flex;
        justify-content: center;
        position: relative;
        width: 8rem;
        height: 8rem;
        margin-bottom: 2rem;

        .avatar-logo {
            width: 100%;
            height: auto;
        }
    }

    .nickname {
        margin-bottom: 1rem;
        font-size: 2rem;
        text-transform: uppercase;
    }

    .description {
        text-transform: capitalize;
        font-style: italic;
        transition: all 0.3s ease-in-out;
    }
}

@media (max-width: 768px) {
    .app-main {
        &.home-page {
            flex-direction: row;
        }
    }
}
</style>
