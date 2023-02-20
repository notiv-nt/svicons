/** @typedef {typeof __propDef.props}  ExclamationProps */
/** @typedef {typeof __propDef.events}  ExclamationEvents */
/** @typedef {typeof __propDef.slots}  ExclamationSlots */
export default class Exclamation extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ExclamationProps = typeof __propDef.props
export type ExclamationEvents = typeof __propDef.events
export type ExclamationSlots = typeof __propDef.slots
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
