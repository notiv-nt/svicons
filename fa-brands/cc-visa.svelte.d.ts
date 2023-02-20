/** @typedef {typeof __propDef.props}  CcVisaProps */
/** @typedef {typeof __propDef.events}  CcVisaEvents */
/** @typedef {typeof __propDef.slots}  CcVisaSlots */
export default class CcVisa extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CcVisaProps = typeof __propDef.props
export type CcVisaEvents = typeof __propDef.events
export type CcVisaSlots = typeof __propDef.slots
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
