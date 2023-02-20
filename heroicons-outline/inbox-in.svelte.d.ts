/** @typedef {typeof __propDef.props}  InboxInProps */
/** @typedef {typeof __propDef.events}  InboxInEvents */
/** @typedef {typeof __propDef.slots}  InboxInSlots */
export default class InboxIn extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type InboxInProps = typeof __propDef.props
export type InboxInEvents = typeof __propDef.events
export type InboxInSlots = typeof __propDef.slots
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
