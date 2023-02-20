/** @typedef {typeof __propDef.props}  PerbyteProps */
/** @typedef {typeof __propDef.events}  PerbyteEvents */
/** @typedef {typeof __propDef.slots}  PerbyteSlots */
export default class Perbyte extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PerbyteProps = typeof __propDef.props
export type PerbyteEvents = typeof __propDef.events
export type PerbyteSlots = typeof __propDef.slots
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
