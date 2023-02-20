/** @typedef {typeof __propDef.props}  MedappsProps */
/** @typedef {typeof __propDef.events}  MedappsEvents */
/** @typedef {typeof __propDef.slots}  MedappsSlots */
export default class Medapps extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MedappsProps = typeof __propDef.props
export type MedappsEvents = typeof __propDef.events
export type MedappsSlots = typeof __propDef.slots
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
