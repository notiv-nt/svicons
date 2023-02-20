/** @typedef {typeof __propDef.props}  DuplicateProps */
/** @typedef {typeof __propDef.events}  DuplicateEvents */
/** @typedef {typeof __propDef.slots}  DuplicateSlots */
export default class Duplicate extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DuplicateProps = typeof __propDef.props
export type DuplicateEvents = typeof __propDef.events
export type DuplicateSlots = typeof __propDef.slots
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
