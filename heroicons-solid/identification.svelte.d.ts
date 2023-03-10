/** @typedef {typeof __propDef.props}  IdentificationProps */
/** @typedef {typeof __propDef.events}  IdentificationEvents */
/** @typedef {typeof __propDef.slots}  IdentificationSlots */
export default class Identification extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type IdentificationProps = typeof __propDef.props
export type IdentificationEvents = typeof __propDef.events
export type IdentificationSlots = typeof __propDef.slots
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
