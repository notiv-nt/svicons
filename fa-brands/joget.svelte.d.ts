/** @typedef {typeof __propDef.props}  JogetProps */
/** @typedef {typeof __propDef.events}  JogetEvents */
/** @typedef {typeof __propDef.slots}  JogetSlots */
export default class Joget extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JogetProps = typeof __propDef.props
export type JogetEvents = typeof __propDef.events
export type JogetSlots = typeof __propDef.slots
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
