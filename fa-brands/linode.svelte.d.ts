/** @typedef {typeof __propDef.props}  LinodeProps */
/** @typedef {typeof __propDef.events}  LinodeEvents */
/** @typedef {typeof __propDef.slots}  LinodeSlots */
export default class Linode extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LinodeProps = typeof __propDef.props
export type LinodeEvents = typeof __propDef.events
export type LinodeSlots = typeof __propDef.slots
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
