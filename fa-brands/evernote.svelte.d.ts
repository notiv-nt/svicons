/** @typedef {typeof __propDef.props}  EvernoteProps */
/** @typedef {typeof __propDef.events}  EvernoteEvents */
/** @typedef {typeof __propDef.slots}  EvernoteSlots */
export default class Evernote extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EvernoteProps = typeof __propDef.props
export type EvernoteEvents = typeof __propDef.events
export type EvernoteSlots = typeof __propDef.slots
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
