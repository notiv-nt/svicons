/** @typedef {typeof __propDef.props}  FulcrumProps */
/** @typedef {typeof __propDef.events}  FulcrumEvents */
/** @typedef {typeof __propDef.slots}  FulcrumSlots */
export default class Fulcrum extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FulcrumProps = typeof __propDef.props
export type FulcrumEvents = typeof __propDef.events
export type FulcrumSlots = typeof __propDef.slots
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
