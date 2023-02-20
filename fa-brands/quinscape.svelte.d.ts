/** @typedef {typeof __propDef.props}  QuinscapeProps */
/** @typedef {typeof __propDef.events}  QuinscapeEvents */
/** @typedef {typeof __propDef.slots}  QuinscapeSlots */
export default class Quinscape extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type QuinscapeProps = typeof __propDef.props
export type QuinscapeEvents = typeof __propDef.events
export type QuinscapeSlots = typeof __propDef.slots
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
