/** @typedef {typeof __propDef.props}  StackpathProps */
/** @typedef {typeof __propDef.events}  StackpathEvents */
/** @typedef {typeof __propDef.slots}  StackpathSlots */
export default class Stackpath extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StackpathProps = typeof __propDef.props
export type StackpathEvents = typeof __propDef.events
export type StackpathSlots = typeof __propDef.slots
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
