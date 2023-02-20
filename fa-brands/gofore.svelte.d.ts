/** @typedef {typeof __propDef.props}  GoforeProps */
/** @typedef {typeof __propDef.events}  GoforeEvents */
/** @typedef {typeof __propDef.slots}  GoforeSlots */
export default class Gofore extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GoforeProps = typeof __propDef.props
export type GoforeEvents = typeof __propDef.events
export type GoforeSlots = typeof __propDef.slots
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
