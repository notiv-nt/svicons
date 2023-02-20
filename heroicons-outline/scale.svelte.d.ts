/** @typedef {typeof __propDef.props}  ScaleProps */
/** @typedef {typeof __propDef.events}  ScaleEvents */
/** @typedef {typeof __propDef.slots}  ScaleSlots */
export default class Scale extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ScaleProps = typeof __propDef.props
export type ScaleEvents = typeof __propDef.events
export type ScaleSlots = typeof __propDef.slots
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
