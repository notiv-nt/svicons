/** @typedef {typeof __propDef.props}  DAndDProps */
/** @typedef {typeof __propDef.events}  DAndDEvents */
/** @typedef {typeof __propDef.slots}  DAndDSlots */
export default class DAndD extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DAndDProps = typeof __propDef.props
export type DAndDEvents = typeof __propDef.events
export type DAndDSlots = typeof __propDef.slots
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
