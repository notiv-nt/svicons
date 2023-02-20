/** @typedef {typeof __propDef.props}  EthereumProps */
/** @typedef {typeof __propDef.events}  EthereumEvents */
/** @typedef {typeof __propDef.slots}  EthereumSlots */
export default class Ethereum extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EthereumProps = typeof __propDef.props
export type EthereumEvents = typeof __propDef.events
export type EthereumSlots = typeof __propDef.slots
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
