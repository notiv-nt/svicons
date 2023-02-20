/** @typedef {typeof __propDef.props}  WoduProps */
/** @typedef {typeof __propDef.events}  WoduEvents */
/** @typedef {typeof __propDef.slots}  WoduSlots */
export default class Wodu extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WoduProps = typeof __propDef.props
export type WoduEvents = typeof __propDef.events
export type WoduSlots = typeof __propDef.slots
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
