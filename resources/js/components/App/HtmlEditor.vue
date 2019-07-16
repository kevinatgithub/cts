<template>
    <div class="html-editor">
        <editor-menu-card :editor="editor" />
        <editor-content :editor="editor" style="border:1px solid #000;" />
    </div>
</template>

<script>
// Import the editor
import EditorMenuCard from './HtmlEditor/EditorMenuCard'
import { Editor, EditorContent  } from 'tiptap'
import Paragraph from './HtmlEditor/EditorMenuCard/paragraph';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions'

export default {
  props : ['report'],
  components: {
    EditorContent,
    EditorMenuCard,
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
        extensions: [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [1, 2, 3] }),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new TodoItem(),
            new TodoList(),
            new Link(),
            new Bold(),
            new Code(),
            new Italic(),
            new Strike(),
            new Underline(),
            new History(),
            new Table({
                resizable: true,
            }),
            new TableHeader(),
            new TableCell(),
            new TableRow(),
            new Paragraph(),
        ],
        content: this.report.html + "&nbsp;",
    })
    window.tiptapEditor = this.editor
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style>
.html-editor table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    width:100%;
}
.html-editor td {
    border:1px solid grey;
}
</style>
