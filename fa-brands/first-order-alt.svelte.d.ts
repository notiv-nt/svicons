/** @typedef {typeof __propDef.props}  FirstOrderAltProps */
/** @typedef {typeof __propDef.events}  FirstOrderAltEvents */
/** @typedef {typeof __propDef.slots}  FirstOrderAltSlots */
export default class FirstOrderAlt extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FirstOrderAltProps = typeof __propDef.props
export type FirstOrderAltEvents = typeof __propDef.events
export type FirstOrderAltSlots = typeof __propDef.slots
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
