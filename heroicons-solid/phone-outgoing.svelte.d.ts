/** @typedef {typeof __propDef.props}  PhoneOutgoingProps */
/** @typedef {typeof __propDef.events}  PhoneOutgoingEvents */
/** @typedef {typeof __propDef.slots}  PhoneOutgoingSlots */
export default class PhoneOutgoing extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhoneOutgoingProps = typeof __propDef.props
export type PhoneOutgoingEvents = typeof __propDef.events
export type PhoneOutgoingSlots = typeof __propDef.slots
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
