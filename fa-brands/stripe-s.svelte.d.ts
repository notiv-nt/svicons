/** @typedef {typeof __propDef.props}  StripeSProps */
/** @typedef {typeof __propDef.events}  StripeSEvents */
/** @typedef {typeof __propDef.slots}  StripeSSlots */
export default class StripeS extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StripeSProps = typeof __propDef.props
export type StripeSEvents = typeof __propDef.events
export type StripeSSlots = typeof __propDef.slots
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
