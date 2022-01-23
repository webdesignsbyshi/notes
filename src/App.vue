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

  <Notes :notesList="notesList"
         :colors="colors" />
</template>

<script>
import Notes from '@/components/notes.vue'

export default {
  components: {
    Notes
  },
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
</style>
