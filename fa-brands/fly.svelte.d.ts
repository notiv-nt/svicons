/** @typedef {typeof __propDef.props}  FlyProps */
/** @typedef {typeof __propDef.events}  FlyEvents */
/** @typedef {typeof __propDef.slots}  FlySlots */
export default class Fly extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FlyProps = typeof __propDef.props
export type FlyEvents = typeof __propDef.events
export type FlySlots = typeof __propDef.slots
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
