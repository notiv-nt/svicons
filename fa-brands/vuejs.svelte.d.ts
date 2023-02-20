/** @typedef {typeof __propDef.props}  VuejsProps */
/** @typedef {typeof __propDef.events}  VuejsEvents */
/** @typedef {typeof __propDef.slots}  VuejsSlots */
export default class Vuejs extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type VuejsProps = typeof __propDef.props
export type VuejsEvents = typeof __propDef.events
export type VuejsSlots = typeof __propDef.slots
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
