/** @typedef {typeof __propDef.props}  ChatProps */
/** @typedef {typeof __propDef.events}  ChatEvents */
/** @typedef {typeof __propDef.slots}  ChatSlots */
export default class Chat extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ChatProps = typeof __propDef.props
export type ChatEvents = typeof __propDef.events
export type ChatSlots = typeof __propDef.slots
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
