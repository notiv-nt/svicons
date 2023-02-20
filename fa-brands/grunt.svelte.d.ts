/** @typedef {typeof __propDef.props}  GruntProps */
/** @typedef {typeof __propDef.events}  GruntEvents */
/** @typedef {typeof __propDef.slots}  GruntSlots */
export default class Grunt extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GruntProps = typeof __propDef.props
export type GruntEvents = typeof __propDef.events
export type GruntSlots = typeof __propDef.slots
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
