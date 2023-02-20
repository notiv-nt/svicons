/** @typedef {typeof __propDef.props}  GlideGProps */
/** @typedef {typeof __propDef.events}  GlideGEvents */
/** @typedef {typeof __propDef.slots}  GlideGSlots */
export default class GlideG extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GlideGProps = typeof __propDef.props
export type GlideGEvents = typeof __propDef.events
export type GlideGSlots = typeof __propDef.slots
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
