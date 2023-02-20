/** @typedef {typeof __propDef.props}  GitterProps */
/** @typedef {typeof __propDef.events}  GitterEvents */
/** @typedef {typeof __propDef.slots}  GitterSlots */
export default class Gitter extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GitterProps = typeof __propDef.props
export type GitterEvents = typeof __propDef.events
export type GitterSlots = typeof __propDef.slots
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
