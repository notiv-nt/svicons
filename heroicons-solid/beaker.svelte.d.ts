/** @typedef {typeof __propDef.props}  BeakerProps */
/** @typedef {typeof __propDef.events}  BeakerEvents */
/** @typedef {typeof __propDef.slots}  BeakerSlots */
export default class Beaker extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BeakerProps = typeof __propDef.props
export type BeakerEvents = typeof __propDef.events
export type BeakerSlots = typeof __propDef.slots
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
