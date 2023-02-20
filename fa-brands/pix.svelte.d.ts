/** @typedef {typeof __propDef.props}  PixProps */
/** @typedef {typeof __propDef.events}  PixEvents */
/** @typedef {typeof __propDef.slots}  PixSlots */
export default class Pix extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PixProps = typeof __propDef.props
export type PixEvents = typeof __propDef.events
export type PixSlots = typeof __propDef.slots
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
