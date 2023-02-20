/** @typedef {typeof __propDef.props}  MegaportProps */
/** @typedef {typeof __propDef.events}  MegaportEvents */
/** @typedef {typeof __propDef.slots}  MegaportSlots */
export default class Megaport extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MegaportProps = typeof __propDef.props
export type MegaportEvents = typeof __propDef.events
export type MegaportSlots = typeof __propDef.slots
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
