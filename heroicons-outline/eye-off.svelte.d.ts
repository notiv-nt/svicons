/** @typedef {typeof __propDef.props}  EyeOffProps */
/** @typedef {typeof __propDef.events}  EyeOffEvents */
/** @typedef {typeof __propDef.slots}  EyeOffSlots */
export default class EyeOff extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EyeOffProps = typeof __propDef.props
export type EyeOffEvents = typeof __propDef.events
export type EyeOffSlots = typeof __propDef.slots
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
