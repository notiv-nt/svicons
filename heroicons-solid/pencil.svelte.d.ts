/** @typedef {typeof __propDef.props}  PencilProps */
/** @typedef {typeof __propDef.events}  PencilEvents */
/** @typedef {typeof __propDef.slots}  PencilSlots */
export default class Pencil extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PencilProps = typeof __propDef.props
export type PencilEvents = typeof __propDef.events
export type PencilSlots = typeof __propDef.slots
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
