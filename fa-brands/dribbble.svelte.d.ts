/** @typedef {typeof __propDef.props}  DribbbleProps */
/** @typedef {typeof __propDef.events}  DribbbleEvents */
/** @typedef {typeof __propDef.slots}  DribbbleSlots */
export default class Dribbble extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DribbbleProps = typeof __propDef.props
export type DribbbleEvents = typeof __propDef.events
export type DribbbleSlots = typeof __propDef.slots
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
