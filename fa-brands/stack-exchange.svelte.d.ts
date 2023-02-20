/** @typedef {typeof __propDef.props}  StackExchangeProps */
/** @typedef {typeof __propDef.events}  StackExchangeEvents */
/** @typedef {typeof __propDef.slots}  StackExchangeSlots */
export default class StackExchange extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StackExchangeProps = typeof __propDef.props
export type StackExchangeEvents = typeof __propDef.events
export type StackExchangeSlots = typeof __propDef.slots
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
