/** @typedef {typeof __propDef.props}  MusicNoteProps */
/** @typedef {typeof __propDef.events}  MusicNoteEvents */
/** @typedef {typeof __propDef.slots}  MusicNoteSlots */
export default class MusicNote extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MusicNoteProps = typeof __propDef.props
export type MusicNoteEvents = typeof __propDef.events
export type MusicNoteSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
