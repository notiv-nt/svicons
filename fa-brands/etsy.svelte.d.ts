/** @typedef {typeof __propDef.props}  EtsyProps */
/** @typedef {typeof __propDef.events}  EtsyEvents */
/** @typedef {typeof __propDef.slots}  EtsySlots */
export default class Etsy extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EtsyProps = typeof __propDef.props
export type EtsyEvents = typeof __propDef.events
export type EtsySlots = typeof __propDef.slots
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
