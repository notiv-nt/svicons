/** @typedef {typeof __propDef.props}  MapProps */
/** @typedef {typeof __propDef.events}  MapEvents */
/** @typedef {typeof __propDef.slots}  MapSlots */
export default class Map extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MapProps = typeof __propDef.props
export type MapEvents = typeof __propDef.events
export type MapSlots = typeof __propDef.slots
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
