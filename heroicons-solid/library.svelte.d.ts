/** @typedef {typeof __propDef.props}  LibraryProps */
/** @typedef {typeof __propDef.events}  LibraryEvents */
/** @typedef {typeof __propDef.slots}  LibrarySlots */
export default class Library extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LibraryProps = typeof __propDef.props
export type LibraryEvents = typeof __propDef.events
export type LibrarySlots = typeof __propDef.slots
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
