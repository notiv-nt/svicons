/** @typedef {typeof __propDef.props}  ReplyProps */
/** @typedef {typeof __propDef.events}  ReplyEvents */
/** @typedef {typeof __propDef.slots}  ReplySlots */
export default class Reply extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ReplyProps = typeof __propDef.props
export type ReplyEvents = typeof __propDef.events
export type ReplySlots = typeof __propDef.slots
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
