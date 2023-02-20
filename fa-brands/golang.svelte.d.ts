/** @typedef {typeof __propDef.props}  GolangProps */
/** @typedef {typeof __propDef.events}  GolangEvents */
/** @typedef {typeof __propDef.slots}  GolangSlots */
export default class Golang extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GolangProps = typeof __propDef.props
export type GolangEvents = typeof __propDef.events
export type GolangSlots = typeof __propDef.slots
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
