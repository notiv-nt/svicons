/** @typedef {typeof __propDef.props}  DribbbleSquareProps */
/** @typedef {typeof __propDef.events}  DribbbleSquareEvents */
/** @typedef {typeof __propDef.slots}  DribbbleSquareSlots */
export default class DribbbleSquare extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DribbbleSquareProps = typeof __propDef.props
export type DribbbleSquareEvents = typeof __propDef.events
export type DribbbleSquareSlots = typeof __propDef.slots
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
