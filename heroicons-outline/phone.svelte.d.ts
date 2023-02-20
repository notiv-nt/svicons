/** @typedef {typeof __propDef.props}  PhoneProps */
/** @typedef {typeof __propDef.events}  PhoneEvents */
/** @typedef {typeof __propDef.slots}  PhoneSlots */
export default class Phone extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhoneProps = typeof __propDef.props
export type PhoneEvents = typeof __propDef.events
export type PhoneSlots = typeof __propDef.slots
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
