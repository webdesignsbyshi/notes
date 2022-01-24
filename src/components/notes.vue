<template>
  <div class="notes" >
    <div v-if="notes.length === 0" class="notes__empty-message">
      You do not have any notes to view. Click "Add Note" to begin!
    </div>
    <div v-for="(note, i) in notes"
         :key="i"
         :style="{background: note.color}" class="notes__note">
      <i @click="toggleNoteMenu(note)" class="material-icons notes__icon">more_vert</i>
      <ul v-if="note.isMenuVisible"
          v-click-away="onClickAwayFromMenu" class="notes-dropdown dropdown-content">
        <li @click="deleteNote(i)">
          <a href="#!" class="notes-dropdown__link">
            <i @click="deleteNote(i)" class="notes-dropdown__icon material-icons">delete</i>
            Delete
          </a>
        </li>
        <div v-if="note.isMenuVisible" class="notes-dropdown__colors-wrapper">
          <div v-for="(color, i) in colors"
               :key="i"
               @click="changeNoteColor(note, color)"
               :style="{background: color}" class="notes-dropdown__colors menu"></div>
        </div>
      </ul>
      <input v-model="note.title" type="text" class="notes__input" maxlength="35">
      <textarea v-model="note.text"
                :keyup="editNote()" class="notes__textarea materialize-textarea"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['notesList', 'colors'],
  data () {
    return {
      notes: this.notesList
    }
  },
  methods: {
    toggleNoteMenu (note) {
      note.isMenuVisible = !note.isMenuVisible
    },
    changeNoteColor (note, color) {
      note.color = color
      note.isMenuVisible = false
    },
    deleteNote (index) {
      this.notes.splice(index, 1)
      this.$cookies.set('notesList', JSON.stringify(this.notes))
    },
    editNote () {
      this.$cookies.set('notesList', JSON.stringify(this.notes))
    },
    onClickAwayFromMenu () {
      this.notes.forEach(note => {
        note.isMenuVisible = false
      })
    }
  }
}
</script>
