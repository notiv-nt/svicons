/** @typedef {typeof __propDef.props}  FreeCodeCampProps */
/** @typedef {typeof __propDef.events}  FreeCodeCampEvents */
/** @typedef {typeof __propDef.slots}  FreeCodeCampSlots */
export default class FreeCodeCamp extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FreeCodeCampProps = typeof __propDef.props
export type FreeCodeCampEvents = typeof __propDef.events
export type FreeCodeCampSlots = typeof __propDef.slots
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
