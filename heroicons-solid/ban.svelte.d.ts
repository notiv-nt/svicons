/** @typedef {typeof __propDef.props}  BanProps */
/** @typedef {typeof __propDef.events}  BanEvents */
/** @typedef {typeof __propDef.slots}  BanSlots */
export default class Ban extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BanProps = typeof __propDef.props
export type BanEvents = typeof __propDef.events
export type BanSlots = typeof __propDef.slots
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
