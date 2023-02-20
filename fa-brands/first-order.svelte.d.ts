/** @typedef {typeof __propDef.props}  FirstOrderProps */
/** @typedef {typeof __propDef.events}  FirstOrderEvents */
/** @typedef {typeof __propDef.slots}  FirstOrderSlots */
export default class FirstOrder extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FirstOrderProps = typeof __propDef.props
export type FirstOrderEvents = typeof __propDef.events
export type FirstOrderSlots = typeof __propDef.slots
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
