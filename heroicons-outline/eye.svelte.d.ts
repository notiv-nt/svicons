/** @typedef {typeof __propDef.props}  EyeProps */
/** @typedef {typeof __propDef.events}  EyeEvents */
/** @typedef {typeof __propDef.slots}  EyeSlots */
export default class Eye extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EyeProps = typeof __propDef.props
export type EyeEvents = typeof __propDef.events
export type EyeSlots = typeof __propDef.slots
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
