/** @typedef {typeof __propDef.props}  HipsProps */
/** @typedef {typeof __propDef.events}  HipsEvents */
/** @typedef {typeof __propDef.slots}  HipsSlots */
export default class Hips extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HipsProps = typeof __propDef.props
export type HipsEvents = typeof __propDef.events
export type HipsSlots = typeof __propDef.slots
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
