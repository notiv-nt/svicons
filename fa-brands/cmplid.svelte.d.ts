/** @typedef {typeof __propDef.props}  CmplidProps */
/** @typedef {typeof __propDef.events}  CmplidEvents */
/** @typedef {typeof __propDef.slots}  CmplidSlots */
export default class Cmplid extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CmplidProps = typeof __propDef.props
export type CmplidEvents = typeof __propDef.events
export type CmplidSlots = typeof __propDef.slots
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
