/** @typedef {typeof __propDef.props}  AngularProps */
/** @typedef {typeof __propDef.events}  AngularEvents */
/** @typedef {typeof __propDef.slots}  AngularSlots */
export default class Angular extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AngularProps = typeof __propDef.props
export type AngularEvents = typeof __propDef.events
export type AngularSlots = typeof __propDef.slots
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
