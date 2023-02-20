/** @typedef {typeof __propDef.props}  DochubProps */
/** @typedef {typeof __propDef.events}  DochubEvents */
/** @typedef {typeof __propDef.slots}  DochubSlots */
export default class Dochub extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DochubProps = typeof __propDef.props
export type DochubEvents = typeof __propDef.events
export type DochubSlots = typeof __propDef.slots
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
