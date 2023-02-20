/** @typedef {typeof __propDef.props}  KeyProps */
/** @typedef {typeof __propDef.events}  KeyEvents */
/** @typedef {typeof __propDef.slots}  KeySlots */
export default class Key extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type KeyProps = typeof __propDef.props
export type KeyEvents = typeof __propDef.events
export type KeySlots = typeof __propDef.slots
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
