/** @typedef {typeof __propDef.props}  AvianexProps */
/** @typedef {typeof __propDef.events}  AvianexEvents */
/** @typedef {typeof __propDef.slots}  AvianexSlots */
export default class Avianex extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AvianexProps = typeof __propDef.props
export type AvianexEvents = typeof __propDef.events
export type AvianexSlots = typeof __propDef.slots
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
