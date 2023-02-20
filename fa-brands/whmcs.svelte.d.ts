/** @typedef {typeof __propDef.props}  WhmcsProps */
/** @typedef {typeof __propDef.events}  WhmcsEvents */
/** @typedef {typeof __propDef.slots}  WhmcsSlots */
export default class Whmcs extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WhmcsProps = typeof __propDef.props
export type WhmcsEvents = typeof __propDef.events
export type WhmcsSlots = typeof __propDef.slots
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
