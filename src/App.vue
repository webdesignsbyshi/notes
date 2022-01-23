<template>
  <nav>
    <div class="nav-wrapper">
      <span class="nav-wrapper__text">organize.me</span>
      <ul class="right">
        <li>
          <a @click="addNewNote()" class="nav-wrapper__button waves-effect waves-light btn">
            <i class="nav-wrapper__button-icon material-icons left">add</i>
            <span class="nav-wrapper__button-text">Add Note</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="notes">
    <div v-if="notesList.length === 0" style="text-align: center;">
      You dont have any notes to view. Click "Add Note" to begin!
    </div>
    <div v-for="(note, i) in notesList" :key="i" class="notes__note note" :style="{background: note.color}">
      <i class="material-icons notes__icon" @click="toggleNoteMenu(note)">more_vert</i>
      <ul v-if="note.isMenuVisible" id="dropdown1" class="notes-dropdown dropdown-content" tabindex="0">
        <li tabindex="0" @click="deleteNote(i)">
          <a href="#!" class="notes-dropdown__link">
            <i class="notes-dropdown__icon material-icons" @click="deleteNote(i)">delete</i>
            Delete
          </a>
        </li>
        <div v-if="note.isMenuVisible" class="notes-dropdown__colors-wrapper">
          <div v-for="(color, i) in colors" :key="i" class="notes-dropdown__colors menu" @click="changeNoteColor(note, color)" :style="{background: color}"></div>
        </div>
      </ul>
      <input v-model="note.title" id="first_name" type="text" class="notes__input validate" maxlength="35">
      <textarea v-model="note.text" :keyup="editNote()" id="textarea1" class="notes__textarea materialize-textarea note-textarea"></textarea>
    </div>
  </div>

  <!-- <notes /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

export default {
  setup () {
    const { cookies } = app.config.globalProperties
    return { cookies }
  },
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      notesList: [
        {
          id: '0',
          title: 'New Note',
          text: 'This is a new note',
          color: '#FBF608',
          isMenuVisible: false
        },
        {
          id: '1',
          title: 'Things to remember',
          text: '1. smile 2. be kind 3. love',
          color: '#D0E3FF',
          isMenuVisible: false
        },
        {
          id: '2',
          title: 'Groceries',
          text: 'Eggs, Milk, Bread, Tea',
          color: '#9BCCFD',
          isMenuVisible: false
        }
      ],
      colors: [
        '#F8FFCA',
        '#9BCCFD',
        '#D95980',
        '#F6B405',
        '#D0E3FF',
        '#FBF608'
      ]
    }
  },
  beforeMount () {
    if (!this.$cookies.isKey('notesList')) {
      this.$cookies.set('notesList', JSON.stringify(this.notesList))
    } else {
      var notesList = this.$cookies.get('notesList')
      this.notesList = JSON.parse(notesList)

      this.notesList.forEach((note, index) => {
        note.isMenuVisible = false
      })
    }
    // this.axios
    //   .get('http://localhost:8080/notes.json')
    //   .then((response) => {
    //     this.notesList = response.data.notes
    //     console.log(this.notesList)
    //   })
    //   .catch((err) => console.log(err))
  },
  methods: {
    addNewNote () {
      this.notesList.push({
        id: JSON.stringify(this.notesList.length),
        title: '',
        text: '',
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        isMenuVisible: false
      })

      this.$cookies.set('notesList', JSON.stringify(this.notesList))
    },
    toggleNoteMenu (note) {
      note.isMenuVisible = !note.isMenuVisible
    },
    changeNoteColor (note, color) {
      note.color = color
      note.isMenuVisible = false
    },
    deleteNote (index) {
      this.notesList.splice(index, 1)
      this.$cookies.set('notesList', JSON.stringify(this.notesList))
    },
    editNote () {
      this.$cookies.set('notesList', JSON.stringify(this.notesList))
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  /*.nav-wrapper {
    padding: 0 1rem;
  }*/

  /*.notes {
    width: calc(100% - 1rem);
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 1rem;
  }

  .note {
    width: calc(25% - 1rem);
    max-width: 100%;
    margin: 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .note:nth-child(1n) {
    margin-left: 0;
  }

  .note:nth-child(4n) {
    margin-right: 0;
  }

  .note-textarea {
    height: 125px !important;
  }*/

  /*input[type=text]:not(.browser-default) {
    height: 2.5rem !important;
    padding: 0 0.5rem;
    width: calc(100% - 1rem);
  }*/

  /*textarea.materialize-textarea {
    border-bottom: none !important;
    padding: 0.8rem 0.5rem;
  }*/

  /*textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: none !important;
    -webkit-box-shadow: 0 1px 0 0 #26a69a;
    box-shadow: none;
  }*/

  /*.menu {
    width: 33.3%;
    height: auto;
    cursor: pointer;
  }*/
</style>
