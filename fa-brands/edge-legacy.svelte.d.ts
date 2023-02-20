/** @typedef {typeof __propDef.props}  EdgeLegacyProps */
/** @typedef {typeof __propDef.events}  EdgeLegacyEvents */
/** @typedef {typeof __propDef.slots}  EdgeLegacySlots */
export default class EdgeLegacy extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EdgeLegacyProps = typeof __propDef.props
export type EdgeLegacyEvents = typeof __propDef.events
export type EdgeLegacySlots = typeof __propDef.slots
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
