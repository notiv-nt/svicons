/** @typedef {typeof __propDef.props}  AccusoftProps */
/** @typedef {typeof __propDef.events}  AccusoftEvents */
/** @typedef {typeof __propDef.slots}  AccusoftSlots */
export default class Accusoft extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AccusoftProps = typeof __propDef.props
export type AccusoftEvents = typeof __propDef.events
export type AccusoftSlots = typeof __propDef.slots
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
