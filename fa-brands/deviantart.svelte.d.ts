/** @typedef {typeof __propDef.props}  DeviantartProps */
/** @typedef {typeof __propDef.events}  DeviantartEvents */
/** @typedef {typeof __propDef.slots}  DeviantartSlots */
export default class Deviantart extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DeviantartProps = typeof __propDef.props
export type DeviantartEvents = typeof __propDef.events
export type DeviantartSlots = typeof __propDef.slots
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
