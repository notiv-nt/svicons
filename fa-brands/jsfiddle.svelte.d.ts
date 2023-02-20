/** @typedef {typeof __propDef.props}  JsfiddleProps */
/** @typedef {typeof __propDef.events}  JsfiddleEvents */
/** @typedef {typeof __propDef.slots}  JsfiddleSlots */
export default class Jsfiddle extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JsfiddleProps = typeof __propDef.props
export type JsfiddleEvents = typeof __propDef.events
export type JsfiddleSlots = typeof __propDef.slots
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
