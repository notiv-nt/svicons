/** @typedef {typeof __propDef.props}  ApperProps */
/** @typedef {typeof __propDef.events}  ApperEvents */
/** @typedef {typeof __propDef.slots}  ApperSlots */
export default class Apper extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ApperProps = typeof __propDef.props
export type ApperEvents = typeof __propDef.events
export type ApperSlots = typeof __propDef.slots
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
