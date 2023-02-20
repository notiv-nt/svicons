/** @typedef {typeof __propDef.props}  MedrtProps */
/** @typedef {typeof __propDef.events}  MedrtEvents */
/** @typedef {typeof __propDef.slots}  MedrtSlots */
export default class Medrt extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MedrtProps = typeof __propDef.props
export type MedrtEvents = typeof __propDef.events
export type MedrtSlots = typeof __propDef.slots
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
