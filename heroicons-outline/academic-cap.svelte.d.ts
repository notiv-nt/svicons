/** @typedef {typeof __propDef.props}  AcademicCapProps */
/** @typedef {typeof __propDef.events}  AcademicCapEvents */
/** @typedef {typeof __propDef.slots}  AcademicCapSlots */
export default class AcademicCap extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AcademicCapProps = typeof __propDef.props
export type AcademicCapEvents = typeof __propDef.events
export type AcademicCapSlots = typeof __propDef.slots
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
