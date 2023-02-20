/** @typedef {typeof __propDef.props}  GlobeAltProps */
/** @typedef {typeof __propDef.events}  GlobeAltEvents */
/** @typedef {typeof __propDef.slots}  GlobeAltSlots */
export default class GlobeAlt extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GlobeAltProps = typeof __propDef.props
export type GlobeAltEvents = typeof __propDef.events
export type GlobeAltSlots = typeof __propDef.slots
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
