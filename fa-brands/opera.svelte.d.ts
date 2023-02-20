/** @typedef {typeof __propDef.props}  OperaProps */
/** @typedef {typeof __propDef.events}  OperaEvents */
/** @typedef {typeof __propDef.slots}  OperaSlots */
export default class Opera extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OperaProps = typeof __propDef.props
export type OperaEvents = typeof __propDef.events
export type OperaSlots = typeof __propDef.slots
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
