/** @typedef {typeof __propDef.props}  BootstrapProps */
/** @typedef {typeof __propDef.events}  BootstrapEvents */
/** @typedef {typeof __propDef.slots}  BootstrapSlots */
export default class Bootstrap extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BootstrapProps = typeof __propDef.props
export type BootstrapEvents = typeof __propDef.events
export type BootstrapSlots = typeof __propDef.slots
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
