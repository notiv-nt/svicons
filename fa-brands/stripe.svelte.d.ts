/** @typedef {typeof __propDef.props}  StripeProps */
/** @typedef {typeof __propDef.events}  StripeEvents */
/** @typedef {typeof __propDef.slots}  StripeSlots */
export default class Stripe extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StripeProps = typeof __propDef.props
export type StripeEvents = typeof __propDef.events
export type StripeSlots = typeof __propDef.slots
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
