<template>
  <div class="notes">
    <div v-for="(note, i) in notesList" :key="i" class="note" style="background-color: {{note.color}}">
      {{note.title}}
        <input v-model="note.title" id="first_name" type="text" class="validate">
        <textarea v-model="note.text" id="textarea1" class="materialize-textarea"></textarea>
    </div>
  </div>
</template>

<script>
    import notes from '../assets/notes.json'

    export default {
        name: 'Notes',
        data() {
            return {
                notesList: notes
            }
        }
        components: {}
    }
</script>