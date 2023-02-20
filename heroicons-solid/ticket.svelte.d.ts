/** @typedef {typeof __propDef.props}  TicketProps */
/** @typedef {typeof __propDef.events}  TicketEvents */
/** @typedef {typeof __propDef.slots}  TicketSlots */
export default class Ticket extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TicketProps = typeof __propDef.props
export type TicketEvents = typeof __propDef.events
export type TicketSlots = typeof __propDef.slots
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
