/** @typedef {typeof __propDef.props}  EmberProps */
/** @typedef {typeof __propDef.events}  EmberEvents */
/** @typedef {typeof __propDef.slots}  EmberSlots */
export default class Ember extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EmberProps = typeof __propDef.props
export type EmberEvents = typeof __propDef.events
export type EmberSlots = typeof __propDef.slots
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
