/** @typedef {typeof __propDef.props}  ServerProps */
/** @typedef {typeof __propDef.events}  ServerEvents */
/** @typedef {typeof __propDef.slots}  ServerSlots */
export default class Server extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ServerProps = typeof __propDef.props
export type ServerEvents = typeof __propDef.events
export type ServerSlots = typeof __propDef.slots
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
