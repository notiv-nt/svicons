/** @typedef {typeof __propDef.props}  ViacoinProps */
/** @typedef {typeof __propDef.events}  ViacoinEvents */
/** @typedef {typeof __propDef.slots}  ViacoinSlots */
export default class Viacoin extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ViacoinProps = typeof __propDef.props
export type ViacoinEvents = typeof __propDef.events
export type ViacoinSlots = typeof __propDef.slots
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
