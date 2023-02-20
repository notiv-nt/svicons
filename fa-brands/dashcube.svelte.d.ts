/** @typedef {typeof __propDef.props}  DashcubeProps */
/** @typedef {typeof __propDef.events}  DashcubeEvents */
/** @typedef {typeof __propDef.slots}  DashcubeSlots */
export default class Dashcube extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DashcubeProps = typeof __propDef.props
export type DashcubeEvents = typeof __propDef.events
export type DashcubeSlots = typeof __propDef.slots
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
