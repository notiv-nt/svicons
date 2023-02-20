/** @typedef {typeof __propDef.props}  GooglePlusGProps */
/** @typedef {typeof __propDef.events}  GooglePlusGEvents */
/** @typedef {typeof __propDef.slots}  GooglePlusGSlots */
export default class GooglePlusG extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GooglePlusGProps = typeof __propDef.props
export type GooglePlusGEvents = typeof __propDef.events
export type GooglePlusGSlots = typeof __propDef.slots
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
