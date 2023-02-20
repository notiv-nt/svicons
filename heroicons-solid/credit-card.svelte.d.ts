/** @typedef {typeof __propDef.props}  CreditCardProps */
/** @typedef {typeof __propDef.events}  CreditCardEvents */
/** @typedef {typeof __propDef.slots}  CreditCardSlots */
export default class CreditCard extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CreditCardProps = typeof __propDef.props
export type CreditCardEvents = typeof __propDef.events
export type CreditCardSlots = typeof __propDef.slots
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
