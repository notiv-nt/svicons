/** @typedef {typeof __propDef.props}  WixProps */
/** @typedef {typeof __propDef.events}  WixEvents */
/** @typedef {typeof __propDef.slots}  WixSlots */
export default class Wix extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WixProps = typeof __propDef.props
export type WixEvents = typeof __propDef.events
export type WixSlots = typeof __propDef.slots
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
