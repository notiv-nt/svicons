/** @typedef {typeof __propDef.props}  UnityProps */
/** @typedef {typeof __propDef.events}  UnityEvents */
/** @typedef {typeof __propDef.slots}  UnitySlots */
export default class Unity extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UnityProps = typeof __propDef.props
export type UnityEvents = typeof __propDef.events
export type UnitySlots = typeof __propDef.slots
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
