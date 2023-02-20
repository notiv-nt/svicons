/** @typedef {typeof __propDef.props}  WpressrProps */
/** @typedef {typeof __propDef.events}  WpressrEvents */
/** @typedef {typeof __propDef.slots}  WpressrSlots */
export default class Wpressr extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WpressrProps = typeof __propDef.props
export type WpressrEvents = typeof __propDef.events
export type WpressrSlots = typeof __propDef.slots
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
