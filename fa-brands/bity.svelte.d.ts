/** @typedef {typeof __propDef.props}  BityProps */
/** @typedef {typeof __propDef.events}  BityEvents */
/** @typedef {typeof __propDef.slots}  BitySlots */
export default class Bity extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BityProps = typeof __propDef.props
export type BityEvents = typeof __propDef.events
export type BitySlots = typeof __propDef.slots
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
