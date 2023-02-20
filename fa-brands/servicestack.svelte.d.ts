/** @typedef {typeof __propDef.props}  ServicestackProps */
/** @typedef {typeof __propDef.events}  ServicestackEvents */
/** @typedef {typeof __propDef.slots}  ServicestackSlots */
export default class Servicestack extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ServicestackProps = typeof __propDef.props
export type ServicestackEvents = typeof __propDef.events
export type ServicestackSlots = typeof __propDef.slots
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
