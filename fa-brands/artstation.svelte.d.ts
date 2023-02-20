/** @typedef {typeof __propDef.props}  ArtstationProps */
/** @typedef {typeof __propDef.events}  ArtstationEvents */
/** @typedef {typeof __propDef.slots}  ArtstationSlots */
export default class Artstation extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ArtstationProps = typeof __propDef.props
export type ArtstationEvents = typeof __propDef.events
export type ArtstationSlots = typeof __propDef.slots
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
