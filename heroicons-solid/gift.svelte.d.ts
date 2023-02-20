/** @typedef {typeof __propDef.props}  GiftProps */
/** @typedef {typeof __propDef.events}  GiftEvents */
/** @typedef {typeof __propDef.slots}  GiftSlots */
export default class Gift extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GiftProps = typeof __propDef.props
export type GiftEvents = typeof __propDef.events
export type GiftSlots = typeof __propDef.slots
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
