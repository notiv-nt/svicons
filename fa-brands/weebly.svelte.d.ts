/** @typedef {typeof __propDef.props}  WeeblyProps */
/** @typedef {typeof __propDef.events}  WeeblyEvents */
/** @typedef {typeof __propDef.slots}  WeeblySlots */
export default class Weebly extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WeeblyProps = typeof __propDef.props
export type WeeblyEvents = typeof __propDef.events
export type WeeblySlots = typeof __propDef.slots
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
