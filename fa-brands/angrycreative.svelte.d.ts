/** @typedef {typeof __propDef.props}  AngrycreativeProps */
/** @typedef {typeof __propDef.events}  AngrycreativeEvents */
/** @typedef {typeof __propDef.slots}  AngrycreativeSlots */
export default class Angrycreative extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AngrycreativeProps = typeof __propDef.props
export type AngrycreativeEvents = typeof __propDef.events
export type AngrycreativeSlots = typeof __propDef.slots
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
