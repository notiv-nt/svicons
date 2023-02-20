/** @typedef {typeof __propDef.props}  WifiProps */
/** @typedef {typeof __propDef.events}  WifiEvents */
/** @typedef {typeof __propDef.slots}  WifiSlots */
export default class Wifi extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WifiProps = typeof __propDef.props
export type WifiEvents = typeof __propDef.events
export type WifiSlots = typeof __propDef.slots
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
