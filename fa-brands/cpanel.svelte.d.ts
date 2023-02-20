/** @typedef {typeof __propDef.props}  CpanelProps */
/** @typedef {typeof __propDef.events}  CpanelEvents */
/** @typedef {typeof __propDef.slots}  CpanelSlots */
export default class Cpanel extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CpanelProps = typeof __propDef.props
export type CpanelEvents = typeof __propDef.events
export type CpanelSlots = typeof __propDef.slots
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
