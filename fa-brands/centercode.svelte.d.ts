/** @typedef {typeof __propDef.props}  CentercodeProps */
/** @typedef {typeof __propDef.events}  CentercodeEvents */
/** @typedef {typeof __propDef.slots}  CentercodeSlots */
export default class Centercode extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CentercodeProps = typeof __propDef.props
export type CentercodeEvents = typeof __propDef.events
export type CentercodeSlots = typeof __propDef.slots
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
