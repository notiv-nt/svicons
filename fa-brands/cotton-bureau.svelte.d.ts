/** @typedef {typeof __propDef.props}  CottonBureauProps */
/** @typedef {typeof __propDef.events}  CottonBureauEvents */
/** @typedef {typeof __propDef.slots}  CottonBureauSlots */
export default class CottonBureau extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CottonBureauProps = typeof __propDef.props
export type CottonBureauEvents = typeof __propDef.events
export type CottonBureauSlots = typeof __propDef.slots
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
