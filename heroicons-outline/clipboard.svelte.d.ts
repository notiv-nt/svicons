/** @typedef {typeof __propDef.props}  ClipboardProps */
/** @typedef {typeof __propDef.events}  ClipboardEvents */
/** @typedef {typeof __propDef.slots}  ClipboardSlots */
export default class Clipboard extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ClipboardProps = typeof __propDef.props
export type ClipboardEvents = typeof __propDef.events
export type ClipboardSlots = typeof __propDef.slots
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
