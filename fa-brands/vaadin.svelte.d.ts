/** @typedef {typeof __propDef.props}  VaadinProps */
/** @typedef {typeof __propDef.events}  VaadinEvents */
/** @typedef {typeof __propDef.slots}  VaadinSlots */
export default class Vaadin extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type VaadinProps = typeof __propDef.props
export type VaadinEvents = typeof __propDef.events
export type VaadinSlots = typeof __propDef.slots
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
