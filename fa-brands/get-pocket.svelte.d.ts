/** @typedef {typeof __propDef.props}  GetPocketProps */
/** @typedef {typeof __propDef.events}  GetPocketEvents */
/** @typedef {typeof __propDef.slots}  GetPocketSlots */
export default class GetPocket extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GetPocketProps = typeof __propDef.props
export type GetPocketEvents = typeof __propDef.events
export type GetPocketSlots = typeof __propDef.slots
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
