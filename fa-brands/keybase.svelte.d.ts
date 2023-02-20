/** @typedef {typeof __propDef.props}  KeybaseProps */
/** @typedef {typeof __propDef.events}  KeybaseEvents */
/** @typedef {typeof __propDef.slots}  KeybaseSlots */
export default class Keybase extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type KeybaseProps = typeof __propDef.props
export type KeybaseEvents = typeof __propDef.events
export type KeybaseSlots = typeof __propDef.slots
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
