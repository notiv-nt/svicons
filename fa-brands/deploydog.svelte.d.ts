/** @typedef {typeof __propDef.props}  DeploydogProps */
/** @typedef {typeof __propDef.events}  DeploydogEvents */
/** @typedef {typeof __propDef.slots}  DeploydogSlots */
export default class Deploydog extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DeploydogProps = typeof __propDef.props
export type DeploydogEvents = typeof __propDef.events
export type DeploydogSlots = typeof __propDef.slots
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
