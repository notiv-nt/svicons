/** @typedef {typeof __propDef.props}  MoneroProps */
/** @typedef {typeof __propDef.events}  MoneroEvents */
/** @typedef {typeof __propDef.slots}  MoneroSlots */
export default class Monero extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MoneroProps = typeof __propDef.props
export type MoneroEvents = typeof __propDef.events
export type MoneroSlots = typeof __propDef.slots
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
