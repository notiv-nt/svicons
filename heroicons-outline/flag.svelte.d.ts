/** @typedef {typeof __propDef.props}  FlagProps */
/** @typedef {typeof __propDef.events}  FlagEvents */
/** @typedef {typeof __propDef.slots}  FlagSlots */
export default class Flag extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FlagProps = typeof __propDef.props
export type FlagEvents = typeof __propDef.events
export type FlagSlots = typeof __propDef.slots
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
