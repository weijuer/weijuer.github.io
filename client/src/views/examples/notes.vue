<template>
  <div class="voiceinator">
    <h1>The Voiceinator 6000</h1>

    <select v-model="utter.lang" @change="changeLang">
      <option value="">Select a Language</option>
      <option v-for="lang in langs" :key="lang" :value="lang">{{ lang }}</option>
    </select>

    <select v-model="utter.voice" @change="changeVoice">
      <option value="">Select a Voice</option>
      <option v-for="voice in voices" :key="voice" :value="voice.name">
        {{ voice.name + '(' + voice.lang + ')' }}
      </option>
    </select>

    <label for="rate">Rate:</label>
    <input
      v-model="utter.rate"
      @change="changeOptions"
      name="rate"
      type="range"
      min="0"
      max="3"
      step="0.1"
    />

    <label for="pitch">Pitch:</label>
    <input
      v-model="utter.pitch"
      @change="changeOptions"
      name="pitch"
      type="range"
      min="0"
      max="2"
      step="0.1"
    />

    <textarea v-model="utter.text" ref="note" name="text">
Type what you want me to say.  👍!</textarea
    >
    <button @click="toggle(false)">Stop!</button>
    <button @click="toggle(true)">Speak</button>

    <p class="notes">Inspect the code to see the cross browser fixes for Safari and Firefox</p>
  </div>
</template>

<script>
import { Note } from 'Widgets'
import { ref, toRefs, computed, reactive, onMounted } from 'vue'

export default {
  name: 'notes',
  components: {
    [Note.name]: Note,
  },
  setup() {
    const synth = window.speechSynthesis

    const note = ref(null)
    const state = reactive({
      localVoices: [],
      utter: {
        lang: 'en',
        pitch: 0.2,
        rate: 1,
        voice: '',
        text: '',
      },
      voices: computed(() =>
        state.localVoices.filter((voice) => voice.lang.includes(state.utter.lang))
      ),
      langs: computed(() =>
        state.voices
          .reduce((arr, voice) => {
            if (!arr.includes(voice.lang)) {
              arr.push(voice.lang)
            }
            return arr
          }, [])
          .sort((a, b) => (a > b ? 1 : -1))
      ),
    })

    // 切换声音
    function changeVoice() {
      toggle()
    }

    function toggle(startOver = true) {
      if (startOver) {
        const utter = Object.assign(new SpeechSynthesisUtterance(), state.utter)
        synth.speak(utter)
      } else {
        synth.cancel()
      }
    }

    function changeOptions() {
      toggle()
    }

    // init
    window.speechSynthesis.onvoiceschanged = () => {
      state.localVoices = synth.getVoices()
    }

    onMounted(() => {
      console.log('onMounted')
    })

    return {
      ...toRefs(state),
      note,
      toggle,
      changeVoice,
      changeOptions,
    }
  },
}
</script>

<style lang="stylus">
html {
  font-size: 10px;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

/* body {
  padding: 0;
  font-family: sans-serif;
  background-color: #3BC1AC;
  display: flex;
  min-height: 100vh;
  align-items: center;
  background-image: radial-gradient(circle at 100% 150%, #3BC1AC 24%, #42D2BB 25%, #42D2BB 28%, #3BC1AC 29%, #3BC1AC 36%, #42D2BB 36%, #42D2BB 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, #3BC1AC 24%, #42D2BB 25%, #42D2BB 28%, #3BC1AC 29%, #3BC1AC 36%, #42D2BB 36%, #42D2BB 40%, transparent 40%, transparent), radial-gradient(circle at 50% 100%, #42D2BB 10%, #3BC1AC 11%, #3BC1AC 23%, #42D2BB 24%, #42D2BB 30%, #3BC1AC 31%, #3BC1AC 43%, #42D2BB 44%, #42D2BB 50%, #3BC1AC 51%, #3BC1AC 63%, #42D2BB 64%, #42D2BB 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, #42D2BB 5%, #3BC1AC 6%, #3BC1AC 15%, #42D2BB 16%, #42D2BB 20%, #3BC1AC 21%, #3BC1AC 30%, #42D2BB 31%, #42D2BB 35%, #3BC1AC 36%, #3BC1AC 45%, #42D2BB 46%, #42D2BB 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, #42D2BB 5%, #3BC1AC 6%, #3BC1AC 15%, #42D2BB 16%, #42D2BB 20%, #3BC1AC 21%, #3BC1AC 30%, #42D2BB 31%, #42D2BB 35%, #3BC1AC 36%, #3BC1AC 45%, #42D2BB 46%, #42D2BB 49%, transparent 50%, transparent);
  background-size: 100px 50px;
} */
.voiceinator {
  padding: 2rem;
  width: 50rem;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  background: white;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  width: calc(100% + 4rem);
  margin: 0;
  margin-left: -2rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  background: #ffc600;
  border-bottom: 5px solid #F3C010;
  text-align: center;
  font-size: 5rem;
  font-weight: 100;
  font-family: 'Pacifico', cursive;
  text-shadow: 3px 3px 0 #F3C010;
}

.voiceinator input, .voiceinator button, .voiceinator select, .voiceinator textarea {
  width: 100%;
  display: block;
  margin: 10px 0;
  padding: 10px;
  border: 0;
  font-size: 2rem;
  background: #F7F7F7;
  outline: 0;
}

textarea {
  height: 20rem;
}

.voiceinator select {
  width: 65%;
  display: inline-block;
}

.voiceinator select:first-of-type {
  width: 33%;
}

.voiceinator button {
  background: #ffc600;
  border: 0;
  width: 49%;
  float: left;
  font-family: 'Pacifico', cursive;
  margin-bottom: 0;
  font-size: 2rem;
  border-bottom: 5px solid #F3C010;
  cursor: pointer;
  position: relative;
}

.voiceinator button:active {
  top: 2px;
}

.voiceinator button:nth-of-type(1) {
  margin-right: 2%;
}

p.notes {
  padding-top: 70px;
  font-size: 1.5rem;
}
</style>
