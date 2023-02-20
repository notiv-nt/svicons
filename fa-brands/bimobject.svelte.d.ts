/** @typedef {typeof __propDef.props}  BimobjectProps */
/** @typedef {typeof __propDef.events}  BimobjectEvents */
/** @typedef {typeof __propDef.slots}  BimobjectSlots */
export default class Bimobject extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BimobjectProps = typeof __propDef.props
export type BimobjectEvents = typeof __propDef.events
export type BimobjectSlots = typeof __propDef.slots
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
