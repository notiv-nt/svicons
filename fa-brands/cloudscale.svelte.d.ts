/** @typedef {typeof __propDef.props}  CloudscaleProps */
/** @typedef {typeof __propDef.events}  CloudscaleEvents */
/** @typedef {typeof __propDef.slots}  CloudscaleSlots */
export default class Cloudscale extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CloudscaleProps = typeof __propDef.props
export type CloudscaleEvents = typeof __propDef.events
export type CloudscaleSlots = typeof __propDef.slots
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
