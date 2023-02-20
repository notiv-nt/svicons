/** @typedef {typeof __propDef.props}  PhoneIncomingProps */
/** @typedef {typeof __propDef.events}  PhoneIncomingEvents */
/** @typedef {typeof __propDef.slots}  PhoneIncomingSlots */
export default class PhoneIncoming extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhoneIncomingProps = typeof __propDef.props
export type PhoneIncomingEvents = typeof __propDef.events
export type PhoneIncomingSlots = typeof __propDef.slots
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
