/** @typedef {typeof __propDef.props}  FedexProps */
/** @typedef {typeof __propDef.events}  FedexEvents */
/** @typedef {typeof __propDef.slots}  FedexSlots */
export default class Fedex extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FedexProps = typeof __propDef.props
export type FedexEvents = typeof __propDef.events
export type FedexSlots = typeof __propDef.slots
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
