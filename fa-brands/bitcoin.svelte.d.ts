/** @typedef {typeof __propDef.props}  BitcoinProps */
/** @typedef {typeof __propDef.events}  BitcoinEvents */
/** @typedef {typeof __propDef.slots}  BitcoinSlots */
export default class Bitcoin extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BitcoinProps = typeof __propDef.props
export type BitcoinEvents = typeof __propDef.events
export type BitcoinSlots = typeof __propDef.slots
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
