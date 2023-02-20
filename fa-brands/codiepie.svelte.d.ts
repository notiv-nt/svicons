/** @typedef {typeof __propDef.props}  CodiepieProps */
/** @typedef {typeof __propDef.events}  CodiepieEvents */
/** @typedef {typeof __propDef.slots}  CodiepieSlots */
export default class Codiepie extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CodiepieProps = typeof __propDef.props
export type CodiepieEvents = typeof __propDef.events
export type CodiepieSlots = typeof __propDef.slots
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
