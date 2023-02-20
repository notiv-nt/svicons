/** @typedef {typeof __propDef.props}  SquarespaceProps */
/** @typedef {typeof __propDef.events}  SquarespaceEvents */
/** @typedef {typeof __propDef.slots}  SquarespaceSlots */
export default class Squarespace extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SquarespaceProps = typeof __propDef.props
export type SquarespaceEvents = typeof __propDef.events
export type SquarespaceSlots = typeof __propDef.slots
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
