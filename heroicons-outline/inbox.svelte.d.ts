/** @typedef {typeof __propDef.props}  InboxProps */
/** @typedef {typeof __propDef.events}  InboxEvents */
/** @typedef {typeof __propDef.slots}  InboxSlots */
export default class Inbox extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type InboxProps = typeof __propDef.props
export type InboxEvents = typeof __propDef.events
export type InboxSlots = typeof __propDef.slots
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
