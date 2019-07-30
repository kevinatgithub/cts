<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar">

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
                title="Bold"
                >
                <i class="fa fa-bold"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
                title="Italic"
                >
                <i class="fa fa-italic"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
                title="Strikethrough"
                >
                <i class="fa fa-strikethrough"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
                title="Underline"
                >
                <i class="fa fa-underline"></i>
                </b-button>

                <!-- <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click="commands.code"
                >
                <i class="fa fa-code"></i>
                </b-button> -->

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
                title="Paragraph"
                >
                <i class="fa fa-paragraph"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
                title="Heading 1"
                >
                H1
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
                title="Heading 2"
                >
                H2
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
                title="Heading 3"
                >
                H3
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
                title="Un-ordered List"
                >
                <i class="fa fa-list-ul"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click="commands.ordered_list"
                title="Ordered List"
                >
                <i class="fa fa-list-ol"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
                title="Quote"
                >
                <i class="fa fa-quote-right"></i>
                </b-button>

                <b-button size="md"
                  class="menubar__button"
                  @click="commands.paragraph({ textAlign: 'left' })"
                  title="Align Left"
                >
                  <i class="fa fa-align-left"></i>
                </b-button>
                <b-button size="md"
                  class="menubar__button"
                  @click="commands.paragraph({ textAlign: 'center' })"
                  title="Align Center"
                >
                  <i class="fa fa-align-center"></i>
                </b-button>
                <b-button size="md"
                  class="menubar__button"
                  @click="commands.paragraph({ textAlign: 'right' })"
                  title="Align Right"
                >
                  <i class="fa fa-align-right"></i>
                </b-button>

                <!-- <b-button size="md"
                class="menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click="commands.code_block"
                >
                <i class="fa fa-code"></i>
                </b-button> -->

                <b-button size="md"
                class="menubar__button"
                @click="commands.horizontal_rule"
                title="Horizontal Rule"
                >
                <i class="fa fa-minus"></i>
                </b-button>

                <b-button size="md"
                class="menubar__button"
                @click="commands.undo"
                title="Undo"
                >
                <i class="fa fa-undo"></i>
                </b-button>

                <b-button
                  class="menubar__button"
                  @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
                  title="Create Table"
                >
                  <icon path="table" size="24" />
                </b-button>

                <!-- <b-button size="md"
                  class="menubar__button"
                  @click="createTableBordered"
                  title="Create Table Bordered"
                >
                  TB
                </b-button> -->

                <span v-if="isActive.table()">
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.deleteTable"
                    title="Remove Table"
                  >
                    <icon path="delete_table" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.addColumnBefore"
                    title="Add Column Before"
                  >
                    <icon path="add_col_before" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.addColumnAfter"
                    title="Add Column After"
                  >
                    <icon path="add_col_after" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.deleteColumn"
                    title="Remove Column"
                  >
                    <icon path="delete_col" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.addRowBefore"
                    title="Add Row Before"
                  >
                    <icon path="add_row_before" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.addRowAfter"
                    title="Add Row After"
                  >
                    <icon path="add_row_after" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.deleteRow"
                    title="Delete Row"
                  >
                    <icon path="delete_row" />
                  </b-button>
                  <b-button size="md"
                    class="menubar__button"
                    @click="commands.toggleCellMerge"
                    title="Toggle Cell Merge"
                  >
                    <icon path="combine_cells" />
                  </b-button>
                </span>
            </div>
        </editor-menu-bar>
    </div>
</template>

<script>
import Icon from './Icon'
import { EditorMenuBar } from 'tiptap'
import {borderedTable} from './helpers'
export default {
  props : ['editor','position'],
  components: {
    Icon,
    EditorMenuBar,
  },
  methods : {
    createTableBordered(){
      let html = window.tiptapEditor.getHTML()
      html = borderedTable(html,this.position)
      window.tiptapEditor.setContent(html)
    }
  }
}
</script>

